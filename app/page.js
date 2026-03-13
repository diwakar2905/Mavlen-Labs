// app/page.js
import Link from "next/link";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import Hero from "./home_page/hero";
import "./home_page/home.css";
import Contact from "../components/Contact";
import GridBackground from "../components/GridBackground";
import Faq from "../components/Faq";
import Services from "../components/Services";
import ProofOfExecution from "../components/ProofOfExecution";
import WorkflowStepper from "../components/WorkflowStepper";
import Blog from "../components/Blog";

export default function HomePage() {
  return (
    <GridBackground>
      {/* HERO */}
      <Hero />
      <Services />
      <ProofOfExecution />
      <WorkflowStepper />
      <Faq />
      <Blog />
      <Contact />
      {/* <Hero />
      <Hero />
      <Hero /> */}

      {/* LOGO / HIGHLIGHT BAND */}
      {/* <section className="band band-logos">
        <div className="band-inner">
          <p className="band-kicker">For teams who care about craft</p>
          <p className="band-text">
            We help founders, product leaders and CTOs ship fast without
            sacrificing quality — by embedding a focused product team alongside
            yours.
          </p>
        </div>
      </section> */}

      {/* <Section
        id="services"
        eyebrow="Capabilities"
        title="One team across product, design, and engineering"
        subtitle="You get a cross-functional squad that can take you from a blank page to a shipped release — and keep evolving the product after launch."
      >
        <div className="grid-3">
          <ServiceCard
            title="Product strategy"
            description="Clarify the opportunity, slice down scope, and prioritize what actually moves the needle."
            items={[
              "Problem & user discovery",
              "MVP definition",
              "Outcome-driven roadmaps",
            ]}
          />
          <ServiceCard
            title="Design & UX"
            description="Interfaces that feel light and obvious, even when the data and flows are complex."
            items={[
              "User journeys & IA",
              "Wireframes & visual design",
              "Design systems & UI kits",
            ]}
          />
          <ServiceCard
            title="Engineering & delivery"
            description="Modern web apps with robust backends, clean architecture, and smooth deployments."
            items={[
              "React / Next.js frontends",
              "APIs & integrations",
              "Testing, performance & monitoring",
            ]}
          />
        </div>
      </Section>

      <Section
        id="industries"
        className="section-alt"
        eyebrow="Where we build"
        title="Platforms & products we specialise in"
        subtitle="We bring a reusable playbook for building platforms, marketplaces, and tools across multiple industries."
      >
        <div className="industries-grid">
          <div className="industries-column">
            <h3>Consumer & media</h3>
            <div className="pill-grid">
              <span className="pill">Social Networks</span>
              <span className="pill">Online & Streaming Media Platforms</span>
              <span className="pill">Review Aggregators</span>
              <span className="pill">FoodTech & Delivery</span>
              <span className="pill">Travel & Hospitality</span>
            </div>
          </div>

          <div className="industries-column">
            <h3>Finance & emerging tech</h3>
            <div className="pill-grid">
              <span className="pill">FinTech & Investment Platforms</span>
              <span className="pill">Blockchain Solutions & Crypto</span>
              <span className="pill">SaaS Platforms</span>
            </div>

            <h3>Work & learning</h3>
            <div className="pill-grid">
              <span className="pill">LMS & EdTech</span>
              <span className="pill">HR Solutions</span>
            </div>
          </div>

          <div className="industries-column">
            <h3>Operations & infrastructure</h3>
            <div className="pill-grid">
              <span className="pill">Utilities & Productivity Tools</span>
              <span className="pill">CRM / ERP</span>
              <span className="pill">Internet of Things</span>
              <span className="pill">Property Listings & PropTech</span>
              <span className="pill">E-commerce & Classified Marketplaces</span>
              <span className="pill">Other custom platforms</span>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="work"
        eyebrow="Selected work"
        title="A taste of the problems we like to solve"
        subtitle="Details are anonymised, but the challenges and patterns repeat across many products."
      >
        <div className="grid-3">
          <ProjectCard
            tag="B2B SaaS"
            title="Unified analytics platform"
            description="Turned a patchwork of reports into a single analytics product used by sales, ops, and leadership teams."
            metrics={["↑ adoption across teams", "↓ onboarding time"]}
          />
          <ProjectCard
            tag="Ops tooling"
            title="Operations control center"
            description="Centralised support, billing, and risk workflows into one internal console with clear ownership."
            metrics={["1 tool instead of 5", "Fewer manual processes"]}
          />
          <ProjectCard
            tag="MVP launch"
            title="Zero-to-one for a new product"
            description="Helped a founder validate a new idea, launch an MVP, and get to investor-ready demos in weeks."
            metrics={["MVP in 6–8 weeks", "Foundation for V1"]}
          />
        </div>
      </Section>

      <Section
        id="process"
        className="section-alt"
        eyebrow="Process"
        title="We keep it light, transparent, and very product-driven"
      >
        <ol className="process-strip">
          <li>
            <h3>01 · Discover</h3>
            <p>
              Clarify goals, users, and constraints. Decide what success looks
              like and where the risks are.
            </p>
          </li>
          <li>
            <h3>02 · Design</h3>
            <p>
              Design flows and UI you can react to quickly. No heavy slide decks
              — real product screens.
            </p>
          </li>
          <li>
            <h3>03 · Build</h3>
            <p>
              Ship in small slices, demo often, and keep you close to every
              release and trade-off.
            </p>
          </li>
          <li>
            <h3>04 · Evolve</h3>
            <p>
              Measure, refine, and help you scale the product and the team
              behind it.
            </p>
          </li>
        </ol>
      </Section>

      <Section
        id="cta"
        eyebrow="Let’s talk"
        title="Have a platform or product in mind?"
        subtitle="Share a short brief or even just a rough idea — we’ll come back with a suggested approach and next steps."
      >
        <div className="cta-panel cta-panel-gradient">
          <p>
            We can join as your core product team, or plug into your existing
            design and engineering org. Either way, we keep communication direct
            and outcomes measurable.
          </p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              Book a consultation
            </Link>
            <a href="mailto:hello@mavlenlabs.com" className="btn btn-ghost">
              Email the team
            </a>
          </div>
        </div>
      </Section> */}
    </GridBackground>
  );
}
