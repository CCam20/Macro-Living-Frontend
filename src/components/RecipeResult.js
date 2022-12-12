import React, {useRef, useState} from 'react'
import './RecipeResult.css'
import IngredientForCard from './IngredientForCard'


const RecipeResult = ({recipe, handleRecipeFavourite,handleAddToMealPlan}) => {
    
    const [visibleDetails, setVisibleDetails] = useState(false);
    
      const handleClick = (() => {
        handleRecipeFavourite(recipe.id)
      })
      const handleMealPlanClick =(() => {
        handleAddToMealPlan(recipe.id)
      })

      const hearted = require("../images/Hearted.png")
      const unhearted= require("../images/Unhearted.png")

      const favouriteSelectedText = recipe.favourite ? <img width='20px' src={hearted}/>  : <img width='20px' src={unhearted}/>
      const mealPlanSelectedText = recipe.mealPlan ? "Remove from Meal Plan" : "Add To Meal Plan"

    const totalProtein = () => {
        let total = 0
        for (let i = 0; i < recipe.ingredients.length; i++){
             total += recipe.ingredients[i].protein
        } return Math.round(total)
    }
    
    const totalCarbs = () => {
        let total = 0
        for (let i = 0; i < recipe.ingredients.length; i++){
             total += recipe.ingredients[i].carbs
        } return Math.round(total)
    }

    const totalFat = () => {
        let total = 0
        for (let i = 0; i < recipe.ingredients.length; i++){
             total += recipe.ingredients[i].fat
        } return Math.round(total)
    }

    const totalFibre = () => {
        let total = 0
        for (let i = 0; i < recipe.ingredients.length; i++){
             total += recipe.ingredients[i].fibre
        } return Math.round(total)
    }

    const totalCalories = () => {
        let total = 0
        for (let i = 0; i < recipe.ingredients.length; i++){
             total += recipe.ingredients[i].calories
        } return Math.round(total)
    }

    function byID(id) {
        return document.getElementById(id);
      }
      const handleToggle = () => {
    
        if (byID(recipe.name).classList.contains("closed")) {
          byID(recipe.name).classList.remove("closed");
          setVisibleDetails(!visibleDetails)
          bottomRef.current?.scrollIntoView({behavior: 'smooth',});
        } else {
          byID(recipe.name).classList.add("closed");

      }
    }

    const ingredientsList = recipe.ingredients.map((ingredient) => {
      return <IngredientForCard ingredient={ingredient} key={ingredient.id}/>
    })
    const bottomRef = useRef(null);
    
    return (
        <>
        <div className='recipe-card'>
        <div ref={bottomRef}/>
    <span className="closed" id={recipe.name}>
    <header onClick={handleToggle} id="toggle">
        <div className="header" style={{backgroundImage: "url(https://www.recipegirl.com/wp-content/uploads/2007/11/Apple-Bacon-Salad-Recipe.jpg)"}}></div>
    </header>
        <div className="title">{recipe.name}<button className='fav-btn' type="submit" onClick={handleClick}>{favouriteSelectedText}</button></div> 
    <article>
    <ul className="ingredients">
        {ingredientsList}
    </ul>
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
        <hr></hr>
        <button className='add-to-meal-btn' type='submit' onClick={handleMealPlanClick}>{mealPlanSelectedText}</button>
        <button className='fav-btn' type="submit" onClick={handleClick}>{favouriteSelectedText}</button>
        <br></br>

        <hr></hr>
        <div className="preperation"> 
         <h4>Steps:</h4>
          {recipe.steps.step1}<br></br>
          {recipe.steps.step2}<br></br>
          {recipe.steps.step3}<br></br>
          {recipe.steps.step4}<br></br>
          {recipe.steps.step5}<br></br>
          {recipe.steps.step6}<br></br>
          {recipe.steps.step7}<br></br>
          {recipe.steps.step8}<br></br>
          {recipe.steps.step9}<br></br>
          {recipe.steps.step10}<br></br>
    </div>
  </article>
</span>
</div>


        </>
      )
}

export default RecipeResult


