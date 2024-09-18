import React from 'react'
import './ExportMenu.css'
import { menu_list } from '../../Assets/assets'
const ExportMenu = ({category,setCategory} ) => {     // props accept kele ithe   cotegory,setCategory
  return (
    <div className='Exportmenu' id='Exportmenu'>
        <h1>Explor our menu</h1>
        <p className='Exploremenutext'>choose form a divere menu featuring a delectable array of dishes crafted with the finest ingrediets and culinary experiance .our mission is satisfy your cravings and  elavate your dining experiance meat at a time </p>
      <div className='Exportmenutest'>
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)} key={index} className="Exploremenulistitem ">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>                  
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExportMenu
