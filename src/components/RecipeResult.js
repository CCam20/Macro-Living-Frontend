import React from 'react'
import Ingredient from './Ingredient'

const RecipeResult = ({recipe}) => {

    const ingredientsList = recipe.ingredients.map((ingredient) => {
        return <Ingredient ingredient = {ingredient} key={ingredient.id}/>
      })


    return (
        <>
        <br></br>
        <div>{recipe.name}</div>
        <div>{ingredientsList}</div>
        <br></br>
        </>
      )
}

export default RecipeResult


