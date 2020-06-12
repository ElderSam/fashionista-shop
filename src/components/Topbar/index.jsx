import React from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import Logo from './../../logo.svg';
import "./styles.scss";

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar__content">
        <div className="divLogo">
            <img className="logo" src={Logo} alt="logo" />
            <h1>Fashionista</h1>
        </div>

        <div className="topbar__buttons-container">
          <button className="topbar__button">
            <FiSearch size={24} color="#ffffff" />
          </button>

          <button className="topbar__button">
            <FiShoppingBag size={24} color="#ffffff" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;