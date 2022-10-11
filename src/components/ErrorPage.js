import React from "react";
import { NavLink } from "react-router-dom";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <>
      <div className="error-box">
        <h1>Error 404</h1>
        <h2>Page not found !</h2>
        <h5>
          It is a long established fact that a reader will be distracted by the
          readable a more-or-less normal uncover many web sites still in their
          infancy. Various versions have evolved over the yearsometimes on purp
        </h5>
        <NavLink to="/">
          <button id="go-back-btn">Go to Home Page</button>
        </NavLink>
      </div>
    </>
  );
};

export default ErrorPage;
