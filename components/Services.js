"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Services.css";

const SERVICES = [
  {
    title: "Social Networks",
    icon: "/services/social_networks.svg",
  },
  {
    title: "Online & Streaming Media Platforms",
    icon: "/services/media.svg",
  },
  {
    title: "FinTech & Investment Platforms",
    icon: "/services/fintech.svg",
  },
  {
    title: "Review Aggregators",
    icon: "/services/review_aggregators.svg",
  },
  {
    title: "FoodTech & Delivery",
    icon: "/services/foodtech.svg",
  },
  {
    title: "Travel & Hospitality",
    icon: "/services/travel.svg",
  },
  {
    title: "Utilities & Productivity Tools",
    icon: "/services/utilities.svg",
  },
  {
    title: "Property Listings & PropTech",
    icon: "/services/proptech.svg",
  },
  {
    title: "Blockchain Solutions & Crypto",
    icon: "/services/crypto.svg",
  },
  {
    title: "CRM / ERP",
    icon: "/services/crm.svg",
  },
  {
    title: "Internet of Things (IoT)",
    icon: "/services/iot.svg",
  },
  {
    title: "SaaS Platforms",
    icon: "/services/saas.svg",
  },
  {
    title: "LMS & EdTech",
    icon: "/services/edtech.svg",
  },
  {
    title: "HR Solutions",
    icon: "/services/hr.svg",
  },
  {
    title: "E-commerce & Classified Marketplaces",
    icon: "/services/marketplaces.svg",
  },
  {
    title: "Other",
    icon: "/services/other.svg",
  },
];

export default function Services() {
  // Duplicate services for seamless loop
  const duplicatedServices = [...SERVICES, ...SERVICES];

  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Handle mouse enter - pause animation
    const handleMouseEnter = () => {
      setIsPaused(true);
    };

    // Handle mouse leave - resume animation after a delay
    const handleMouseLeave = () => {
      setIsPaused(false);
    };

    // Handle manual scroll - pause animation and resume after user stops scrolling
    const handleScroll = () => {
      setIsPaused(true);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Resume auto-scroll after 2 seconds of no scrolling
      scrollTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 2000);
    };

    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);
    marquee.addEventListener("scroll", handleScroll);

    return () => {
      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
      marquee.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="services-left">
            <span className="services-eyebrow">/ Services We Offer</span>
            <h1>
              Certified <br />
              <span>Excellence</span>
            </h1>
          </div>

          <div className="services-right">
            <p>
              We design and build scalable digital platforms across industries —
              from early-stage startups to enterprise-grade systems.
            </p>

            <div className="services-actions">
              <Link href="/expertise" className="services-link">
                View All Services →
              </Link>
            </div>
          </div>
        </div>

        {/* Auto-scrolling Cards */}
        <div
          ref={marqueeRef}
          className={`services-marquee ${isPaused ? 'paused' : ''}`}
        >
          <div className="services-track">
            {duplicatedServices.map((service, index) => (
              <Link href="/expertise" key={index} className="service-card">
                <div className="service-card-inner">
                  {/* Icon */}
                  <div className="service-icon">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={58}
                      height={58}
                    />
                  </div>

                  {/* Title + Arrow */}
                  <div className="service-footer">
                    <h3>{service.title}</h3>
                    <span className="service-arrow">↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
