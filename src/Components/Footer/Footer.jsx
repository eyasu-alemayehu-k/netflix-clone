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
              <a href="/">Netflix Originals</a>
            </li>
            <li className="footer__link">
              <a href="/">Trending</a>
            </li>
            <li className="footer__link">
              <a href="/">Action Movies</a>
            </li>
            <li className="footer__link">
              <a href="/">Top Rated</a>
            </li>
            <li className="footer__link">
              <a href="/">Comedy Movies</a>
            </li>
            <li className="footer__link">
              <a href="/">Romance Movies</a>
            </li>
            <li className="footer__link">
              <a href="/">Horror Movies</a>
            </li>
            <li className="footer__link">
              <a href="/">Documentaries Movies</a>
            </li>
          </ul>
        </div>
        <select
          name="LanguageSelect"
          id="LanguageSelect"
          className="footer__select"
        >
          <option value="">English</option>
          <option value="">Amharic</option>
        </select>
      </div>
    </div>
  );
}

export default Footer;
