import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import RecipesAll from '../components/RecipesAll'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HamburgerMenu from '../components/HamburgerMenu'
import Homepage from '../components/Homepage'
import RecipeService, { getRecipes, updateRecipe } from '../components/RecipeService'
import Recipe from '../components/Recipe'
import RecipeList from '../components/RecipeList'
import { getUsers } from '../components/UserService'
import { getIngredients} from '../components/IngredientsService'


const MainContainer = () => {
  
  const [recipes, setRecipes] = useState([]);

  const [users, setUsers] = useState([]);

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getRecipes().then((allRecipes) => {setRecipes(allRecipes)});
    getUsers().then((allUsers) => {setUsers(allUsers)});
    getIngredients().then((allIngredients) => {setIngredients(allIngredients)});
},[],[],[])

const handleIngredientSelected = ((id) => {
  const updatedIngredients = ingredients.map((ingredient) => {
    return ingredient.id == id
      ?{...ingredient, selected: !ingredient.selected} : ingredient
  })
  setIngredients(updatedIngredients);

})

const handleRecipeFavourite = ((id) => {
  const updatedRecipes = recipes.map((recipe) => {
    return recipe.id == id
    ?{...recipe, favourite: !recipe.favourite} : recipe
  })
  console.log(updatedRecipes)
  const filteredRecipe = updatedRecipes.filter((recipe)=>{return recipe.id==id})
  updateRecipe(filteredRecipe)
  setRecipes(updatedRecipes)
})


const updateUser = ((formData) => {
    const updatedUser = users
    updatedUser[0].protein = formData.protein
    updatedUser[0].carbs = formData.carbs
    updatedUser[0].fat = formData.fat
    updatedUser[0].fibre = formData.fibre
    updatedUser[0].calories = formData.calories
    setUsers(updatedUser)
  })



    
    return (
    <main>
        <Router>
        <HamburgerMenu />
                <Routes>
                    <Route exact path="/" element={<Homepage users={users} ingredients={ingredients} recipes={recipes} handleIngredientSelected={handleIngredientSelected} updateUser = {updateUser} handleRecipeFavourite={handleRecipeFavourite}/>}/>
                    <Route exact path="/recipes-all" element={<RecipesAll recipes = {recipes}/>}/>
                    <Route exact path="/recipe/:id" element={<Recipe recipes={recipes} handleRecipeFavourite={handleRecipeFavourite}/>}/>

                </Routes>
        </Router>
    </main>
  )
}

export default MainContainer