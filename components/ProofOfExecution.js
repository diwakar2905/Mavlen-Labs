"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import "./ProofOfExecution.css";

const PROJECTS = [
    {
        title: "Live Website",
        image: "/projects/live_websites.png",
        description: "99.9% Uptime with Edge Deployment & sub-100ms LCP.",
        link: "/execution"
    },
    {
        title: "SaaS Framework",
        image: "/projects/dashboard.png",
        description: "Multi-tenant architecture with real-time data engine.",
        link: "/execution"
    },
    {
        title: "Marketplace",
        image: "/projects/marketplacess.png",
        description: "High-concurrency search & integrated payment flows.",
        link: "/execution"
    }
];

export default function ProofOfExecution() {
    return (
        <section id="proof-of-execution" className="poe-section">
            <div className="poe-container">
                {/* Header - Styled like Services section */}
                <div className="poe-header">
                    <div className="poe-left">
                        <span className="poe-eyebrow">/ Proof of Execution</span>
                        <h1>
                            Proof of <br />
                            <span>Execution</span>
                        </h1>
                    </div>

                    <div className="poe-right">
                        <p>
                            Production-ready systems. Internal frameworks. Scalable architecture.
                        </p>
                    </div>
                </div>

                <div className="poe-grid">
                    {PROJECTS.map((project, index) => (
                        <Link key={index} href={project.link} className="poe-card">
                            <div className="poe-card-image">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="project-screenshot"
                                />
                            </div>
                            <div className="poe-card-content">
                                <h3>{project.title}</h3>
                                <p className="poe-description-line">{project.description}</p>
                                <div className="poe-tap-indicator">
                                    <span>Tap to view detail</span>
                                    <span className="poe-arrow">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
