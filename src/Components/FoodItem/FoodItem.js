import React, { useContext } from 'react'
import'./FoodItem.css'
import { assets } from '../../Assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => { 

  const {cartItem,addTocart,removeFromCart } = useContext(StoreContext)

  return (
    <div className='Food-item'>
      <div className="Food-item-contener">
        <img className="Food-item-image" src={image} alt=" " />

        { !cartItem
        ?<img className='Add' onClick={()=>addTocart(id)} src={assets.add_icon_white} alt="" />
        :<div className='Food-Item-Counter'>
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItem[id]}</p>
              <img  onClick={()=>addTocart(id)} src={assets.add_icon_green} alt="" />
        </div>


        }
      </div>
      <div className="Foodi-item-info">
        <div className="Food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="Food-item-discription">  {description} </p>
        <p className="Fooditem-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
