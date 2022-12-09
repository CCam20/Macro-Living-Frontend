import React from 'react'
import Ingredient from './Ingredient'

const RecipeResult = ({recipe, handleRecipeFavourite}) => {

    const ingredientsList = recipe.ingredients.map((ingredient) => {
        return <Ingredient ingredient = {ingredient} key={ingredient.id}/>
      })
   
      const handleClick = (() => {
        handleRecipeFavourite(recipe.id)
      })

      const favouriteSelectedText = recipe.favourite ? "Hearted" : "Not Hearted"

    return (
        <>
        <br></br>
        <div>{recipe.name}</div>
        <button type="submit" onClick={handleClick}>{favouriteSelectedText}</button>
        <div>{ingredientsList}</div>

        <br></br>
        </>
      )
}

export default RecipeResult


