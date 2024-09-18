import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {
  const{getTotalCArtAmount} = useContext(StoreContext)
  return (
    <form className='Place-order'>
      <div className="Place-order-left">
        <p className='Title'>Delivery Information</p>
        <div className="Multi-fields">
          <input type="text"placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street'/>
        <div className="Multi-fields">
          <input type="text"placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>
        <div className="Multi-fields">
          <input type="text"placeholder='Zip code ' />
          <input type="text" placeholder='Contry'/>
        </div>
        <input type="text"placeholder='Phone' />
      </div>

      <div className="Place-order-right">
      
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
      <p>{getTotalCArtAmount() ===0?0:2}</p>
    </div>
    <hr />
    <div className="Cart-total-detail">
      <b>Total</b>
      <b>{getTotalCArtAmount()===0?0:getTotalCArtAmount()+2}</b>
    </div>

  </div>
<button> Proceed to payment </button>
 </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
