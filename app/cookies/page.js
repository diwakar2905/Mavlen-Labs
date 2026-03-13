"use client";

import Link from "next/link";
import "../privacy-policy/legal.css";

export default function CookiePolicy() {
  const sections = [
    { id: "what-are-cookies", title: "What Are Cookies?" },
    { id: "how-we-use", title: "How We Use Cookies" },
    { id: "cookie-types", title: "Types of Cookies" },
    { id: "third-party", title: "Third-Party Cookies" },
    { id: "managing", title: "Managing Cookies" },
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
              <circle cx="12" cy="12" r="10" />
              <circle cx="8" cy="9" r="1.5" fill="currentColor" />
              <circle cx="15" cy="8" r="1" fill="currentColor" />
              <circle cx="10" cy="14" r="1" fill="currentColor" />
              <circle cx="16" cy="13" r="1.5" fill="currentColor" />
              <circle cx="12" cy="17" r="1" fill="currentColor" />
            </svg>
          </div>
          <h1>Cookie Policy</h1>
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

        <section id="what-are-cookies">
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide valuable information to website owners.
          </p>
          <div className="legal-info-box">
            <p>Key Points About Cookies</p>
            <p>Cookies help us remember your preferences, understand how you use our site, and improve your overall experience. They do not contain personal information like your name or email unless you provide it to us.</p>
          </div>
        </section>

        <section id="how-we-use">
          <h2>2. How We Use Cookies</h2>
          <p>MavlenLabs uses cookies for the following purposes:</p>

          <h3>🔒 Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies as they are essential for basic website operations.
          </p>

          <h3>📊 Analytics Cookies</h3>
          <p>
            We use analytics cookies to understand how visitors interact with our website. This helps us improve our website&apos;s structure, content, and user experience. These cookies collect information anonymously and help us understand patterns in website usage.
          </p>

          <h3>⚙️ Functionality Cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalization, such as remembering your preferences, settings, and any customizations you make. They make your browsing experience more convenient.
          </p>

          <h3>📢 Marketing Cookies</h3>
          <p>
            Marketing cookies may be used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users. We currently use minimal marketing cookies and prioritize your privacy.
          </p>
        </section>

        <section id="cookie-types">
          <h2>3. Types of Cookies We Use</h2>
          <p>Below is a detailed breakdown of the cookies we use on our website:</p>

          <table className="cookie-table">
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>_session</code></td>
                <td>Essential - Maintains user session state</td>
                <td>Session</td>
              </tr>
              <tr>
                <td><code>_ga</code></td>
                <td>Analytics - Google Analytics identifier</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td><code>_gid</code></td>
                <td>Analytics - Distinguishes users</td>
                <td>24 hours</td>
              </tr>
              <tr>
                <td><code>_gat</code></td>
                <td>Analytics - Throttles request rate</td>
                <td>1 minute</td>
              </tr>
              <tr>
                <td><code>preferences</code></td>
                <td>Functionality - Stores user preferences</td>
                <td>1 year</td>
              </tr>
              <tr>
                <td><code>cookie_consent</code></td>
                <td>Essential - Remembers cookie consent</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="third-party">
          <h2>4. Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third-party services that appear on our pages. We carefully select partners who share our commitment to privacy:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> For website traffic analysis and understanding user behavior</li>
            <li><strong>LinkedIn:</strong> For social media integration and professional networking features</li>
          </ul>
          <p>
            These third parties have their own privacy and cookie policies. We encourage you to review them:
          </p>
          <ul>
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
            <li><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">LinkedIn Privacy Policy</a></li>
          </ul>
        </section>

        <section id="managing">
          <h2>5. Managing Cookies</h2>
          <p>
            You have control over cookies and can manage them in various ways. Please note that removing or blocking certain cookies may impact your user experience.
          </p>

          <h3>Browser Settings</h3>
          <p>
            Most modern browsers allow you to view, manage, delete, and block cookies. Here&apos;s how to access cookie settings in popular browsers:
          </p>
          <ul>
            <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
            <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
            <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions</li>
          </ul>

          <div className="legal-info-box highlight">
            <p>Important Note</p>
            <p>If you delete all cookies, any preferences you have set on our website will be lost and you may need to reconfigure them on your next visit.</p>
          </div>

          <h3>Opt-Out Options</h3>
          <p>You can also opt out of specific third-party tracking:</p>
          <ul>
            <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
            <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative Opt-out</a></li>
            <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Opt-out</a></li>
          </ul>
        </section>

        <section id="changes">
          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make changes:
          </p>
          <ul>
            <li>We will update the &quot;Last updated&quot; date at the top of this page</li>
            <li>For significant changes, we may display a prominent notice on our website</li>
            <li>Your continued use of our site after changes constitutes acceptance of the updated policy</li>
          </ul>
        </section>

        <section id="contact">
          <h2>7. Contact Us</h2>
          <p>
            If you have questions about our use of cookies or this policy, please contact us:
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
