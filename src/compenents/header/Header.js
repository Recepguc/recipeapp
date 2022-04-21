import React from 'react'
import Form from './Form'
import { HeaderContainer, MainHeader } from './HeaderStyles'

const Header = ({setQuery,setMeal,getData,mealTypes}) => {
  return (
   <HeaderContainer>
       <MainHeader>
           Food App
       </MainHeader>
       <Form setQuery={setQuery}
      getData={getData }
      mealTypes={mealTypes}
      setMeal={setMeal}/>
   </HeaderContainer>
  )
}

export default Header