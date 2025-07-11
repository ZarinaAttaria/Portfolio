import React from "react";
import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGithub,
  BiMailSend,
  BiPhoneCall,
  BiSend,
  BiSupport,
  BiUser,
} from "react-icons/bi";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-heading">
          <div className="contact-title-container">
            <h1 className="contact-title">Get In</h1>
            <h1 className="contact-title highlight">Touch</h1>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-image-container">
              <img
                src="contact.png"
                className="contact-image"
                alt="Contact illustration"
              />
            </div>

            <div className="contact-form-container">
              <form className="contact-form">
                <h3 className="form-title">Send Me a Message</h3>
                <div className="form-group">
                  <div className="input-container">
                    <BiUser className="input-icon" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-container">
                    <BiMailSend className="input-icon" />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-container">
                    <BiPhoneCall className="input-icon" />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-container">
                    <BiSupport className="input-icon" />
                    <textarea
                      placeholder="Your Message"
                      className="form-textarea"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="submit-btn">
                  <BiSend className="submit-icon" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
