import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Download, Footer, Header } from "./site-components";
import { siteUrl } from "./site-config";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maël Jullien",
  url: siteUrl?.toString(),
  email: "mael.jullien@gmail.com",
  jobTitle: "R&D Engineer",
  worksFor: { "@type": "Organization", name: "Luminance" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Manchester" },
    { "@type": "CollegeOrUniversity", name: "University of Nottingham" },
    { "@type": "CollegeOrUniversity", name: "University of Leicester" },
  ],
  knowsAbout: [
    "Agentic AI systems",
    "Natural language processing",
    "Retrieval-augmented reasoning",
    "Language-model evaluation",
    "Clinical natural language inference",
  ],
  sameAs: [
    "https://github.com/Mael7307",
    "https://www.linkedin.com/in/maeljullien373",
    "https://orcid.org/0000-0002-0303-2046",
    "https://scholar.google.com/citations?user=MYCLb0oAAAAJ&hl=en",
  ],
};

const capabilities = [
  { title: "Agent architecture", text: "Stateful multi-agent workflows, tool routing, specialised solvers, verification, and iterative refinement." },
  { title: "Evaluation systems", text: "Reproducible benchmarks, objective scoring, diagnostic datasets, regression analysis, and model comparison." },
  { title: "Grounded reasoning", text: "Retrieval pipelines, evidence ranking, source attribution, and explicit inference over complex documents." },
];

export default function Home() {
  return (
    <main className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />

      <section className="hero wrap">
        <div className="hero-copy">
          <p className="identity-line"><strong>Maël Jullien</strong><span>AI R&amp;D Engineer</span></p>
          <h1>Agentic systems for <em>complex NLP tasks.</em></h1>
          <p className="hero-intro">
            I build and evaluate agentic AI systems, retrieval-augmented
            reasoning methods, and dependable frameworks for tasks that require
            expert-level language understanding.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">View research <Arrow /></Link>
            <a className="button button-quiet" href="/Mael_Jullien_CV.pdf" download>
              Download CV <Download />
            </a>
          </div>
          <p className="hero-interest"><strong>Interested in</strong> advanced AI engineering and research collaborations in agentic systems, evaluation, and grounded NLP.</p>
        </div>

        <div className="portrait-wrap" aria-label="Portrait of Maël Jullien">
          <Image className="portrait" src="/profile-conference.png" alt="Maël Jullien presenting research at a conference poster session" width={1086} height={1448} priority unoptimized />
        </div>
      </section>

      <section className="about-section section wrap" id="about">
        <p className="section-kicker">About</p>
        <div className="about-copy">
          <p className="lead">I build AI systems for complex language tasks where performance depends on coordinating retrieval, reasoning, tools, and verification.</p>
          <div className="about-columns">
            <p>My PhD at the University of Manchester used clinical trial language as a demanding testbed for evidence retrieval and inference. The public project archive documents that academic work: datasets, shared tasks, controlled model studies, retrieval methods, and specialised reasoning agents.</p>
          </div>
        </div>
      </section>

      <section className="profile-section section-dark">
        <div className="wrap">
          <p className="section-kicker section-kicker-light">Capabilities &amp; background</p>
          <div className="profile-grid">
            <div className="capability-column">
              <p className="profile-column-label">What I build</p>
              <div className="capability-grid">
                {capabilities.map((item) => (
                  <article className="capability-card" key={item.title}>
                    <div><h2>{item.title}</h2><p>{item.text}</p></div>
                  </article>
                ))}
              </div>
            </div>
            <div className="background-column">
              <p className="profile-column-label">Experience &amp; education</p>
              <div className="background-list">
                <article className="background-row current">
                  <p>Now</p><div><span>Luminance</span><h3>R&amp;D Engineer</h3><p>Agentic AI systems, evaluation, and language technology</p></div>
                </article>
                <article className="background-row">
                  <p>2026</p><div><span>Idiap Research Institute</span><h3>Research Intern: Doctorate</h3><p>Agentic reasoning frameworks</p></div>
                </article>
                <article className="background-row">
                  <p>2026</p><div><span>University of Manchester</span><h3>PhD Computer Science</h3><p>Clinical NLI, retrieval, and controlled reasoning</p></div>
                </article>
                <article className="background-row">
                  <p>2020</p><div><span>University of Nottingham</span><h3>MSc Computer Science &amp; AI</h3><p>Distinction</p></div>
                </article>
                <article className="background-row">
                  <p>2019</p><div><span>University of Leicester</span><h3>BSc Mathematics</h3><p>First Class Honours</p></div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-cta">
        <div className="wrap cta-grid">
          <div><p className="eyebrow"><span /> Academic research</p><h2>Clinical NLP as a testbed for reliable reasoning.</h2></div>
          <div><p>The archive contains my thesis and papers on clinical inference, benchmark design, retrieval, model evaluation, and structured agentic methods.</p><Link className="text-link" href="/projects">View publications <Arrow /></Link></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
