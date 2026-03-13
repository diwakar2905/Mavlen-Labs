"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
import "./expertise.css";


const SERVICES = [
    {
        id: 1,
        title: "Social Networks",
        image: "/services/social_networks.svg",
    },
    {
        id: 2,
        title: "Online & Streaming Media Platforms",
        image: "/services/media.svg",
    },
    {
        id: 3,
        title: "FinTech & Investment Platforms",
        image: "/services/fintech.svg",
    },
    {
        id: 4,
        title: "Review Aggregators",
        image: "/services/review_aggregators.svg",
    },
    {
        id: 5,
        title: "FoodTech & Delivery",
        image: "/services/foodtech.svg",
    },
    {
        id: 6,
        title: "Travel & Hospitality",
        image: "/services/travel.svg",
    },
    {
        id: 7,
        title: "Utilities & Productivity Tools",
        image: "/services/utilities.svg",
    },
    {
        id: 8,
        title: "Property Listings & PropTech",
        image: "/services/proptech.svg",
    },
    {
        id: 9,
        title: "Blockchain Solutions & Crypto",
        image: "/services/crypto.svg",
    },
    {
        id: 10,
        title: "CRM / ERP",
        image: "/services/crm.svg",
    },
    {
        id: 11,
        title: "Internet of Things (IoT)",
        image: "/services/iot.svg",
    },
    {
        id: 12,
        title: "SaaS Platforms",
        image: "/services/saas.svg",
    },
    {
        id: 13,
        title: "LMS & EdTech",
        image: "/services/edtech.svg",
    },
    {
        id: 14,
        title: "HR Solutions",
        image: "/services/hr.svg",
    },
    {
        id: 15,
        title: "E-commerce & Classified Marketplaces",
        image: "/services/marketplaces.svg",
    },
    {
        id: 16,
        title: "Other",
        image: "/services/other.svg",
    },
];

export default function ExpertiseAreasPage() {
    return (
        <>
            <div className="expertise-page">
                <div className="expertise-container">
                    {/* Back Button */}
                    <Link href="/" className="back-button">
                        <span>←</span>
                    </Link>

                    {/* Page Title */}
                    <h1 className="expertise-title">Expertise Areas</h1>

                    {/* Description */}
                    <p className="expertise-description">
                        We offer innovative solutions that will fit our customer's requirements and aim for a long-lasting partnership. Our professional team is ready to provide you with the high-quality web solutions and bring your innovative ideas to life. Rocketech is using the most modern and most demanded technologies to create an outstanding project.
                    </p>

                    {/* Services Grid */}
                    <div className="services-grid">
                        {SERVICES.map((service) => (
                            <div key={service.id} className="service-item">
                                <div className="service-image">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={80}
                                        height={80}
                                        priority={service.id <= 8}
                                    />
                                </div>
                                <div className="service-info">
                                    <h3>{service.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}
