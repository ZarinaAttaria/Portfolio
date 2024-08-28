import React from "react";
import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoLinkedinSquare,
  BiMailSend,
  BiPhoneCall,
  BiSupport,
} from "react-icons/bi";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="allPage">
      <div className="row contactus">
        <div className="col-md-4">
          <div className="contactcard">
            <h1 className="contactus-title p-2  text-center">CONTACT ME</h1>
            {/* <p className="text-justify mt-2">
              If you have any queries or need more information about my
              projects.
            </p> */}
            <p className="mt-3">
              <BiMailSend className="icon2" /> : zarinaattaria135@gmail.com
            </p>
            <p className="mt-3">
              <BiPhoneCall className="icon2" /> : 012-3456789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
