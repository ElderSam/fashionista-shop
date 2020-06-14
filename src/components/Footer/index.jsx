import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Desenvolvido por Elder Samuel </p>
      <div className="footer__links">
        <a
          href="http://github.com/ElderSam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="#fff" size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/elder-samuel-da-silva-2534a8182/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="#fff" size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;