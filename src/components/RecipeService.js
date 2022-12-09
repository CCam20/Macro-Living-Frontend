
const baseURL = 'http://localhost:8080/api/recipes/'

export const getRecipes = () => {
    return fetch(baseURL)
        .then(res => res.json())
        
}

export const updateRecipe = (payload) => {
    console.log(payload)
    const id = payload.id;
    console.log(id)

    return fetch(baseURL + id, {
        method: "PATCH",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(payload)

    })
}