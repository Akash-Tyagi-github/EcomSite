import React from "react";
import { NavLink } from "react-router-dom";
import "./HeroSection.css";
const HeroSection = (props) => {
// console.log(props.myData.name);

return (
    <div className="container">
      <div className="grid grid-two-column">
        <div className="hero-section-data">
          <p className="intro-data">Welcome to</p>
          <h1>{props.myData.name}</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
          <NavLink>
            <button id="shop-now-btn">Shop Now</button>
          </NavLink>
        </div>
        <div className="hero-section-image">
          <figure>
            <img src="../Assets/cartpic.jpg" alt="hero-section-photo" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
