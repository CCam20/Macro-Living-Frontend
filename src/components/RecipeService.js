// class RecipeService {
//     get(url){
//         return fetch(url)
//         .then((res)=> res.json())
//     }
// }

// export default RecipeService;

const baseURL = 'http://localhost:8080/api/recipes/'

export const getRecipes = () => {
    return fetch(baseURL)
        .then(res => res.json())
}
