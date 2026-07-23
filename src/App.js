import { useEffect, useState } from 'react';
import './App.css';

const projects = [
  {
    season: '01 / SS 27',
    title: "H&M Men's SS27",
    type: 'Menswear direction',
    description: 'A bold seasonal point of view for contemporary menswear. Explore the visual research, colour energy and collection story.',
    cover: '/assets/hm-mens-ss27-cover.png',
    pdf: '/assets/hm-mens-ss27.pdf',
    tone: 'coral',
  },
  {
    season: '02 / AW 27',
    title: "H&M Men's AW27",
    type: 'Concept collection',
    description: 'A considered autumn/winter narrative that brings together print, silhouette and thoughtful detail for the modern wardrobe.',
    cover: '/assets/hm-mens-aw27-cover.png',
    pdf: '/assets/hm-mens-aw27.pdf',
    tone: 'violet',
  },
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('kumud-theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('kumud-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === 'light' ? 'dark' : 'light');
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="monogram" href="#top" aria-label="Kumud Gupta home" onClick={closeMenu}>KG<span>°</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <i></i><i></i>
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
          <span className={theme === 'dark' ? 'is-dark' : ''}>☼</span>
          <span className={theme === 'dark' ? 'is-dark' : ''}>☾</span>
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span></span> Fashion designer · India</p>
            <h1>Making fashion<br /><em>feel forward.</em></h1>
            <p className="hero-text">I’m Kumud Gupta, a fashion designer shaping commercially relevant, visually expressive collections through trend insight, print and digital craft.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">View selected work <Arrow /></a>
              <a className="text-link" href="/assets/kumud-gupta-resume.pdf" target="_blank" rel="noreferrer">Resume <Arrow /></a>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="portrait-shape shape-one"></div>
            <div className="portrait-shape shape-two"></div>
            <div className="portrait-tag"><span>✦</span> Available for creative collaborations</div>
            <img src="/assets/kumud-gupta.png" alt="Kumud Gupta" />
            <p className="vertical-name">KUMUD GUPTA — PORTFOLIO 2026</p>
          </div>
        </section>

        <section id="about" className="about section-pad">
          <p className="section-label">01 — About me</p>
          <div className="about-grid">
            <h2>A sharp eye for<br /><em>what’s next.</em></h2>
            <div className="about-copy">
              <p>I create fashion that balances commercial clarity with a fresh point of view. From seasonal research to final print, I enjoy translating cultural shifts into pieces people want to wear.</p>
              <p>My process brings together trend forecasting, digital illustration, print development and 3D visualisation — always with an eye on the customer and the bigger collection story.</p>
              <div className="skill-list">
                <span>Adobe Illustrator</span><span>Photoshop</span><span>Clo3D</span><span>Procreate</span><span>Trend forecasting</span><span>AI design tools</span>
              </div>
            </div>
          </div>
          <div className="numbers">
            <div><strong>2<span>+</span></strong><p>Years creating for fashion</p></div>
            <div><strong>4</strong><p>Design disciplines, one point of view</p></div>
            <div><strong>100<span>+</span></strong><p>Design options brought to life</p></div>
          </div>
        </section>

        <section id="work" className="work section-pad">
          <div className="section-heading">
            <div><p className="section-label">02 — Selected work</p><h2>Pages from the<br /><em>process.</em></h2></div>
            <p>Two fashion-forward studies in colour, silhouette and the possibilities of modern menswear.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.tone}`} key={project.title}>
                <a href={project.pdf} target="_blank" rel="noreferrer" className="project-visual" aria-label={`Open ${project.title} PDF`}>
                  <img src={project.cover} alt={`${project.title} cover`} />
                  <span className="open-circle"><Arrow /></span>
                  <span className="project-number">{project.season}</span>
                </a>
                <div className="project-info">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <span className="project-desc">{project.description}</span>
                  <a href={project.pdf} target="_blank" rel="noreferrer">View presentation <Arrow /></a>
                </div>
              </article>
            ))}
          </div>
          <p className="small-note">A selection of presentation work. Full project details available on request.</p>
        </section>

        <section id="experience" className="experience section-pad">
          <div className="experience-intro"><p className="section-label">03 — Experience</p><h2>Designing from<br /><em>idea to shelf.</em></h2></div>
          <div className="role-list">
            <div className="role"><p>05.2024 — Present</p><div><h3>Fashion Designer</h3><span>H&M, El Corte, American Eagle · Noida</span></div><p>Trend research, print and collection development</p></div>
            <div className="role"><p>01.2025 — 11.2025</p><div><h3>Fashion Designer</h3><span>Zara Women & Lingerie · Noida</span></div><p>Global trend analysis and buyer-led design</p></div>
            <div className="role"><p>06.2024 — 08.2024</p><div><h3>Fashion Designer</h3><span>Zara Menswear & Kidswear · Noida</span></div><p>102 design options approved by buyer</p></div>
            <div className="role"><p>10.2024 — 04.2025</p><div><h3>Freelance Designer</h3><span>Digital Print Lab · Chandigarh</span></div><p>Client-ready print stories and visual assets</p></div>
          </div>
        </section>

        <section id="contact" className="contact section-pad">
          <p className="section-label">04 — Contact</p>
          <div className="contact-main"><h2>Let’s make<br /><em>something</em> fresh.</h2><a className="contact-email" href="mailto:guptakumud98@gmail.com">guptakumud98@gmail.com <Arrow /></a></div>
          <div className="contact-bottom"><p>Yamunanagar, India<br />Available for new opportunities.</p><a className="button button-outline" href="/assets/kumud-gupta-resume.pdf" target="_blank" rel="noreferrer">Download resume <Arrow /></a></div>
        </section>
      </main>
      <footer><a className="monogram" href="#top">KG<span>°</span></a><p>© {new Date().getFullYear()} Kumud Gupta</p><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
