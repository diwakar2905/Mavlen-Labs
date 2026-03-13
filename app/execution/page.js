"use client";

import Link from "next/link";
import Image from "next/image";
import "./execution.css";

const CLIENT_PROJECTS = [
    {
        id: 1,
        name: "Antillia Inn",
        industry: "Hospitality",
        image: "/projects/live_websites.png",
        link: "https://antilia-inn.mavlenlabs.com/",
        description: "Designed and deployed a production-ready web platform optimized for performance and brand presence.",
        case: {
            problem: "Boutique hotel required an integrated inquiry and reservation flow that didn't feel like a generic template.",
            approach: "Hybrid SSR approach for fast content delivery with interactive reservation components.",
            techStack: "React, Node.js, PostgreSQL, Cloudinary",
            outcome: ["• Production deployed", "• Integrated inquiry flow", "• Refined typography", "• Performance optimized"]
        }
    },
    {
        id: 2,
        name: "thegoosebumpsstays",
        industry: "Hospitality",
        image: "/projects/goosebumpss.png",
        link: "https://thegoosebumpsstays.mavlenlabs.com/",
        description: "Designed and deployed a production-ready web platform optimized for performance and brand presence.",
        case: {
            problem: "Legacy booking system was slow and failed to capture the brand's 'cozy' aesthetic, leading to high bounce rates.",
            approach: "Rebuilt with a focus on visual storytelling and sub-second performance using Next.js and high-res optimized assets.",
            techStack: "Next.js, Tailwind CSS, Framer Motion, Vercel Edge",
            outcome: ["• Fully responsive", "• Optimized performance", "• Production deployed", "• SEO-ready"]
        }
    },
    {
        id: 3,
        name: "Artzon Interiors",
        industry: "Hospitality",
        image: "/projects/artzons.png",
        link: "https://artzoninteriors.mavlenlabs.com/",
        description: "Designed and deployed a production-ready web platform optimized for performance and brand presence.",
        case: {
            problem: "Client needed a high-end digital portfolio that felt as premium as their physical interior design projects.",
            approach: "Implemented a minimalist grid-based floor-plan inspired layout with smooth staggered animations.",
            techStack: "Next.js, CSS Modules, GSAP for micro-interactions",
            outcome: ["• High-fidelity visuals", "• Seamless gallery transitions", "• Mobile-first design", "• Fast LCP"]
        }
    },
    {
        id: 4,
        name: "Kama Culture",
        industry: "E-commerce",
        tag: "In Progress",
        image: "/projects/kamacultures.png",
        link: "https://kama-cultures.mavlenlabs.com/",
        description: "Designed and deployed a production-ready web platform optimized for performance and brand presence.",
        case: {
            problem: "Crafting a digital experience for artisan curation that respects cultural heritage while feeling modern.",
            approach: "Used earthy color palettes and custom-built curation components to showcase artisan work.",
            techStack: "Next.js, Sanity CMS, Framer Motion",
            outcome: ["• Beta deployment", "• Modular content structure", "• Cultural-centric UI", "• SEO-ready"]
        }
    }
];

const INTERNAL_SYSTEMS = [
    {
        id: 1,
        name: "GetRanked",
        tag: "Internal Experiment",
        image: "/projects/getranked.png",
        link: "https://getranked.mavlenlabs.com/",
        position: "A modular ranking system built to explore scalable SaaS architecture and admin controls.",
        description: "Focus on architecture, not popularity. This system explores high-throughput data ranking and complex admin permissions.",
        techStack: "Go, Redis, React, PostgreSQL"
    },
];

const PRODUCT_INITIATIVES = [
    {
        id: 1,
        name: "HOOD SQUARE",
        tag: "In Production",
        image: "/projects/marketplacess.png",
        link: "https://hoodsquare.mavlenlabs.com/",
        overview: "A scalable campus marketplace designed for high user concurrency and real-time listing interactions.",
        vision: "To create the primary trust-layer for campus transactions, starting with verified student interactions.",
        architecture: "Event-driven microservices architecture with a real-time notification engine and edge-cached search.",
        features: ["Student Verification", "Live Chat", "Escrow-lite Payments", "Proximity Discovery"],
        plan: "Expanding from single campus to multi-regional support with AI-driven fraud detection.",
        techStack: "Flutter, Node.js, Socket.io, ElasticSearch, AWS",
    }
];

export default function ExecutionPage() {
    return (
        <div className="execution-page">
            <div className="execution-container">
                {/* Back Button */}
                <Link href="/" className="back-btn">
                    <span>←</span>
                </Link>

                {/* Header */}
                <header className="execution-header-section">
                    <span className="execution-eyebrow">/ Proof of Execution</span>
                    <h1 className="execution-title">Authority through Execution</h1>
                    <p className="execution-subtitle">
                        We don't just design; we deploy. Professional systems from client solutions to internal R&D.
                    </p>
                </header>

                {/* SECTION 1: Client Project */}
                <section className="execution-content-block">
                    <div className="block-label">01. Client Platforms (Production)</div>
                    <div className="clients-list">
                        {CLIENT_PROJECTS.map((project, index) => (
                            <a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`client-card ${index % 2 === 1 ? 'reverse' : ''}`}
                            >
                                <div className="client-visual">
                                    <div className="image-wrap">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            className="styled-image"
                                        />
                                        {project.tag && <span className="status-badge">{project.tag}</span>}
                                    </div>
                                </div>
                                <div className="client-info">
                                    <div className="industry-tag">{project.industry}</div>
                                    <h2>{project.name}</h2>
                                    <p className="main-desc">{project.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* SECTION 2: Internal Engineering Systems */}
                {/* <section className="execution-content-block"> */}
                {/* <div className="block-label">02. Internal Engineering Systems</div>
                    <div className="systems-intro">
                        <p>These are internally developed platforms and architectural systems used to accelerate product delivery.</p>
                    </div>
                    <div className="systems-grid">
                        {INTERNAL_SYSTEMS.map((system) => (
                            <a
                                key={system.id}
                                href={system.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="system-card"
                            >
                                <div className="system-image-area">
                                    <Image src={system.image} alt={system.name} fill className="contained-img" />
                                    <span className="system-tag">{system.tag}</span>
                                </div>
                                <div className="system-info-area">
                                    <h3>{system.name}</h3>
                                    <p className="positioning">{system.position}</p>
                                    <p className="sub-desc">{system.description}</p>
                                    <p className="tech"><strong>Tech:</strong> {system.techStack}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section> */}

                {/* SECTION 3: Marketplace Initiative */}
                <section className="execution-content-block marketplace-block">
                    <div className="block-label">02. Marketplace Platform – In Production</div>
                    {PRODUCT_INITIATIVES.map((initiative, idx) => (
                        <a
                            key={initiative.id}
                            href={initiative.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`client-card ${idx % 2 === 1 ? 'reverse' : ''} initiative-card`}
                        >
                            <div className="client-visual">
                                    <div className="image-wrap initiative-image-wrap">
                                    <Image src={initiative.image} alt={initiative.name} width={720} height={420} className="initiative-img fixed" />
                                    {initiative.tag && <span className="status-badge">{initiative.tag}</span>}
                                </div>
                            </div>
                            <div className="client-info">
                                <div className="industry-tag">Marketplace</div>
                                <h2>{initiative.name}</h2>
                                <p className="main-desc">{initiative.overview}</p>

                                <div className="mini-case">
                                    <div className="case-item">
                                        <strong>Vision</strong>
                                        <p>{initiative.vision}</p>
                                    </div>
                                    <div className="case-item">
                                        <strong>Architecture</strong>
                                        <p>{initiative.architecture}</p>
                                    </div>
                                </div>

                                <div className="mini-case" style={{marginTop:16}}>
                                    <div className="case-item">
                                        <strong>Key Features</strong>
                                        <p>{initiative.features.join(', ')}</p>
                                    </div>
                                    <div className="case-item">
                                        <strong>Tech Stack</strong>
                                        <p>{initiative.techStack}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </section>
            </div>
        </div>
    );
}
