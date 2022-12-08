import React from "react";

const Ingredient = ({ingredient}) => {

    return(
    <div> {ingredient.name}  Quantity: {ingredient.quantity}</div>
    )
}

export default Ingredient