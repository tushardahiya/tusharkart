import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { BasketContext } from "../Context/BasketContext";
import { auth } from "../firebase";

function Header() {
  const basketContext = useContext(BasketContext);

  const handleAuthentication = () => {
    if (basketContext.user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          alt="loading"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-navs">
        <Link to={!basketContext.user && "/login"}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-option-line1">
              Hello {!basketContext.user ? "Guest" : basketContext.user.email}
            </span>
            <span className="header-option-line2">
              {basketContext.user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-option-line1">Returns</span>
          <span className="header-option-line2">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-line1">Your</span>
          <span className="header-option-line2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-basket">
            <ShoppingCartOutlinedIcon />
            <span className="header-bascket-count">
              {basketContext.basketSize}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
