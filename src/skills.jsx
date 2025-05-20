import GitHub from "./assets/social-logos/github-logo.png";
import Phone from "./assets/social-logos/phone-developer-mode-Stroke-Rounded.png";
import Server from "./assets/social-logos/server-stack-03-Stroke-Rounded.png";
import Web from "./assets/social-logos/web-design-02-Stroke-Rounded.png";
import Cloud from "./assets/social-logos/computer-cloud-Stroke-Rounded.png";
import Paint from "./assets/social-logos/paint-board-Stroke-Rounded.png";


function Skills() {
  const images = [
   GitHub,Phone,Server, Web, Cloud,
   Paint,
  ];

  const skillTitle = [
    "Git Verison Control",
    "Mobile Development",
    "Back-end  Development",
    "Web Development",
    "Cloud Computing",
    "UI/UX",
  ];

  const description = [
    "Used Git and GitHub for managing version control in both individual and group-based academic projects, ensuring smooth collaboration and consistent code tracking.",
    "Built cross-platform mobile apps using Flutter and Firebase, designed UI in Figma, and implemented key features by integrating APIs for functionality and backend logic.",
    "Developed server-side logic using SQL, MySQL, PHP (with session and cookie-based auth), and Node.js to handle data management and user interactions.",
    "Created responsive websites individually and collaboratively using HTML, CSS, JavaScript, PHP, React, and SQL to build full-stack solutions.",
    "Gained hands-on experience with Azure by creating virtual machines, deploying applications, analyzing system performance, and managing remote terminal operations.",
    "Utilized Figma to design intuitive, user-centered interfaces for both websites and mobile applications, focusing on layout, visual hierarchy, and accessibility.",
  ];

  const cardsList = [];

  for (let i = 0; i <= images.length - 1; i++) {
      cardsList.push(
    
        
      <div className="skill-card">
        <img
          key={i}
          src={images[i]}
          alt={`skill ${i}`}
          className="skill-image"
        />

        <h4>{skillTitle[i]}</h4>

        <p>{description[i]}</p>
      </div>
    );
  }

    return (
   
  
        <div id="skills" className="skills">
          <h2 className="title">Skills </h2>
          <div className="card-area">{cardsList}</div>
        </div>

    );
}
export default Skills;
