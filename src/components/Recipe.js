import React from 'react'
import RecipesAll from './RecipesAll'

const Recipe = ({recipe}) => {
  return (
    <div>
        Name = {recipe.name}
        Ingredients = {recipe.ingredients[1].name} {recipe.ingredients[1].quantity}

    </div>
  )
}

export default Recipe