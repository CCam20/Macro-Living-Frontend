import React from 'react'
import Recipe from './Recipe'
import RecipeService from './RecipeService'
import RecipeList from './RecipeList'

const RecipesAll = ({recipes}) => {

    const recipeList = recipes.map((recipe) => {
      return <RecipeList recipe = {recipe} key={recipe._id}/>
    })


  return (
    <div>
        <div>{recipeList}</div>
    </div>
  )
}

export default RecipesAll