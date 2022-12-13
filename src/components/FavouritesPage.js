import React from 'react'
import FavouriteRecipe from './FavouriteRecipe'

const FavouritesPage = ({recipes, handleRecipeFavourite}) => {

    const recpieList = () => {
        let favouritesList = []
        for(let i=0; i < recipes.length; i++){
            if(recipes[i].favourite == true){
                favouritesList.push(recipes[i])
            }
        } return favouritesList
    } 

    const filteredList = recpieList()

    const favouriteRecipes = filteredList.map((recipe) => {
        return <FavouriteRecipe recipe = {recipe} key= {recipe.id} handleRecipeFavourite={handleRecipeFavourite}/>
      
    })
  
  
    return (
    <div className='recipe-list-all'>
    {favouriteRecipes}
    </div>
  )
}

export default FavouritesPage;