import React from 'react'
import { Link } from 'react-router-dom'





const RecipeList = ({recipe}) => {

  return (
    <>
    <div className='recipe-card-all'>
    <Link to={`/recipe/${recipe.id}`}>
    <span className="closed" id={recipe.name}>
    <header id="toggle">
        <img className="header" src={recipe.imgUrl}/>
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

