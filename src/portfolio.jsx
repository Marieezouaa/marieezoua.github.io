function Portfolio() {
  const mobileDesigns = [];

  const websiteDesigns = [];

  for (let i = 0; i < 3; i++) {
    mobileDesigns.push(
      <div className="housing">
        <div className="main-screen"></div>

        <div className="second-screens">
          <div className="sub-screen"></div>
          <div className="sub-screen"></div>
          <div className="sub-screen"></div>
        </div>
      </div>
    );
      
      
      websiteDesigns.push(
          <div className="web-screen"></div>
      );
  }

  return (
    <div id="portfolio" className="portfolio">
      <h2 className="title">Portfolio</h2>
      <div className="mobile-screens">{mobileDesigns}</div>
      <div className="website-screens">{websiteDesigns}</div>
    </div>
  );
}
export default Portfolio;
