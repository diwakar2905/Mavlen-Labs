"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  function handleContactClick(e) {
    e.preventDefault();
    const el = typeof document !== 'undefined' && document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push('/contact');
    }
  }
  return (
    <section id="home" className="hero">
      <div className="hero-inner hero-grid">
        <div className="hero-left">
          <h1 className="hero-title">
            We partner with <span className="hero-highlight">product owners</span>
            <br /> and <span className="hero-highlight">founders</span> by developing
            <br />products from scratch or growing <span className="no-break">the existing product</span>
          </h1>

          <p className="hero-tagline">From idea to impact.</p>

          <div className="hero-actions">
            <button onClick={handleContactClick} className="btn btn-primary">
              Tell us what in your mind
            </button>
          </div>
        </div>

        <div className="hero-right hero-illustration">
          <img
            src="/Untitled design (33).png"
            alt="Product development illustration"
          />
        </div>
      </div>
    </section>
  );
}
