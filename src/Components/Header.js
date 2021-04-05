import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        alt="loading"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-navs">
        <div className="header-option">
          <span className="header-option-line1">Hello Guest</span>
          <span className="header-option-line2">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-option-line1">Returns</span>
          <span className="header-option-line2">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-line1">Your</span>
          <span className="header-option-line2">Prime</span>
        </div>
        <div className="header-basket">
          <ShoppingCartOutlinedIcon />
          <span className="header-bascket-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
