import LinkedIn from "./assets/social-logos/linkedin-02-Stroke-Rounded.png";
import Github from "./assets/social-logos/github-logo.png";
import Twitter from "./assets/social-logos/new-twitter-Stroke-Rounded.png";
import Instagram from "./assets/social-logos/instagram-Stroke-Rounded.png";

function SocialLinks() {
  const socialLinks = [
    "linkedin.com/in/marie-ezoua",
    "https://github.com/Marieezouaa",
    "https://x.com/Marieezouaa",
    "https://www.instagram.com/marieezouaa/",
  ];


  return (
    <div className="social-icons-tab">
      <div className="links">
        {/*   linkedIn link   */}
        <a href="linkedin.com/in/marie-ezoua">
          <img src={LinkedIn} alt="" />
        </a>

        {/*   github link  */}
        <a href="https://github.com/Marieezouaa">
          <img src={Github} alt="" />
        </a>

        {/*  twitter link  */}
        <a href="https://x.com/Marieezouaa">
          <img src={Twitter} alt="" />
        </a>

        {/*  twitter link  */}
        <a href="https://www.instagram.com/marieezouaa/">
          <img src={Instagram} alt="" />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
