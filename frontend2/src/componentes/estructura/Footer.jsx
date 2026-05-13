import React from "react";
import NavFooter from "./menu/NavFooter.jsx"
import FooterInfo from "./FooterInfo.jsx";
import FooterImagenes from "./FooterImagenes.jsx";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
          <FooterImagenes />
          <NavFooter />
          <FooterInfo />
      </footer>
    </>
  );
};

export default Footer;
