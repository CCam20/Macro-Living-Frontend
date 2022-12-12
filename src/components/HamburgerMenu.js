import React from 'react'
import MainContainer from '../containers/MainContainer'
import RecipesAll from './RecipesAll'
import { Link } from 'react-router-dom'



const HamburgerMenu = () => {

  
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
        // document.body.style.backgroundColor = "rgba(100,90,90,0.99)";
      }
      
      /* Set the width of the side navigation to 0 */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "#ffe6e6";
      }
  return (
    <>
    <div id="mySidenav" className="leftsidenav">
     <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
    <Link to="/">Home</Link>
    <Link to="/recipes-all">All Recipes</Link>
    </div>
    <button className="hamburger-menu-btn" onClick={openNav}>Hamburger Menu</button>

    </>


  )
}

export default HamburgerMenu