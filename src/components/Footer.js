function Footer() {
  return (
    <footer>
      <a className="monogram" href="#top">
        KG<span>°</span>
      </a>
      <p>© {new Date().getFullYear()} Kumud Gupta</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/kumud-gupta-8a99082a1/" target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href="https://www.instagram.com/kumud_designverse?igsh=bTU0emVucHZqb2ll" target="_blank" rel="noreferrer">
          Instagram ↗
        </a>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;