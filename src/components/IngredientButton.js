import React, { useState } from 'react'
import { updateIngredients } from './IngredientsService'


const IngredientButton = ({ingredient, handleIngredientSelected}) => {

    const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    handleIngredientSelected(ingredient.id)
    setIsActive(current => ! current)
  }

  return (
    <button className={isActive ? "ingredient-button-selected" : "ingredient-button"} type="submit" onClick={handleClick}>{ingredient.name}</button>
  )
}

export default IngredientButton