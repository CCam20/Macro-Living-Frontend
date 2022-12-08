import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import RecipesAll from '../components/RecipesAll'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HamburgerMenu from '../components/HamburgerMenu'
import Homepage from '../components/Homepage'
import RecipeService, { getRecipes } from '../components/RecipeService'
import Recipe from '../components/Recipe'
import RecipeList from '../components/RecipeList'

const MainContainer = () => {
  
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((allRecipes) => {setRecipes(allRecipes)});
}, [])

    const recipeList = recipes.map((recipe)=>{
        return <RecipeList recipe={recipe} key={recipe._id}/>
    })
  


  
  
    return (
    <main>
        <Router>
        <HamburgerMenu />
                <Routes>
                    <Route exact path="/" element={<Homepage/>}/>
                    <Route exact path="/recipes-all" element={<RecipesAll recipes = {recipes}/>}/>
                    <Route exact path="/recipe/:id" element={<Recipe recipes={recipes}/>}/>

                </Routes>
        </Router>
    </main>
  )
}

export default MainContainer