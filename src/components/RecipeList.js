import React from 'react'
import { Link } from 'react-router-dom'
import Recipe from './Recipe'

const RecipeList = ({recipe}) => {

  return (
    <>
    <Link to={`/recipe/${recipe.id}`}>{recipe.name}<br></br></Link>
    </>
  )
}

export default RecipeList