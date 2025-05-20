function Header() {
  return (
    <div id="home" className="header-div">
      <div className="top-bar">
        <img
          src="src/assets/logo.png"
          alt="marieezoua-logo"
          className="header-logo"
        />

        <nav className="navigation">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </nav>
      </div>

      <div className="welcome-content">
        <p className="welcome-text">
          Howdy there, <br /> I'm{" "}
          <span className="welcome-name">Marie Ezoua</span>
        </p>

        <div className="welcome-sub-content">
          <img
            src="src/assets/profile-picture.png"
            alt="personal-picture"
            className="personal-picture"
          />
          <div className="header-btns">
            <button className="header-btn">Get In Touch</button>
            <button className="header-btn">Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
