import React from 'react'
import Recipe from './Recipe'
import RecipeService from './RecipeService'
import RecipeList from './RecipeList'


const RecipesAll = ({recipes}) => {

  const sortedRecipes = recipes.sort((a, b) => a.name.localeCompare(b.name))


    const recipeList = sortedRecipes.map((recipe) => {
      return <RecipeList recipe = {recipe} key={recipe.id}/>
    })


  return (
    <div>
        <div>{recipeList}</div>
    </div>
  )
}

export default RecipesAll