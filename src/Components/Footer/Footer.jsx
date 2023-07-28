import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <h4>
          Questions? Call <a href="/">1-844-505-2993</a>
        </h4>
        <div className="footer__links">
          <ul>
            <li className="footer__link">
              <a href="/">FAQ</a>
            </li>
            <li className="footer__link">
              <a href="/">Help Center</a>
            </li>
            <li className="footer__link">
              <a href="/">Account</a>
            </li>
            <li className="footer__link">
              <a href="/">Media Center</a>
            </li>
            <li className="footer__link">
              <a href="/">Investor Relations</a>
            </li>
            <li className="footer__link">
              <a href="/">Jobs</a>
            </li>
            <li className="footer__link">
              <a href="/">Netflix Shop</a>
            </li>
            <li className="footer__link">
              <a href="/">Redeem Gift Cards</a>
            </li>
            <li className="footer__link">
              <a href="/">Buy Gift Cards</a>
            </li>
            <li className="footer__link">
              <a href="/">Ways to Watch</a>
            </li>
            <li className="footer__link">
              <a href="/">Terms of Use</a>
            </li>
            <li className="footer__link">
              <a href="/">Privacy</a>
            </li>
            <li className="footer__link">
              <a href="/">Cookie Preferences</a>
            </li>
            <li className="footer__link">
              <a href="/">Corporate Information</a>
            </li>
            <li className="footer__link">
              <a href="/">Contact Us</a>
            </li>
            <li className="footer__link">
              <a href="/">Speed Test</a>
            </li>
            <li className="footer__link">
              <a href="/">Legal Notices</a>
            </li>
            <li className="footer__link">
              <a href="/">Only on Netflix</a>
            </li>
            <li className="footer__link">
              <a href="/">Do Not Sell or Share My Personal Information</a>
            </li>
          </ul>
        </div>
        <select name="LanguageSelect" id="LanguageSelect" className="footer__select">
          <option value="">English</option>
          <option value=""></option>
        </select>
      </div>
    </div>
  );
}


export default Footer;
