import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <section className="letter-box">
          <div className="letter-box-items">
            <p>Ready to get started?</p>
            <p>Talk to us today</p>
          </div>
          <div className="letter-box-items">
            <NavLink to="/contact">
              <button id="started-btn">Get started</button>
            </NavLink>
          </div>
        </section>
        {/* Main-foooter */}
        <div className="footer-items">
          <div className="footer-about">
            <h4>My Store</h4>
            <p>
              looked up one obscure Latin words, consectetur and going through
              the cites of the word in classical literature, discovered the of
              the more undoubtable source
            </p>
          </div>
          <div className="footer-subscribe">
            <h4>Subscribe to get daily updates</h4>
            <form action="#" id="subscribe-form">
              <input placeholder="Email" id="subscribe-email" />
              <btn type="submit" id="subscribe-btn">
                Submit
              </btn>
            </form>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <a href="www.youtube.com" target="_blank">
              <BsYoutube />
            </a>
          </div>
          <div className="footer-number">
        <h4>
            @{new Date().getFullYear()} My store
        </h4>
        <p>All right reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
