import React, { useContext } from 'react'
import './Fooddisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const Fooddisplay = ({category}) => {
  
const {food_list} = useContext(StoreContext) 
  return (
    <div className='Food-Display' id='Food-Display'>
      <h2>Top dishes near you</h2>
      <div className="Food-display-list">
        {food_list.map((item,index) =>{
          {console.log(category,item.category);}
if(category==="all" || category===item.category) //dishes vr click kelyavr dishes shaprete houn yetil 
return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default Fooddisplay
