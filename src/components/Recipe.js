import React from 'react'
import { useParams } from 'react-router-dom'
import Ingredient from './Ingredient'


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

      const totalProtein = () => {
        let total = 0
      for (let i = 0; i < recipe[0].ingredients.length; i++){
            total += recipe[0].ingredients[i].protein
        } return Math.round(total)
    }
    
    const totalCarbs = () => {
        let total = 0
      for (let i = 0; i < recipe[0].ingredients.length; i++){
            total += recipe[0].ingredients[i].carbs
        } return Math.round(total)
    }

    const totalFat = () => {
        let total = 0
      for (let i = 0; i < recipe[0].ingredients.length; i++){
            total += recipe[0].ingredients[i].fat
        } return Math.round(total)
    }

    const totalFibre = () => {
        let total = 0
      for (let i = 0; i < recipe[0].ingredients.length; i++){
            total += recipe[0].ingredients[i].fibre
        } return Math.round(total)
    }

    const totalCalories = () => {
        let total = 0
      for (let i = 0; i < recipe[0].ingredients.length; i++){
            total += recipe[0].ingredients[i].calories
        } return Math.round(total)
      }
      
  return (
    
    <div>
        <div className=''>
          
          {recipe[0].name}
          <button className='fav-btn' type="submit" onClick={handleClick}>{favouriteSelectedText}</button><br></br>
        
          Ingredients:
          <br></br>
          {ingredientList}
          <br></br>
          <button className='add-to-meal-btn' type='submit' onClick={handleMealPlanClick}>{mealPlanSelectedText}</button>
    <ul>
         <li>
            Protein:{totalProtein()}
        </li>
        <li>
            Carbs:{totalCarbs()}
        </li>
        <li>
            Fat:{totalFat()}
        </li>
        <li>
            Fibre:{totalFibre()}
        </li>
        <li>
            Total Calories:{totalCalories()}
        </li>
    </ul>
         <h4>Steps:</h4>
          <ul>
          <li className='steps'>{recipe[0].steps.step1}</li>
          <li className='steps'>{recipe[0].steps.step2}</li>
          <li className='steps'>{recipe[0].steps.step3}</li>
          <li className='steps'>{recipe[0].steps.step4}</li>
          <li className='steps'>{recipe[0].steps.step5}</li>
          </ul>
    </div>
    </div>
  )
}
export default Recipe