import React, { useState } from 'react'
import { updateIngredients } from './IngredientsService'


const IngredientButton = ({ingredient}) => {

    // const [ingredient, setIngredient] = useState([])

    const handleIngredientSelected = (() => {
      if(ingredient.selected){
            ingredient.selected = false
      }else{
        ingredient.selected = true
      } 
        updateIngredients(ingredient)
        // setIngredient(ingredient)
        console.log("click")
    })

    const buttonSelectedText = ingredient.selected ? `Remove ${ingredient.name}` : `${ingredient.name}`



  return (
    <div>

    <button type="submit" onClick={handleIngredientSelected}>{buttonSelectedText}</button>

    </div>
  )
}

export default IngredientButton