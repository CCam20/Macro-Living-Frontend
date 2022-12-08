import React from 'react'
import { useParams } from 'react-router-dom'
import Ingredient from './Ingredient'
import RecipesAll from './RecipesAll'
import Step from './Step'

const Recipe = ({recipes}) => {

    const {id} = useParams()
    const recipe = recipes.filter(recipe => recipe._id === id)

    const ingredientList = recipe.ingredients.map((ingredient) => {
        return <Ingredient ingredient = {ingredient} key={ingredient._id}/>
      })

  return (
    <div>
        <div>
          {recipe.name}<br></br>
          Ingredients:<br></br>
          
          {ingredientList}
          Steps:<br></br>
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
        




      {/* loop for ingredients */}
      {/* loop through steps */}

      </div><br></br>
    </div>
  )
}

export default Recipe