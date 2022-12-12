import React, { useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import IngredientForCard from './IngredientForCard';




const RecipeList = ({recipe}) => {







// function byID(id) {
//     return document.getElementById(id);
//   }
//   const handleToggle = () => {

//     if (byID(recipe.name).classList.contains("closed")) {
//       byID(recipe.name).classList.remove("closed");
//       setVisibleDetails(!visibleDetails)
//       bottomRef.current?.scrollIntoView({behavior: 'smooth',});
//     } else {
//       byID(recipe.name).classList.add("closed");

//   }
// }




  return (
    <>
    <div className='recipe-card-all'>
    <Link to={`/recipe/${recipe.id}`}>
    <span className="closed" id={recipe.name}>
    <header id="toggle">
        <div className="header" style={{backgroundImage: "url(https://www.recipegirl.com/wp-content/uploads/2007/11/Apple-Bacon-Salad-Recipe.jpg)"}}></div>
        <div className="title">{recipe.name}</div>
    </header>
    </span>
<br></br></Link></div>

    </>
  )
}

export default RecipeList

