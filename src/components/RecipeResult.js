import React from 'react'
import Ingredient from './Ingredient'

const RecipeResult = ({recipe, recipes, handleRecipeFavourite,handleAddToMealPlan}) => {

    const ingredientsList = recipe.ingredients.map((ingredient) => {
        return <Ingredient ingredient = {ingredient} key={ingredient.id}/>
      })
   
      const handleClick = (() => {
        handleRecipeFavourite(recipe.id)
      })
      const handleMealPlanClick =(() => {
        handleAddToMealPlan(recipe.id)
      })

      const favouriteSelectedText = recipe.favourite ? "Hearted" : "Not Hearted"
      const mealPlanSelectedText = recipe.mealPlan ? "In Meal Plan" : "Add To Meal Plan"

    

    return (
        <>
        <br></br>
        <div>{recipe.name}</div>
        <button type="submit" onClick={handleClick}>{favouriteSelectedText}</button>
        <button type='submit' onClick={handleMealPlanClick}>{mealPlanSelectedText}</button>

        <div>{ingredientsList}</div>

        <br></br>
        </>
      )
}

export default RecipeResult


