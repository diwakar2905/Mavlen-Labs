"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Our Process", href: "#workflow" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const expertiseAreas = [
    { label: "FinTech & Investment", href: "/expertise" },
    { label: "SaaS Platforms", href: "/expertise" },
    { label: "Social Networks", href: "/expertise" },
    { label: "E-commerce", href: "/expertise" },
    { label: "HealthTech", href: "/expertise" },
    { label: "EdTech & LMS", href: "/expertise" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/mavlenlabs/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "https://x.com/mavlenlabs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Medium",
      href: "https://medium.com/@mavlenlabs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com/mavlenlabs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Image
                src="/mavlen-logo.svg"
                alt="MavlenLabs logo"
                width={50}
                height={50}
                priority
                className="footer-logo-img"
              />
              <span className="footer-logo-text">MavlenLabs</span>
            </div>
            <p className="footer-tagline">
              A modern services studio for teams who care about craft. We build exceptional digital experiences that scale.
            </p>
            <div className="footer-contact-info">
              <a href="mailto:hello@mavlenlabs.com" className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                hello@mavlenlabs.com
              </a>
              <a href="tel:+919310769235" className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91 9310769235
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      // handle in-page smooth scroll when on home, otherwise navigate to home with hash
                      if (link.href && link.href.startsWith("#")) {
                        e.preventDefault();
                        const id = link.href.slice(1);
                        if (pathname === "/") {
                          const el = typeof document !== 'undefined' && document.getElementById(id);
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth", block: "start" });
                            return;
                          }
                        }
                        // navigate to home with hash
                        router.push(`/${link.href}`);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Expertise</h4>
            <ul className="footer-links-list">
              {expertiseAreas.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Connect With Us</h4>
            <div className="footer-social-grid">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copyright">© {year} MavlenLabs. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <Link href="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-separator">•</span>
            <Link href="/terms-of-service" className="footer-legal-link">Terms of Service</Link>
            <span className="footer-separator">•</span>
            <Link href="/cookies" className="footer-legal-link">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
