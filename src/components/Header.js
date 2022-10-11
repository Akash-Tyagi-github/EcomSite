import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import "./Header.css";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
const Header = () => {
  const [menuIcon, setMenuIcon] = useState();
  return (
    <>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <div className="logo-img">
          <img src="" alt="logo.png" />
        </div>
        <ul className="navbar-list">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-trolley-link"
              onClick={() => setMenuIcon(false)}
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total-item">10</span>
            </NavLink>
          </li>
        </ul>

        {/* two btns for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
