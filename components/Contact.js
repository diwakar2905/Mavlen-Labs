"use client";

import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import DateTimePicker from "./DateTimePicker";
import "./Contact.css";

// EmailJS configuration using environment variables
// Make sure to add these to your .env.local file
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [beta, setBeta] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [dialog, setDialog] = useState({
    show: false,
    type: "", // 'success' or 'error'
    title: "",
    message: "",
  });

  const closeDialog = () => {
    setDialog({ ...dialog, show: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name.trim() || !phoneOrEmail.trim()) {
      setDialog({
        show: true,
        type: "error",
        title: "Missing Information",
        message: "Please enter your name and contact information.",
      });
      return;
    }

    if (!SERVICE_ID || !PUBLIC_KEY) {
      setDialog({
        show: true,
        type: "error",
        title: "Configuration Error",
        message:
          "EmailJS is not configured! Please create a .env.local file and add your NEXT_PUBLIC_EMAILJS_* keys.",
      });
      return;
    }

    // Show confirmation dialog instead of sending immediately
    setShowConfirmation(true);
  };

  const confirmAndSend = () => {
    setShowConfirmation(false);
    setIsSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setIsSending(false);
          setDialog({
            show: true,
            type: "success",
            title: "Message Sent!",
            message: "We'll get back to you personally shortly.",
          });
          setName("");
          setPhoneOrEmail("");
          setProjectDescription("");
          setBeta(false);
          setSelectedDate(null);
        },
        (error) => {
          setIsSending(false);
          console.error("FAILED...", error);
          setDialog({
            show: true,
            type: "error",
            title: "Sending Failed",
            message: `Something went wrong: ${error.text || "Unknown error"}`,
          });
        }
      );
  };

  return (
    <section id="contact" className="contact-page">
      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="dialog-overlay" onClick={() => setShowConfirmation(false)}>
          <div
            className="dialog-box confirmation"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <div className="dialog-icon confirmation-icon">
              📋
            </div> */}
            <h3>Review Your Information</h3>
            <p className="confirmation-subtitle">Please confirm your details before sending</p>

            <div className="confirmation-details">
              <div className="detail-row">
                <span className="detail-label">Name:</span>
                <span className="detail-value">{name}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Contact:</span>
                <span className="detail-value">{phoneOrEmail}</span>
              </div>
              {beta && selectedDate && (
                <div className="detail-row">
                  <span className="detail-label">Preferred Time:</span>
                  <span className="detail-value">
                    {selectedDate.day} {selectedDate.month} {selectedDate.year} at {selectedDate.hour}:{selectedDate.minute}
                    <br />
                    <small style={{ opacity: 0.7 }}>({selectedDate.userTimezone})</small>
                  </span>
                </div>
              )}
            </div>

            <div className="confirmation-buttons">
              <button
                className="btn-cancel"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
              <button
                className="btn-send"
                onClick={confirmAndSend}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Dialog Modal */}
      {dialog.show && (
        <div className="dialog-overlay" onClick={closeDialog}>
          <div
            className={`dialog-box ${dialog.type}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dialog-icon">
              {dialog.type === "success" ? "✓" : "!"}
            </div>
            <h3>{dialog.title}</h3>
            <p>{dialog.message}</p>
            <button onClick={closeDialog}>Close</button>
          </div>
        </div>
      )}

      <div className="contact-layout">
        {/* Left Image */}
        <div className="contact-image">
          <img
            src="/office_help.jpg" // replace with your image
            alt="Workspace"
          />
        </div>

        {/* Right Content */}
        <div className="contact-content">
          {/* <span className="eyebrow">[ get in touch ]</span> */}

          <h1>
            let’s work
            <br />
            <span>together</span>
          </h1>

          <p>
            Tell us about your product.
            <br />
            We’ll get back to you personally.
          </p>

          <form ref={form} className="form" onSubmit={sendEmail}>
            <input
              name="user_name"
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              name="user_contact"
              type="text"
              placeholder="Enter your mobile number or email"
              value={phoneOrEmail}
              onChange={(e) => setPhoneOrEmail(e.target.value)}
            />

            {/* <textarea
              name="project_description"
              placeholder="Describe your project (optional)"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              rows={1}
            /> */}

            <label className="checkbox">
              <input
                type="checkbox"
                name="initial_call"
                checked={beta}
                value={beta ? "Yes" : "No"}
                onChange={(e) => setBeta(e.target.checked)}
              />
              Open to an initial call (optional)
            </label>

            {/* Hidden inputs for date/time in different timezones */}
            {selectedDate && (
              <>
                <input
                  type="hidden"
                  name="preferred_datetime_utc"
                  value={selectedDate.utc}
                />
                <input
                  type="hidden"
                  name="preferred_datetime_ist"
                  value={selectedDate.ist}
                />
                <input
                  type="hidden"
                  name="user_timezone"
                  value={selectedDate.userTimezone}
                />
                {/* Main field sent to admin is now in IST */}
                <input
                  type="hidden"
                  name="preferred_datetime"
                  value={selectedDate.ist}
                />
              </>
            )}

            {beta && (
              <DateTimePicker onDateChange={setSelectedDate} />
            )}

            <button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Start a conversation"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
