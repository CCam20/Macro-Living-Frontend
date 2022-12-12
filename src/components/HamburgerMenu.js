import React from 'react'
import { Link } from 'react-router-dom'


const HamburgerMenu = () => {

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

  }
  
  const hamburgerMenuIcon = require("../images/HamburgerIcon.png")
  
  return (
    <>
    <div onClick={closeNav} id="mySidenav" className="leftsidenav">
    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
    <Link to="/">Home</Link>
    <Link to="/recipes-all">All Recipes</Link>
    </div>
    <button className="hamburger-menu-btn" onClick={openNav}><img src={hamburgerMenuIcon} width='50px' alt="Hamburger Menu"/></button>
    </>
  )
}

export default HamburgerMenu