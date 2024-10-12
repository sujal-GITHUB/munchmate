import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo" />
          <p>
            At munchmate, we believe in bringing delicious meals to your doorstep
            with ease and convenience. Whether you are craving local favorites or
            looking to discover new flavors, our platform connects you with the
            best restaurants in town. With a user-friendly interface and fast
            delivery service, we ensure that your favorite food reaches you
            fresh and hot. munchmate—your go-to food delivery service, where
            quality, taste, and speed come together.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9115664773</li>
            <li>sujal21102004@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © munchmate.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
