"use client";

import Link from "next/link";
import "./legal.css";

export default function PrivacyPolicy() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-collected", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Information" },
    { id: "information-sharing", title: "Information Sharing" },
    { id: "data-security", title: "Data Security" },
    { id: "your-rights", title: "Your Rights" },
    { id: "cookies", title: "Cookies" },
    { id: "changes", title: "Policy Changes" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <div className="legal-page">

      {/* Hero Section */}
      <header className="legal-hero">
        <div className="legal-hero-content">
          <div className="legal-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h1>Privacy Policy</h1>
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

        <section id="introduction">
          <h2>1. Introduction</h2>
          <p>
            MavlenLabs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
          </p>
          <div className="legal-info-box">
            <p>Important Notice</p>
            <p>By using our website and services, you consent to the data practices described in this policy. If you do not agree with our policies, please do not use our services.</p>
          </div>
        </section>

        <section id="information-collected">
          <h2>2. Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Name and contact information (email address, phone number)</li>
            <li>Company name and job title</li>
            <li>Project details and requirements you share with us</li>
            <li>Communication preferences</li>
            <li>Billing and payment information for contracted services</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information, including:</p>
          <ul>
            <li>Device information (browser type, operating system, device type)</li>
            <li>IP address and approximate geographic location</li>
            <li>Pages visited, time spent, and navigation patterns</li>
            <li>Referring website addresses and exit pages</li>
            <li>Date and time of your visit</li>
          </ul>
        </section>

        <section id="how-we-use">
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services</li>
            <li><strong>Communication:</strong> To respond to your inquiries and provide project updates</li>
            <li><strong>Analytics:</strong> To understand how visitors use our website and improve user experience</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            <li><strong>Security:</strong> To protect against fraudulent or unauthorized activity</li>
            <li><strong>Marketing:</strong> To send relevant updates about our services (with your consent)</li>
          </ul>
        </section>

        <section id="information-sharing">
          <h2>4. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> With trusted partners who assist in our operations (hosting, analytics, email services)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>Consent:</strong> When you have given explicit consent to share</li>
          </ul>
          <div className="legal-info-box highlight">
            <p>Your Data Protection</p>
            <p>All third-party service providers are contractually obligated to protect your information and use it only for the purposes we specify.</p>
          </div>
        </section>

        <section id="data-security">
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security practices include:
          </p>
          <ul>
            <li>Encryption of data in transit using SSL/TLS protocols</li>
            <li>Secure data storage with access controls</li>
            <li>Regular security assessments and updates</li>
            <li>Employee training on data protection practices</li>
          </ul>
          <p>
            However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>
        </section>

        <section id="your-rights">
          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data we hold</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Portability:</strong> Request transfer of your data to another service</li>
            <li><strong>Objection:</strong> Object to certain types of data processing</li>
            <li><strong>Withdrawal:</strong> Withdraw consent at any time where processing is based on consent</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 days.
          </p>
        </section>

        <section id="cookies">
          <h2>7. Cookies & Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us understand how you interact with our site.
          </p>
          <p>
            For detailed information about the cookies we use and how to manage them, please see our <Link href="/cookies">Cookie Policy</Link>.
          </p>
        </section>

        <section id="changes">
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes:
          </p>
          <ul>
            <li>We will update the &quot;Last updated&quot; date at the top of this page</li>
            <li>For significant changes, we may notify you via email or a prominent notice on our website</li>
            <li>Your continued use of our services after changes constitutes acceptance of the updated policy</li>
          </ul>
        </section>

        <section id="contact">
          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this privacy policy, want to exercise your rights, or have concerns about our data practices, please contact us:
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
