import React, { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import Logo from './../../logo.svg';

import "./styles.scss";

import Bag from "../Bag";
import Search from "../Search";

const Topbar = () => {
  const [showBag, setShowBag] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  function handleBag() { //quando clica na sacola ou 'carrinho'
    setShowBag(!showBag);
  }

  function handleSearch() {
    setShowSearch(!showSearch);
  }

  return (
    <>
      <header className="topbar" id="top">
        <div className="topbar__content">
          <div className="divLogo">
              <img className="logo" src={Logo} alt="logo" />
              <h1>Fashionista</h1>
          </div>

          <div className="topbar__buttons-container">
            <button className="topbar__button">
              <FiSearch size={24} color="#ffffff" onClick={handleSearch}/>
            </button>

            <button className="topbar__button">
              <FiShoppingBag size={24} color="#ffffff" onClick={handleBag}/>
            </button>
          </div>
        </div>
      </header>

      {showBag && <Bag handleBag={handleBag} />}
      {showSearch && <Search handleSearch={handleSearch} />}
    </>
  );
};

export default Topbar;