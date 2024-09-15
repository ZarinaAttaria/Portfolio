import React from "react";
import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoLinkedinSquare,
  BiMailSend,
  BiPhoneCall,
  BiSend,
  BiSupport,
  BiUser,
} from "react-icons/bi";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="allPage">
      <div className="contact-heading">
        <img
          className="about-image"
          src="https://img.icons8.com/?size=100&id=CCDYqb5KK5vI&format=png&color=000000"
        />
        <h1 className="contactus-title">Get In </h1>
        <h1 className="contactus-title touch">Touch</h1>
      </div>

      <div className=" contactus">
        <div className="contactcard">
          <img src="contact.png" className="contact-image" />
          <div>
            <form className="contact-form">
              <label>
                <div className="input-container">
                  <BiUser className="input-icon" />
                  <input type="text" placeholder="Name" />
                </div>
              </label>
              <label>
                <div className="input-container">
                  <BiMailSend className="input-icon" />
                  <input type="email" placeholder="Email" />
                </div>
              </label>
              <label>
                <div className="input-container">
                  <BiPhoneCall className="input-icon" />
                  <input type="text" placeholder="Phone" />
                </div>
              </label>
              <label>
                <div className="input-container">
                  <BiSupport className="input-icon" />
                  <input
                    type="text"
                    placeholder="Message"
                    className="messageInput"
                  />
                </div>
              </label>
              <div className="submit-container">
                <input
                  type="submit"
                  placeholder="Submit"
                  className="submitBtn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
