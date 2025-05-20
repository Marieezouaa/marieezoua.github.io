import Header from "./header";
import AboutMe from "./about-me";
import Skills from "./skills";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Footer from "./footer";

import LinkedIn from "./assets/social-logos/linkedin-02-Stroke-Rounded.png";
import Github from "./assets/social-logos/github-logo.png";
import Twitter from "./assets/social-logos/new-twitter-Stroke-Rounded.png";
import Instagram from "./assets/social-logos/instagram-Stroke-Rounded.png";

function App() {
  return (
    <>
      <div className="social-icons-tab">
        <div className="links">
          {/*   linkedIn link   */}
          <a href="linkedin.com/in/marie-ezoua">
            <img
              className="social-image"
              src={LinkedIn}
              alt="LinkedIn Logo"
            />
          </a>

          {/*   github link  */}
          <a href="https://github.com/Marieezouaa">
            <img
              className="social-image"
              src={Github}
              alt="Github Logo"
            />
          </a>

          {/*  twitter link  */}
          <a href="https://x.com/Marieezouaa">
            <img
              className="social-image"
              src={Twitter}
              alt="Twitter Logo"
            />
          </a>

          {/*  twitter link  */}
          <a href="https://www.instagram.com/marieezouaa/">
            <img
              className="social-image"
              src={Instagram}
              alt="Instagram"
            />
          </a>
        </div>
      </div>

      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer/>
      
    </>
  );
}

export default App;
