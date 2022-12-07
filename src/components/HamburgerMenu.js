import React from 'react'
import MainContainer from '../containers/MainContainer'
import RecipesAll from './RecipesAll'
import { Link } from 'react-router-dom'



const HamburgerMenu = () => {
  return (

    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/recipes-all">All Recipes</Link>
        </li>
    </ul>
    


  )
}

export default HamburgerMenu