"use client";

import { useState } from "react";
import "./Faq.css";

const FAQS = [
  {
    q: "What services does MavlenLabs provide?",
    a: "We design and build high-quality digital products including websites, web apps, UI/UX systems, and scalable solutions tailored to your business goals.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects take between 2–6 weeks depending on scope, complexity, and feedback cycles. We always share a clear timeline upfront.",
  },
  {
    q: "Do you work with startups or only large companies?",
    a: "Both. We love early-stage startups just as much as established companies. Our process adapts to your stage and budget.",
  },
  {
    q: "What makes MavlenLabs different?",
    a: "We combine clean design, performance-first development, and clear communication. No fluff. No overengineering. Just premium results.",
  },
  {
    q: "How do we get started?",
    a: "Simply reach out via our contact form. We’ll schedule a quick call to understand your needs and suggest the best next steps.",
  },
];

export default function Faq() {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h1 className="faq-title">
          Frequently Asked <span>Questions</span>
        </h1>
        <p className="faq-subtitle">
          Everything you need to know before working with us.
        </p>

        <div className="faq-list">
          {FAQS.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "open" : ""}`}
                onClick={() => setActive(isOpen ? null : index)}
              >
                <div className="faq-question">
                  <span>{item.q}</span>
                  <div className="faq-icon">{isOpen ? "−" : "+"}</div>
                </div>

                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
