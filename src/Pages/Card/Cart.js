import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext';
import './Cart.css'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
const{cartItem, food_list,removeFromCart, getTotalCArtAmount }=useContext(StoreContext);
 const navigate = useNavigate();
  return (
    <div className='Cart'>
      <div className="Cart-item">
        <div className="Cart-item-title">
          <p>Items</p>  
          <p>Title</p>
          <p>Price</p>
          <p>Quantities</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
      <hr />
{food_list.map((item,index)=>{
  if(cartItem[item._id]>0)    //cart madhi disnyasthi logic 
  {
    return(
      <div>
      <div className="Cart-item-title-item">
       <img src={item.image} alt="" />
       <p>{item.name}</p>
       <p>{item.price}</p>
       <p>{cartItem[item._id]}</p>  {/* product chi quantity kalnyathi */}
       <p>{item.price*cartItem[item._id]}</p>  {/*display total price ,  price la quntity na multiply kelyavr total price yenar quantity chi*/}
       <p onClick={()=>removeFromCart(item._id)} className='Cross'>x</p>
       </div>
       <hr />
      </div>
    )
  }
})}
</div>
<div className="Cart-button">
  <div className="Cart-total">
    <h2>Cart Totals</h2>
    <div>  
    <div className="Cart-total-detail">
      <p>Subtotal</p>
      <p>{getTotalCArtAmount()}</p>
    </div>
    <hr />
    <div className="Cart-total-detail">
      <p>Delivery fee</p>
      <p>{getTotalCArtAmount()===0?0:2}</p>
    </div>
    <hr />
    <div className="Cart-total-detail">
      <b>Total</b>
      <b>{getTotalCArtAmount()===0?0:getTotalCArtAmount()+2}</b>
    </div>

  </div>
<button onClick={()=>navigate('/order')}> Proceed to check out</button>
</div>
<div className="Cart-promocode">
  <p>if you have a promo code,Enter it her</p>
  <div className="Cart-promocode-input">
    <input type="text" placeholder='Promo code' />
    <button>Submit</button>
  </div>
</div>  
</div>
    </div>
  )
}

export default Cart



