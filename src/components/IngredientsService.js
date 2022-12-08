


const baseURL = 'http://localhost:8080/api/ingredients/'

export const getIngredients = () => {
    return fetch(baseURL)
        .then(res => res.json())
}
export const updateIngredients = (payload) => {
    console.log(payload)
    const id = payload.id;
    // const newPayload = {};
    // // newPayload['name'] = payload.name;
    // // newPayload['protein'] = payload.protein;
    // // newPayload['carbs'] = payload.carbs;
    // // newPayload['fat'] = payload.fat;
    // // newPayload['fibre'] = payload.fibre;
    // // newPayload['selected'] = payload.selected;
    // // newPayload['vegan'] = payload.vegan;
    // // newPayload['vegetarian'] = payload.vegetarian;
    // // newPayload['recipe'] = payload.recipe;
    // // newPayload['quantity'] = payload.quantity;
    // // newPayload['calories'] = payload.calories;

    return fetch(baseURL + id, {
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers:{'Content-Type': 'application/json'}

    })
}