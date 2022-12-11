import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import User from './User'
import RecipeResult from './RecipeResult'
import Ingredient from './Ingredient'
import IngredientButton from './IngredientButton'
import MealPlan from './MealPlan'

const Homepage = ({users, recipes, ingredients, handleIngredientSelected, updateUser, handleRecipeFavourite, handleAddToMealPlan}) => {

  const user = users.map((user) => {
    return <User user = {user} key={user.id} updateUser = {updateUser}/>
  })

  const ingredientsButtons = ingredients.map((ingredient) => {
    return <IngredientButton ingredient = {ingredient} key={ingredient.id} handleIngredientSelected={handleIngredientSelected}/>
  })

  const selectedIngredients = ingredients.filter((ingredient) => ingredient.selected === true)

  const filteredRecipes = recipes.filter((recipe)=> recipe.ingredients.length <= selectedIngredients.length )

  const foundRecipes = filteredRecipes.map((recipe) => {
    return <RecipeResult  recipes={recipes} recipe = {recipe} key={recipe.id} handleRecipeFavourite={handleRecipeFavourite} handleAddToMealPlan={handleAddToMealPlan}/>
  })

  // const sortedIngredientsList = ingredientsButtons.sort((a, b) => a.name.localeCompare(b.name))

  /* Set the width of the side navigation to 250px */


  return (
    <>

    <div>{user}</div>
    <br></br>
    <hr></hr>
    <h3>Please select your ingredients</h3>
    <div>{ingredientsButtons}</div>
    <br></br>
    <hr></hr>
    <h3>Based on your selections you have the ingredients to make the following recipes:</h3>
    <div>{foundRecipes}</div>
    </>
  )
}

export default Homepage



{/* <div>{ingredientsButtons.sort(function(a, b){
  var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
  if (nameA < nameB) //sort string ascending
   return -1;
  if (nameA > nameB)
   return 1;
  return 0; //default return value (no sorting)
 })};</div> */}