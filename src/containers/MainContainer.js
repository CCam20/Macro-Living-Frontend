import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import RecipesAll from '../components/RecipesAll'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HamburgerMenu from '../components/HamburgerMenu'
import Homepage from '../components/Homepage'
import RecipeService, { getRecipes } from '../components/RecipeService'
import Recipe from '../components/Recipe'
import RecipeList from '../components/RecipeList'
import { getUsers } from '../components/UserService'
import { getIngredients } from '../components/IngredientsService'

const MainContainer = () => {
  
  const [recipes, setRecipes] = useState([]);

  const [users, setUsers] = useState([]);

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getRecipes().then((allRecipes) => {setRecipes(allRecipes)});
    getUsers().then((allUsers) => {setUsers(allUsers)});
    getIngredients().then((allIngredients) => {setIngredients(allIngredients)});
}, [], [], [])

// const handleIngredientSelected = ((id) => {
//     if(ingredients[{id}].selected){
//           ingredients.id.selected = false
//     }else{
//       ingredients.id.selected = true
//     } 
//       updateIngredients(ingredient)
//       console.log("click")
//   })

  

    
    return (
    <main>
        <Router>
        <HamburgerMenu />
                <Routes>
                    <Route exact path="/" element={<Homepage users={users} ingredients={ingredients} recipes={recipes}/>}/>
                    <Route exact path="/recipes-all" element={<RecipesAll recipes = {recipes}/>}/>
                    <Route exact path="/recipe/:id" element={<Recipe recipes={recipes}/>}/>

                </Routes>
        </Router>
    </main>
  )
}

export default MainContainer