"use client";
import "./NavBar.css";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const isManualScrolling = useRef(false);

  // Check if we're on a legal page
  const isLegalPage = pathname.startsWith("/privacy-policy") ||
    pathname.startsWith("/terms-of-service") ||
    pathname.startsWith("/cookies");

  useEffect(() => {
    // Skip section tracking on legal pages and clear active state
    if (isLegalPage) {
      setActiveSection("");
      return;
    }

    const sections = ["home", "services", "proof-of-execution", "workflow", "faq", "blog", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only update if not manually scrolling
          if (entry.isIntersecting && !isManualScrolling.current) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "-100px 0px -30% 0px"
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [pathname, isLegalPage]);

  if (pathname.startsWith("/expertise") || pathname.startsWith("/execution")) return null;

  const handleScrollTo = (sectionId) => {
    // If on legal page, navigate to home first
    if (isLegalPage) {
      window.location.href = `/#${sectionId}`;
      return;
    }

    // Set manual scrolling flag
    isManualScrolling.current = true;

    // Update active section immediately
    setActiveSection(sectionId);

    // Calculate offset based on screen size
    const isMobile = window.innerWidth <= 768;
    const navbarOffset = isMobile ? 120 : 100;

    // Scroll to section with offset
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    // Re-enable observer after scroll animation completes
    setTimeout(() => {
      isManualScrolling.current = false;
    }, 1000); // Adjust timing based on scroll duration
  };

  return (
    <header className={`nav ${isLegalPage ? "nav-legal" : ""}`}>
      <div className="nav-glass">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <Image
            src="/mavlen-logo.svg"
            alt="MavlenLabs logo"
            width={55}
            height={55}
            priority
            className={`nav-logo-img ${activeSection === "faq" || activeSection === "contact" || activeSection === "proof-of-execution" ? "nav-logo-white" : ""}`}
          />
        </Link>

        {/* Nav pill */}
        <nav className="nav-pill">
          {/* Home */}
          <span
            onClick={() => handleScrollTo("home")}
            className={`nav-pill-item ${activeSection === "home" ? "nav-pill-active" : ""
              }`}
          >
            Home
          </span>

          {/* Services */}
          <span
            onClick={() => handleScrollTo("services")}
            className={`nav-pill-item ${activeSection === "services" ? "nav-pill-active" : ""
              }`}
          >
            Services
          </span>

          {/* Proof of Execution */}
          <span
            onClick={() => handleScrollTo("proof-of-execution")}
            className={`nav-pill-item ${activeSection === "proof-of-execution" ? "nav-pill-active" : ""
              }`}
          >
            Work
          </span>

          {/* WorkFlow */}
          <span
            onClick={() => handleScrollTo("workflow")}
            className={`nav-pill-item ${activeSection === "workflow" ? "nav-pill-active" : ""
              }`}
          >
            WorkFlow
          </span>

          {/* FAQ */}
          <span
            onClick={() => handleScrollTo("faq")}
            className={`nav-pill-item ${activeSection === "faq" ? "nav-pill-active" : ""
              }`}
          >
            FAQ
          </span>

          {/* Blog */}
          <span
            onClick={() => handleScrollTo("blog")}
            className={`nav-pill-item ${activeSection === "blog" ? "nav-pill-active" : ""
              }`}
          >
            Blog
          </span>
        </nav>

        {/* CTA */}
        <button
          className={`nav-download ${activeSection === "contact" ? "nav-download-active" : ""}`}
          onClick={() => handleScrollTo("contact")}
        >
          Contact Us
        </button>
      </div>
    </header>
  );
}
