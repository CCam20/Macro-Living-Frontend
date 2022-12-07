import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import RecipesAll from '../components/RecipesAll'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HamburgerMenu from '../components/HamburgerMenu'
import Homepage from '../components/Homepage'
import RecipeService, { getRecipes } from '../components/RecipeService'

const MainContainer = () => {
  
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((allRecipes) => {setRecipes(allRecipes)});
}, [])

    // const request = new RecipeService();
    // request.get('/api/recipes')
    // .then((data)=> {setRecipes({recipes:data})
    // })
    
  


  
  
    return (
    <main>
        <Router>
        <HamburgerMenu />
                <Routes>
                    <Route exact path="/" element={<Homepage/>}/>
                    <Route exact path="/recipes-all" element={<RecipesAll recipes = {recipes}/>}/>
                </Routes>
        </Router>
    </main>
  )
}

export default MainContainer