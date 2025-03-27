import React from 'react';
import logo from "../images/logo192.png";

function Header() {
  return (
    <div>
      <img src={logo} style={{height: 35, verticalAlign:"top"}}/>
      <span className="h2 pt-4 text-white-50"></span>
    </div>
  )
}

export default Header
