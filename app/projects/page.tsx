import type { Metadata } from "next";
import { Arrow, Footer, Header } from "../site-components";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Research & Publications",
  description: "Thesis and publications by Maël Jullien in clinical NLP, language-model evaluation, retrieval, and structured reasoning.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="site-shell projects-page">
      <Header />
      <header className="projects-hero wrap">
        <p className="eyebrow"><span /> Publications · 2022—2026</p>
        <div className="projects-heading">
          <h1>Research in clinical NLP and <em>model reasoning.</em></h1>
          <div>
            <p>A PhD thesis and eight papers covering benchmark design, controlled evaluation, evidence retrieval, prompt adaptation, and structured inference.</p>
          </div>
        </div>
      </header>

      <section className="project-index wrap" aria-label="Research project list">
        {projects.map((project) => (
          <article className="project-card" id={project.id} key={project.id}>
            <div className="project-copy">
              <div className="project-meta"><span className="project-kind">{project.kind}</span><span>{project.year}</span><span>{project.venue}</span></div>
              <h2>{project.title}</h2>
              <p className="project-authors">{project.authors.join(", ")}</p>
              <section className="publication-abstract" aria-label={`Abstract for ${project.title}`}>
                <h3>Abstract</h3>
                <p className="project-summary">{project.summary}</p>
              </section>
            </div>
            <div className="publication-actions" aria-label={`Resources for ${project.title}`}>
              {project.links.map((link) => (
                <a
                  className={`resource-link${link.label === "Official erratum" ? " resource-link-alert" : ""}`}
                  href={link.url}
                  key={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} <Arrow diagonal />
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}
