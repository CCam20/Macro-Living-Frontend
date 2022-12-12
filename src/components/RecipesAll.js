import React from 'react'
import Recipe from './Recipe'
import RecipeService from './RecipeService'
import RecipeList from './RecipeList'
import './RecipeResult.css'


const RecipesAll = ({recipes}) => {

  const sortedRecipes = recipes.sort((a, b) => a.name.localeCompare(b.name))


    const recipeList = sortedRecipes.map((recipe) => {
      return <RecipeList recipe = {recipe} key={recipe.id}/>
    })

  return (
    <>
    <div className='recipe-list-all'>
        {recipeList}
    </div>
    </>
  )
}

export default RecipesAll