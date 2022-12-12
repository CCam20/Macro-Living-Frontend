import React from 'react'
import RecipeResult from './RecipeResult'

const MealPlan = ({recipes, handleRecipeFavourite, handleAddToMealPlan }) => {

    const mealPlanRecipes = recipes.filter((recipe) => {
      return recipe.mealPlan == true
    })


    const renderMealPlanRecipes = mealPlanRecipes.map((recipe) => {
      return <RecipeResult recipe={recipe} key={recipe.if} handleRecipeFavourite={handleRecipeFavourite} handleAddToMealPlan={handleAddToMealPlan}/>
    })

    function openNav() {
        document.getElementById("meal-plan").style.width = "350px";
        // document.getElementById("main").style.marginLeft = "250px";
        // document.body.style.backgroundColor = "rgba(100,90,90,0.99)";
      }
      
      /* Set the width of the side navigation to 0 */
      function closeNav() {
        document.getElementById("meal-plan").style.width = "0";
        // document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "#ffe6e6";
      }

  return (
    <>
    <div id="meal-plan" className="rightsidenav">
    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
    <h1>Meal Plan</h1>
    {renderMealPlanRecipes}</div>
    <button onClick={openNav}>open</button>
    
    </>
  )
}

export default MealPlan