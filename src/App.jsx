import Header from "./header";
import AboutMe from "./about-me";
import Skills from "./skills";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Footer from "./footer";

function App() {
  return (
    <>
      <div className="social-icons-tab">
        <div className="links">
          {/*   linkedIn link   */}
          <a href="linkedin.com/in/marie-ezoua">
            <img
              className="social-image"
              src="src/assets/social-logos/linkedin-02-Stroke-Rounded.png"
              alt=""
            />
          </a>

          {/*   github link  */}
          <a href="https://github.com/Marieezouaa">
            <img
              className="social-image"
              src="src/assets/social-logos/github-logo.png"
              alt=""
            />
          </a>

          {/*  twitter link  */}
          <a href="https://x.com/Marieezouaa">
            <img
              className="social-image"
              src="src/assets/social-logos/new-twitter-Stroke-Rounded.png"
              alt=""
            />
          </a>

          {/*  twitter link  */}
          <a href="https://www.instagram.com/marieezouaa/">
            <img
              className="social-image"
              src="src/assets/social-logos/instagram-Stroke-Rounded.png"
              alt=""
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
