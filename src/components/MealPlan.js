import React from 'react'
import RecipeResult from './RecipeResult'

const MealPlan = ({recipes, handleRecipeFavourite, handleAddToMealPlan }) => {

    const mealPlanRecipes = recipes.filter((recipe) => {
      return recipe.mealPlan == true
    })
    console.log(mealPlanRecipes)

    const renderMealPlanRecipes = mealPlanRecipes.map((recipe) => {
      return <RecipeResult recipe={recipe} key={recipe.if} handleRecipeFavourite={handleRecipeFavourite} handleAddToMealPlan={handleAddToMealPlan}/>
    })


  return (
    <>
    <h1>Meal Plan</h1>
    <div>{renderMealPlanRecipes}</div>
    
    </>
  )
}

export default MealPlan