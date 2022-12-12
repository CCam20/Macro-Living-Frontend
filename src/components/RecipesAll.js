import React from 'react'
import Recipe from './Recipe'
import RecipeService from './RecipeService'
import RecipeList from './RecipeList'
import './RecipeResult.css'


const RecipesAll = ({recipes}) => {

  const sortedRecipes = recipes.sort((a, b) => a.name.localeCompare(b.name))


    const recipeList = sortedRecipes.map((recipe) => {
      return <RecipeList recipe = {recipe} key={recipe.id}/>
    })

    function byID(id) {
      return document.getElementById(id);
    }
    const handleClick = () => {
      console.log("clicked")
  
      if (byID("container").classList.contains("closed")) {
        byID("container").classList.remove("closed");
      } else {
        byID("container").classList.add("closed");
      
    }
  }



  return (
    <>
    
    <div className="closed" id="container">
  <header onClick={handleClick} id="toggle">
    <div className="header"></div>
    <div className="title">Mint Julip</div>
  </header>
  <article>
    <ul className="ingredients">
      <li> 
        <div className="amount">50ml</div>
        <div className="ingredient">Rum</div>
      </li>
      <li> 
        <div className="amount">2tsp</div>
        <div className="ingredient">Sugar</div>
      </li>
      <li> 
        <div className="amount">4 sprigs</div>
        <div className="ingredient">Mint</div>
      </li>
      <li> 
        <div className="amount">dash</div>
        <div className="ingredient">Soda water (optional)</div>
      </li>
    </ul>
    <div className="preperation"> 
      <div>Add the mint sprigs, caster sugar and a couple of tablespoons of crushed ice.</div>
      <div>Begin 'massaging' the mix together with a spoon. The caster sugar helps to bring out the flavour of the mint. Breaking or crushing the mint makes the taste sour, hence the need to gently fold and stir.</div>
      <div>Add 25ml of rum, more crushed ice and continue 'massaging'. Fill with ice, pour in the second 25ml shot of rum and add a dash of soda, if desired.</div>
    </div>
  </article>
</div>

    
    
    
    
    
    
    
    
    
    <div>
  
        <div>{recipeList}</div>
    </div>
    </>
  )
}

export default RecipesAll