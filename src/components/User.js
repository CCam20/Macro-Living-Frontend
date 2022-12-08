import React from 'react'

const User = () => {


  return (
    <div>
      <form>
      <label htmlFor="protein">Protein:</label>
      <input type="number" id="protein" name="protein" min="0" placeholder='Grams of Protein' required autoFocus/>
    
      <label htmlFor="carbs">Carbs:</label>
      <input type="number" id="carbs" name="carbs" min="0" placeholder='Grams of Carbs' required/>
     
      <label htmlFor="fat">Fat:</label>
      <input type="number" id="fat" name="fat" min="0" placeholder='Grams of Fat' required/>
    
      <label htmlFor="fibre">Fibre:</label>
      <input type="number" id="fibre" name="fibre" min="0" placeholder='Grams of Fibre' required/>
     
      <label htmlFor="calories">Calories:</label>
      <input type="number" id="calories" name="calories" min="0" placeholder='Total Calories' required/>
    <button type="submit">Update Macros</button>
      </form>
    </div>
  )
}

export default User