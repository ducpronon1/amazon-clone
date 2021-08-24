import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./Header.css";
import { useStateValue } from "../store/StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const authenticateHandler = () => {
    auth.signOut();
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="logo"
          src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="search">
        <input className="searchInput" type="text" />
        <SearchIcon className="searchIcon" />
      </div>
      <div className="headerNav">
        <Link to={user ? "/" : "/login"} className="headerLink">
          <div onClick={authenticateHandler} className="headerOption">
            <span className="optionLineOne">Hello, Guest</span>
            <span className="optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="headerLink">
          <div className="headerOption">
            <span className="optionLineOne">Returns</span>
            <span className="optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="headerLink">
          <div className="headerOption">
            <span className="optionLineOne">Your</span>
            <span className="optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="headerLink">
          <div className="optionBasket">
            <ShoppingBasketIcon className="basket" />
            <span className="optionLineTwo basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
