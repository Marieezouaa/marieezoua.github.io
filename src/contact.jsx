import Mail from "./assets/mail-01-Stroke-Rounded-2.png";
import LinkedIn from "./assets/social-logos/linkedin-02-Stroke-Rounded.png";

function Contact() {
  const title = ["Email", "LinkedIn"];

  const links = ["ezouamarie@outlook.com", "Marie Ezoua"];

  const images = [Mail, LinkedIn];

  const altContact = [];

  for (let i = 0; i < title.length; i++) {
    altContact.push(
      <div className="contact-card">
        <img
          key={i}
          src={images[i]}
          alt={`skill ${i}`}
          className="contact-icon"
        />
        <p className="contact-title">{title[i]}</p>
        <p className="contact-caption">{links[i]}</p>
        <p className="send-btn">Send a message</p>
      </div>
    );
  }

  return (
    <div id="contact" className="contact-page">
      <h2 className="title">Contact ME</h2>

      <div className="contact-section">
        <div className="method-container">
          <div className="contact-methods">
            <div className="other-methods">{altContact}</div>

            <div className="contact-form">
              <form action="">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Message"
                  required
                ></textarea>
                <button type="submit" className="submit-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
