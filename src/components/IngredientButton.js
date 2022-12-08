import React, { useState } from 'react'
import { updateIngredients } from './IngredientsService'


const IngredientButton = ({ingredient, handleIngredientSelected}) => {

  const handleClick = () => {
    handleIngredientSelected(ingredient.id)
  }

    const buttonSelectedText = ingredient.selected ? `Remove ${ingredient.name}` : `${ingredient.name}`



  return (
    <div>

    <button type="submit" onClick={handleClick}>{buttonSelectedText}</button>

    </div>
  )
}

export default IngredientButton