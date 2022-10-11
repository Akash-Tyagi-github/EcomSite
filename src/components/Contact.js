import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact-box">
        <h2 id="heading">Contact Page</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114827368501!2d77.20651072382503!3d28.628901717325142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1665479939723!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* formspree */}
        <div className="user-form">
          <form action="https://formspree.io/f/mbjbkkpy" method="POST">
            <div className="user-form-items">
              <input
                type="text"
                name="UserName"
                id="userInputs"
                placeholder="Username"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="Email"
                id="userInputs"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <textarea
                name="Meassage"
                id="userInputs1"
                placeholder="Message"
                autoComplete="off"
                required
              />

              <button id="form-submit-btn" type="submit" value="send">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
