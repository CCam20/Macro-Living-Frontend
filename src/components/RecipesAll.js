import React from 'react'
import Recipe from './Recipe'
import RecipeService from './RecipeService'

const RecipesAll = ({recipes}) => {

    const recipeList = recipes.map((recipe) => {
      return <Recipe recipe = {recipe} key={recipe._id}/>
    })


  return (
    <div>
        <div>{recipeList}</div>
    </div>
  )
}

export default RecipesAll