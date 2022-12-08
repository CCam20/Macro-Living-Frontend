import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import User from './User'
import RecipeResult from './RecipeResult'
import Ingredient from './Ingredient'
import IngredientButton from './IngredientButton'

const Homepage = ({users, recipes, ingredients}) => {

  const user = users.map((user) => {
    return <User user = {user} key={user.id}/>
  })

  const ingredientsButtons = ingredients.map((ingredient) => {
    return <IngredientButton ingredient = {ingredient} key={ingredient.id}/>
  })

  const foundRecipes = recipes.map((recipe) => {
    return <RecipeResult recipe = {recipe} key={recipe.id}/>
  })



  return (
    <>
    <div>Homepage</div>
    <div>{user}</div>
    <div>{ingredientsButtons}</div>
    <div>{foundRecipes}</div>
    </>
  )
}

export default Homepage