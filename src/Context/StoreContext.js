
import {createContext,useEffect,useState} from "react";
import { food_list } from "../Assets/assets";

export  const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
    
    const [cartItem,setCartItem] =useState({});
    
        const addTocart=(itemId)=>{
            if(!cartItem[itemId]){
                
                setCartItem((prev)=>({...prev,[itemId]:1}))
            }
        
            else{
                setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
                }
        }
        const removeFromCart=(itemId)=>{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }
        // useEffect(()=>{
        //   console.log(cartItem)
        // },[cartItem])  

        const getTotalCArtAmount =()=>{
            let totalAmount = 0;
            for(const Item in cartItem)
             {
                if(cartItem[Item]>0){
                    let itemInfo = food_list.find((product)=>product._id===Item);
                    totalAmount +=  itemInfo.price*cartItem[Item];
                }
             }
                return totalAmount ;
        } 


    const contextValue = {
        food_list,
        cartItem,   
        setCartItem,
        addTocart,
        removeFromCart,
        getTotalCArtAmount}
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
