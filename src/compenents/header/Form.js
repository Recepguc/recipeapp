import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './HeaderStyles'

const Form = ({setQuery,setMeal,getData,mealTypes}) => {
  return (
    <FormContainer>
        <FoodInput type="text" placeholder='Search' onChange={(e)=>setQuery(e.target.value)}/>
        <Button type='submit'>Search</Button>
        <Select name='mealTypes' id='mealTypes'
        onChange={(e)=>setMeal(e.target.value)}>
            {mealTypes.map((item,index)=> 
            <option key={index} value={item}>
                {item}
            </option> )}

        </Select>
    </FormContainer>
  )
}

export default Form