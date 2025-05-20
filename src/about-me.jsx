function AboutMe() {
  const currentYear = new Date().getFullYear();

  const currentAge = currentYear - 2003;

  return (
    <div id="about-me" className="about-me">
      <h2 className="title">About Me</h2>
      <div className="sub-content">
        <div className="personal-description">
          <div className="details-list">
            <h3 className="sub-title">Who Am I?</h3>
            <ul>
              <li>
                <span className="label">Name</span>
                <span className="value">Marie Boboley Ezoua</span>
              </li>
              <li>
                <span className="label">Age</span>
                <span className="value">{currentAge}</span>
              </li>
              <li>
                <span className="label">Education</span>
                <span className="value">Georgia State University</span>
              </li>
              <li>
                <span className="label">Degree</span>
                <span className="value">
                  Bachelor Science in Computer Science
                </span>
              </li>
              <li>
                <span className="label">Fav. Books</span>
                <span className="value">
                  The Handmaid's Tale (Margaret Atwood), The Things They Carried
                  (Tim O'Brien), Verity (Colleen Hoover)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="about-me-content">
          <h3 className="sub-title">My Experience</h3>
          <p>
            Hi, I'm Marie Ezoua — a Computer Science graduate from Georgia State
            University passionate about building seamless digital experiences.
            With hands-on experience in Flutter, React, HTML/CSS, and
            JavaScript, I bring ideas to life across mobile and web platforms.
            From designing responsive interfaces to deploying cloud-based
            solutions using virtual machines, I love turning tech into impact.
          </p>
        </div>
      </div>
      <div className="about-link">
        <p className="about-link-text">
          <a href="#">More About ME</a>
        </p>
        <img
          src="src/assets/arrow-right-04-Stroke-Rounded-2.png"
          alt=""
          className="about-arrow"
        />
      </div>
    </div>
  );
}
export default AboutMe;
