import React from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook.png";
import TwitterIcon from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";
import InstagramIcon from "../../assets/instagram.png";

const Contact = () => {
  return (
    <section id="contacts">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc"></span>Please fill out the form below to
        discuss any work oppurtinity
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            className="messg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submittn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.facebook.com/profile.php?id=100009564218746">
              <img src={FacebookIcon} alt="Facebook" className="link" />
            </a>
            <a href="https://twitter.com/LalithReddy22">
              <img src={TwitterIcon} alt="twitter" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/k-lalith-kumar-reddy-248942202/">
              <img src={Linkedin} alt="Youtube" className="link" />
            </a>
            <a href="https://www.instagram.com/lalith__reddy/">
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
