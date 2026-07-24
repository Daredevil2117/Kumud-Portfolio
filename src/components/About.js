const highlights = [
  { title: 'Brand & buyer insight', kicker: 'Commercial clarity', text: 'Experience translating buyer direction and global trend signals into focused, wearable fashion stories.' },
  { title: 'Digital design craft', kicker: 'Tools & technology', text: 'Fluent across Photoshop, Illustrator, Clo3D, Procreate and AI-assisted visual development.' },
  { title: 'From concept to collection', kicker: 'End-to-end process', text: 'From trend research and print direction to presentation-ready options and product development.' },
];

function About() {
  return <section id="about" className="about section-pad"><div className="about-heading"><p className="section-label">About me</p><h2>Design with a<br /><em>point of view.</em></h2></div><div className="about-feature"><div className="about-image"><div></div><img src="/assets/kumud-gupta.png" alt="Kumud Gupta at work" /></div><div className="about-narrative"><h3>Crafting elegance,<br />designing what’s next.</h3><p>I’m Kumud Gupta, a fashion designer with hands-on experience in menswear, womenswear, kidswear and accessories. I’m passionate about building collections that feel both current and commercially clear.</p><p>My work brings trend forecasting, digital print, illustration and 3D visualisation together. I enjoy the full journey — exploring an early idea, refining it with the buyer in mind, and shaping it into a finished collection story.</p><p>I believe the most resonant fashion balances a strong visual feeling with the details that make it truly wearable.</p><blockquote>“Fashion is not just about clothes; it’s a way to make everyday life feel more expressive.”</blockquote></div></div><div className="highlight-grid">{highlights.map((item) => <article className="highlight-card" key={item.title}><p>{item.kicker}</p><h3>{item.title}</h3><span>{item.text}</span></article>)}</div></section>;
}
export default About;
