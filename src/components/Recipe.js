import React from 'react'
import { useParams } from 'react-router-dom'
import Ingredient from './Ingredient'
import RecipesAll from './RecipesAll'
import Step from './Step'

const Recipe = ({recipes, handleRecipeFavourite}) => {

    const {id} = useParams()
    const recipe = recipes.filter(recipe => recipe.id == id)
    const ingredientList = recipe[0].ingredients.map((ingredient) => {
        return <Ingredient ingredient = {ingredient} key={ingredient._id}/>
      })

      const handleClick = (() => {
        handleRecipeFavourite(recipe.id)
      })

      const favouriteSelectedText = recipe.favourite ? "Hearted" : "Not Hearted"

  return (
    <div>
        <div>
          {recipe[0].name}<br></br>
          <button type="submit" onClick={handleClick}>{favouriteSelectedText}</button>
        
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
        





      {/* loop for ingredients */}
      {/* loop through steps */}

      </div><br></br>
    </div>
  )
}

export default Recipe