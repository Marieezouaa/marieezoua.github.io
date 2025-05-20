function SocialLinks() {
  const socialLinks = [
    "linkedin.com/in/marie-ezoua",
    "https://github.com/Marieezouaa",
    "https://x.com/Marieezouaa",
    "https://www.instagram.com/marieezouaa/",
  ];

  const socialIcons = [
    "src/assets/social-logos/linkedin-02-Stroke-Rounded.png",
    "src/assets/social-logos/github-logo.png",
    "src/assets/social-logos/new-twitter-Stroke-Rounded.png",
    "src/assets/social-logos/instagram-Stroke-Rounded.png",
  ];

  return (
    <div className="social-icons-tab">
      <div className="links">
        {/*   linkedIn link   */}
        <a href="linkedin.com/in/marie-ezoua">
          <img
            src="src/assets/social-logos/linkedin-02-Stroke-Rounded.png"
            alt=""
          />
        </a>

        {/*   github link  */}
        <a href="https://github.com/Marieezouaa">
          <img src="src/assets/social-logos/github-logo.png" alt="" />
        </a>

        {/*  twitter link  */}
        <a href="https://x.com/Marieezouaa">
          <img
            src="src/assets/social-logos/new-twitter-Stroke-Rounded.png"
            alt=""
          />
        </a>

        {/*  twitter link  */}
        <a href="https://www.instagram.com/marieezouaa/">
          <img
            src="src/assets/social-logos/instagram-Stroke-Rounded.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
