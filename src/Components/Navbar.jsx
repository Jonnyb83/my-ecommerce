import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useState } from "react";


const Navbar = () => {
  const [data, setdata] = useState(false);
  const [menu, setmenu] = useState(false);

  const inputhandler = () => {
    setdata(!data);
  };

  const menuhandler = () => {
    setmenu(!menu);
  };

  return (
    <>
      <div>
        <div className="navbar_div">
          <div className={data ? "input_form" : "input_form_not"}>
            <input type="text" placeholder="Search here" />
            <SearchIcon className="Search_icon_input" />
            <CloseIcon onClick={inputhandler} className="close_icon" />
          </div>
          <div className={data ? "header" : ""}>
            <div className="navbar_main">
              <div>
                <div onClick={inputhandler}>
                  {" "}
                  <SearchIcon className="Search_icon" />{" "}
                </div>
                <MenuIcon onClick={menuhandler} className="menu_icon" />
              </div>
              
              <div className="bad_search">
                <SearchIcon onClick={inputhandler} className="Search_icon2" />
                <LocalMallIcon className="bag_icon" />
              </div>
            </div>
            <div className="Nav_links">
              <Link to="/" className="link">
                Home
              </Link>
              <Link to="/loginform" className="link">
                Login
              </Link>
              <Link to="https://myportfoliojonnyb83.netlify.app" className="link">
              My portfolio
              </Link>
            </div>
            <div className={menu ? "sidebar2" : "sidebar1"}>
              <Link to="/" className="sidebar_link">
                Home
              </Link>
            
              <Link to="/loginform" className="sidebar_link">
                Login
              </Link>
              <Link to="/contact" className="sidebar_link">
                My portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
