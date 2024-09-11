import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo"/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            rerum. Sapiente autem dolorum minima id officia eveniet dolore
            molestiae similique voluptatem incidunt? Eum omnis voluptatum natus
            ullam reiciendis, repudiandae corporis!
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
        Copyright 2024 © Chownow.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
