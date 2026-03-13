"use client";

import Image from "next/image";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
    const phoneNumber = "919310769235";
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float-btn"
            aria-label="Contact us on WhatsApp"
        >
            <div className="whatsapp-icon-bg">
                <Image
                    src="/WhatsApp.png"
                    alt="WhatsApp"
                    width={50}
                    height={50}
                    className="whatsapp-img"
                />
            </div>
            <span className="whatsapp-tooltip">Chat with us</span>
        </a>
    );
}
