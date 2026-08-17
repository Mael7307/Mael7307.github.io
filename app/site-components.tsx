import Link from "next/link";

export const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 18 18" width="18" height="18">
    {diagonal ? (
      <path d="M5 13 13 5M7 5h6v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    ) : (
      <path d="M4 9h10M10 5l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    )}
  </svg>
);

export const Download = () => (
  <svg aria-hidden="true" viewBox="0 0 18 18" width="18" height="18">
    <path d="M9 3v8M5.5 7.5 9 11l3.5-3.5M4 14h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
  </svg>
);

export function Header() {
  return (
    <nav className="nav wrap" aria-label="Main navigation">
      <Link className="wordmark" href="/" aria-label="Maël Jullien, home">MJ<span>.</span></Link>
      <div className="nav-links">
        <Link href="/#about">About</Link>
        <Link href="/projects">Research</Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link className="wordmark footer-mark" href="/">MJ<span>.</span></Link>
          <p>Agentic AI systems, rigorous evaluation, and retrieval-grounded reasoning for complex language tasks.</p>
        </div>
        <div className="footer-links">
          <span className="footer-email">mael.jullien@gmail.com</span>
          <a href="https://github.com/Mael7307" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
          <a href="https://www.linkedin.com/in/maeljullien373" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
          <a href="https://orcid.org/0000-0002-0303-2046" target="_blank" rel="noreferrer">ORCID <Arrow diagonal /></a>
          <a href="https://scholar.google.com/citations?user=MYCLb0oAAAAJ&amp;hl=en" target="_blank" rel="noreferrer">Google Scholar <Arrow diagonal /></a>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} Maël Jullien</p>
      </div>
    </footer>
  );
}
