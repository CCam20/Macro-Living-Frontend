import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = ({recipe}) => {
  return (
    <>
    <Link to={`recipe/${recipe._id}`}>{recipe.name}<br></br></Link>
    </>
  )
}

export default RecipeList