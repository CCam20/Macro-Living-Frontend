
const baseURL = 'http://localhost:8080/api/recipes/'

export const getRecipes = () => {
    return fetch(baseURL)
        .then(res => res.json())
        
}

export const updateRecipe = (payload) => {
    console.log(payload)
    const id = payload[0].id;

    return fetch(baseURL + id, {
        // mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(payload),
        headers:{'Content-Type': 'application/json'}

    })
}