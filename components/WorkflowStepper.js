"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./WorkflowStepper.css";

const steps = [
    {
        title: "Concept",
        icon: "/workflow/concept.svg",
        heading: "Concept",
        description: "We help our Partners carry out the discovery phase, defining the product-market fit and forming the project requirements. Get started with business analytics, lean startup coaching and design thinking"
    },
    {
        title: "Prototype",
        icon: "/workflow/prototype.svg",
        heading: "Prototype",
        description: "We create clickable product versions and help our Partners define further development, essential functionality and user design. According to the decisions made at this stage, we assign a professional team dedicated solely to your project."
    },
    {
        title: "MVP",
        icon: "/workflow/mvp.svg",
        heading: "MVP",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
        title: "Full Product",
        icon: "/workflow/full_project.svg",
        heading: "Full Product",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
        title: "Scaling",
        icon: "/workflow/scaling.svg",
        heading: "Scaling",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    }
];

export default function WorkflowStepper() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    return (
        <section id="workflow" className="workflow-section">
            <div className="workflow-container">
                <h2 className="workflow-main-heading">Workflow</h2>

                <div className="stepper">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div
                                className={`step-card ${index <= currentStep ? "active" : ""}`}
                                onClick={() => setCurrentStep(index)}
                                style={{ cursor: "pointer" }}
                            >
                                {/* Image above line */}
                                <div className="step-image-wrapper">
                                    <div className="step-image">
                                        <Image
                                            src={step.icon}
                                            alt={step.title}
                                            width={120}
                                            height={88}
                                            className="workflow-icon"
                                        />
                                    </div>
                                </div>

                                {/* Dot on line */}
                                <div className="step-dot"></div>

                                {/* Content below line */}
                                <div className="step-content">
                                    <p className="step-title">{step.title}</p>
                                    <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                                </div>
                            </div>

                            {index !== steps.length - 1 && (
                                <div className={`connecting-line ${index < currentStep ? "active" : ""}`}></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className="buttons-content-wrapper">
                    <button
                        className="nav-button prev-button"
                        onClick={prevStep}
                        disabled={currentStep === 0}
                    >
                        <span className="arrow">←</span>
                        <span className="button-text">Prev</span>
                    </button>

                    <div className="content-area">
                        <h3 className="step-heading">{steps[currentStep].heading}</h3>
                        <p className="step-description">
                            {currentStep === 0 ? (
                                <>
                                    We help our Partners carry out the discovery phase, defining the product-market fit and forming the project requirements. Get started with business <span className="highlight">analytics, lean startup coaching and design thinking</span>
                                </>
                            ) : currentStep === 1 ? (
                                <>
                                    We create <span className="highlight">clickable product versions</span> and help our Partners define further development, <span className="highlight">essential functionality</span> and user design. According to the decisions made at this stage, we assign a professional team dedicated solely to your project.
                                </>
                            ) : currentStep === 2 ? (
                                <>
                                    Your dedicated team creates a basic yet <span className="highlight">fully functional version</span> of the product ready for market launch. A minimum viable product helps you <span className="highlight">attract investments</span> and gather invaluable user feedback to determine the next features.
                                </>
                            ) : currentStep === 3 ? (
                                <>
                                    With the user feedback from the MVP and our business expertise, your assigned dedicated team creates a <span className="highlight">full-fledged, marketable product</span>. Our developers follow Scrum best practices and the agreed feature plan.
                                </>
                            ) : currentStep === 4 ? (
                                <>
                                    We bet on long-term collaborations and guide our Partners through the entire process, including scaling already existing products. We help them find new niches and <span className="highlight">expand the product</span>'s market presence.
                                </>
                            ) : (
                                steps[currentStep].description
                            )}
                        </p>
                    </div>

                    <button
                        className="nav-button next-button"
                        onClick={nextStep}
                        disabled={currentStep === steps.length - 1}
                    >
                        <span className="button-text">Next</span>
                        <span className="arrow">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
