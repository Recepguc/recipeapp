import axios from 'axios';
import React from 'react'
import Header from '../../compenents/header/Header'
import {useState, useEffect} from 'react'


const APP_ID = "0fcc65b4"
const APP_KEY = "38c8b829fcc3757fd9ef6774d839916e	—" ;

const Home = () => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState()
  const mealTypes=["Breakfast","Lunch","Dinner","Snack", "Teatime"] 
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
  const getData=async()=>{
    if(query){
      const result = await axios.get(url)
      setFood(result.data.hits)
      console.log(result.data.hits);
      
    }
    
  }
  useEffect(() => {
    getData()
  }, [])
  
  

  return (
    <div>
      <Header setQuery={setQuery}
      getData={getData }
      mealTypes={mealTypes}
      setMeal={setMeal}/> 
    </div>
  )
}

export default Home