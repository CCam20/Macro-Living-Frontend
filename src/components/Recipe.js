import React from 'react'
import { useParams } from 'react-router-dom'
import Ingredient from './Ingredient'
import RecipesAll from './RecipesAll'
import Step from './Step'

const Recipe = ({recipes, handleRecipeFavourite, handleAddToMealPlan}) => {

    const {id} = useParams()
    const recipe = recipes.filter(recipe => recipe.id == id)
    const ingredientList = recipe[0].ingredients.map((ingredient) => {
        return <Ingredient ingredient = {ingredient} key={ingredient._id}/>
      })

      const handleClick = (() => {
        handleRecipeFavourite(recipe[0].id)
      })
      const handleMealPlanClick =(() => {
        handleAddToMealPlan(recipe[0].id)
      })

      const hearted = require("../images/Hearted.png")
      const unhearted= require("../images/Unhearted.png")

      const favouriteSelectedText = recipe[0].favourite ? <img width='20px' src={hearted}/>  : <img width='20px' src={unhearted}/>
      const mealPlanSelectedText = recipe[0].mealPlan ? "Remove From Meal Plan" : "Add To Meal Plan"


  return (
    <div>
        <div className=''>
          {recipe[0].name}<br></br>
          <button className='fav-btn' type="submit" onClick={handleClick}>{favouriteSelectedText}</button>
          <button className='add-to-meal-btn' type='submit' onClick={handleMealPlanClick}>{mealPlanSelectedText}</button><br></br>
        
          Ingredients:<br></br>
          {ingredientList}
          Steps:<br></br>
          {recipe[0].steps.step1}<br></br>
          {recipe[0].steps.step2}<br></br>
          {recipe[0].steps.step3}<br></br>
          {recipe[0].steps.step4}<br></br>
          {recipe[0].steps.step5}<br></br>
          {recipe[0].steps.step6}<br></br>
          {recipe[0].steps.step7}<br></br>
          {recipe[0].steps.step8}<br></br>
          {recipe[0].steps.step9}<br></br>
          {recipe[0].steps.step10}<br></br>
        

      </div><br></br>
    </div>
  )
}

export default Recipe