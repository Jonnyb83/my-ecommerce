import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import facebook from "./images/facebook_new.png";
import github from "./images/github_new.png";
import linkedin from "./images/linkedin_new.png";



const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_images">
        <Link to="https://www.facebook.com/jan.bodi.921">
          <img className="img" src={facebook} alt="" />
        </Link>
        <Link to="https://github.com/Jonnyb83">
          <img className="img" src={github} alt="" />
        </Link>
        <Link to="https://www.linkedin.com/in/jan-bodi77">
          <img className="img" src={linkedin} alt="" />
        </Link>

            {/* <img className="img" src={facebook} alt="" /> */}
            {/* <img className="img" src={github} alt="" />
            <img className="img" src={linkedin} alt="" /> */}
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
