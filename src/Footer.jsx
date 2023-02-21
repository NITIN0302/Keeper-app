import React from "react";
import ReactDom from "react-dom";

var time = new Date();

var year = time.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright @ {year}</p>
    </footer>
  );
}

export default Footer;
