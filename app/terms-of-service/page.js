"use client";

import Link from "next/link";
import "../privacy-policy/legal.css";

export default function TermsOfService() {
  const sections = [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "services", title: "Description of Services" },
    { id: "responsibilities", title: "Client Responsibilities" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "payment", title: "Payment Terms" },
    { id: "confidentiality", title: "Confidentiality" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "termination", title: "Termination" },
    { id: "contact", title: "Contact Information" },
  ];

  return (
    <div className="legal-page">

      {/* Hero Section */}
      <header className="legal-hero">
        <div className="legal-hero-content">
          <div className="legal-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <h1>Terms of Service</h1>
          <p className="legal-updated">Last updated: January 14, 2026</p>
        </div>
      </header>

      {/* Content */}
      <div className="legal-container">
        {/* Table of Contents */}
        <div className="legal-toc">
          <h3 className="legal-toc-title">Table of Contents</h3>
          <ul className="legal-toc-list">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <section id="acceptance">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the MavlenLabs website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          <div className="legal-info-box">
            <p>Agreement Overview</p>
            <p>These terms constitute a legally binding agreement between you (&quot;Client&quot;) and MavlenLabs (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). Please read them carefully before engaging our services.</p>
          </div>
        </section>

        <section id="services">
          <h2>2. Description of Services</h2>
          <p>
            MavlenLabs provides professional software development, design, and consulting services. Our offerings include:
          </p>
          <ul>
            <li><strong>Custom Software Development:</strong> Tailored solutions built to your specifications</li>
            <li><strong>Web & Mobile Applications:</strong> Full-stack development for all platforms</li>
            <li><strong>UI/UX Design:</strong> User-centered design and prototyping</li>
            <li><strong>Technical Consulting:</strong> Architecture, strategy, and technology guidance</li>
            <li><strong>Product Development:</strong> End-to-end product lifecycle support</li>
            <li><strong>Maintenance & Support:</strong> Ongoing technical support and updates</li>
          </ul>
          <p>
            Specific deliverables, timelines, and scope will be defined in individual project agreements or Statements of Work (SOW).
          </p>
        </section>

        <section id="responsibilities">
          <h2>3. Client Responsibilities</h2>
          <p>To ensure successful project delivery, as a client you agree to:</p>
          <ul>
            <li><strong>Accurate Information:</strong> Provide complete and accurate project requirements and specifications</li>
            <li><strong>Timely Communication:</strong> Respond to inquiries and feedback requests within agreed timeframes</li>
            <li><strong>Access & Resources:</strong> Provide necessary access, credentials, and materials required for the project</li>
            <li><strong>Approvals:</strong> Review and approve deliverables at designated milestones</li>
            <li><strong>Payment:</strong> Fulfill payment obligations as outlined in the project agreement</li>
            <li><strong>Legal Compliance:</strong> Ensure your project requirements comply with applicable laws</li>
          </ul>
          <div className="legal-info-box highlight">
            <p>Project Success</p>
            <p>Delays in client responsibilities may impact project timelines and deliverables. We will communicate proactively if any issues arise.</p>
          </div>
        </section>

        <section id="intellectual-property">
          <h2>4. Intellectual Property</h2>

          <h3>Our Property</h3>
          <p>
            The following remain the exclusive property of MavlenLabs:
          </p>
          <ul>
            <li>Our website, brand name, logos, and visual identity</li>
            <li>Proprietary tools, frameworks, and methodologies</li>
            <li>Pre-existing code libraries and components</li>
            <li>General knowledge and expertise gained during projects</li>
          </ul>

          <h3>Client Deliverables</h3>
          <p>
            Upon full and final payment, clients receive ownership of custom work product as follows:
          </p>
          <ul>
            <li>Custom code written specifically for your project</li>
            <li>Design assets created for your project</li>
            <li>Documentation and specifications</li>
          </ul>
          <p>
            Third-party licenses, open-source components, and our proprietary frameworks are provided under their respective license terms.
          </p>
        </section>

        <section id="payment">
          <h2>5. Payment Terms</h2>
          <ul>
            <li><strong>Project Pricing:</strong> Fees are outlined in individual project agreements (fixed-price or time-and-materials)</li>
            <li><strong>Deposits:</strong> Projects typically require an upfront deposit before work begins</li>
            <li><strong>Invoicing:</strong> Invoices are issued according to agreed milestones or billing cycles</li>
            <li><strong>Payment Period:</strong> Invoices are due within 14 days unless otherwise specified</li>
            <li><strong>Late Payments:</strong> Overdue accounts may incur interest charges and work suspension</li>
            <li><strong>Expenses:</strong> Pre-approved third-party costs will be billed at cost plus any agreed markup</li>
          </ul>
        </section>

        <section id="confidentiality">
          <h2>6. Confidentiality</h2>
          <p>
            Both parties agree to maintain strict confidentiality of proprietary information exchanged during the project engagement:
          </p>
          <ul>
            <li>Business strategies, plans, and financial information</li>
            <li>Technical specifications and source code</li>
            <li>User data and customer information</li>
            <li>Any information explicitly marked as confidential</li>
          </ul>
          <p>
            Confidentiality obligations survive the termination of any agreement and continue indefinitely for trade secrets.
          </p>
        </section>

        <section id="liability">
          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law:
          </p>
          <ul>
            <li>MavlenLabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
            <li>This includes loss of profits, data, business opportunities, or goodwill</li>
            <li>Our total liability shall not exceed the fees paid for the specific service giving rise to the claim</li>
          </ul>

          <h3>Warranties</h3>
          <p>
            We warrant that our services will be performed in a professional manner consistent with industry standards. We provide a 30-day warranty period for bug fixes on delivered work.
          </p>
          <p>
            Except as expressly stated, services are provided &quot;as is&quot; without warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
        </section>

        <section id="termination">
          <h2>8. Termination</h2>
          <p>
            Either party may terminate a project agreement under the following conditions:
          </p>
          <ul>
            <li><strong>By Client:</strong> With 14 days written notice, paying for all work completed</li>
            <li><strong>By MavlenLabs:</strong> With 14 days written notice, delivering all completed work</li>
            <li><strong>For Cause:</strong> Immediately upon material breach by either party</li>
          </ul>

          <h3>Upon Termination</h3>
          <ul>
            <li>Client pays for all work completed through the termination date</li>
            <li>We deliver all completed deliverables and work-in-progress</li>
            <li>Confidentiality and intellectual property provisions survive termination</li>
          </ul>
        </section>

        <section id="contact">
          <h2>9. Contact Information</h2>
          <p>
            For questions about these Terms of Service or to discuss a project, please contact us:
          </p>
          <div className="legal-contact">
            <div className="legal-contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="legal-contact-content">
              <strong>MavlenLabs</strong>
              <a href="mailto:hello@mavlenlabs.com">hello@mavlenlabs.com</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
