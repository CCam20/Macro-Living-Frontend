import React from 'react'
import { updateUser } from './UserService'
import { useState } from 'react'

const User = ({updateUser}) => {

  const [formData, setFormData] = useState({
    protein: '',
    carbs: '',
    fat: '',
    fibre: '',
    calories: ''
    })
    
    const handleUserSubmit = ((e) => {
      e.preventDefault()
      updateUser(formData)
    })

  return (
    <div>
      <form onSubmit = {handleUserSubmit}>
      <label htmlFor="protein">Protein:</label>
      <input type="number" id="protein" name="protein" min="0" placeholder='Grams of Protein' value={formData.protein} onChange={(e) => setFormData({...formData , protein: e.target.value})} required autoFocus/>
    
      <label htmlFor="carbs">Carbs:</label>
      <input type="number" id="carbs" name="carbs" min="0" placeholder='Grams of Carbs' value={formData.carbs} onChange={(e) => setFormData({...formData , carbs: e.target.value})} required/>
     
      <label htmlFor="fat">Fat:</label>
      <input type="number" id="fat" name="fat" min="0" placeholder='Grams of Fat' value={formData.fat} onChange={(e) => setFormData({...formData , fat: e.target.value})} required/>
    
      <label htmlFor="fibre">Fibre:</label>
      <input type="number" id="fibre" name="fibre" min="0" placeholder='Grams of Fibre' value={formData.fibre} onChange={(e) => setFormData({...formData , fibre: e.target.value})} required/>
     
      <label htmlFor="calories">Calories:</label>
      <input type="number" id="calories" name="calories" min="0" placeholder='Total Calories'value={formData.calories} onChange={(e) => setFormData({...formData , calories: e.target.value})} required/>
    <button type="submit">Update Macros</button>
      </form>
    </div>
  )
}

export default User