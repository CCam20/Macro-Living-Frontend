import React from 'react'



const IngredientButton = ({ingredient, handleIngredientSelected}) => {

  const handleClick = () => {
    handleIngredientSelected(ingredient.id)
  }

  return (
    <button className={ingredient.selected ? "ingredient-button-selected" : "ingredient-button"} type="submit" onClick={handleClick}>{ingredient.name}</button>
  )
}

export default IngredientButton