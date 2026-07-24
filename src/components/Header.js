function Header({ theme, onToggleTheme, menuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <header className="nav-wrap">
      <a className="monogram" href="#top" aria-label="Kumud Gupta home" onClick={onCloseMenu}>
        KG<span>°</span>
      </a>

      <button
        className="menu-toggle"
        onClick={onToggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <i></i>
        <i></i>
      </button>

      <nav className={menuOpen ? 'open' : ''}>
        <a href="#about" onClick={onCloseMenu}>About</a>
        <a href="#work" onClick={onCloseMenu}>Selected work</a>
        <a href="#experience" onClick={onCloseMenu}>Experience</a>
        <a href="#contact" onClick={onCloseMenu}>Contact</a>
      </nav>

      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        <span className={theme === 'dark' ? 'is-dark' : ''}>☼</span>
        <span className={theme === 'dark' ? 'is-dark' : ''}>☾</span>
      </button>
    </header>
  );
}

export default Header;