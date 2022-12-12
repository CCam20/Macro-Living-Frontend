import React from 'react'
import { Link } from 'react-router-dom'





const RecipeList = ({recipe}) => {

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
    <br></br>
    </Link>
    </div>
    </>
  )
}

export default RecipeList

