import React, { useState } from 'react'
import './style.css'
import Menu from '../menuApi'
import Menucard from '../Menucard'
const Resturant = () => {
    const [menuData, setmenuData]=useState(Menu)
    const filterItem=(category)=>{
        const updateList= Menu.filter((curele)=>{
            return curele.category==category
        })
        setmenuData(updateList)
    }

    const filter=(category)=>{
        const updateList= Menu.filter((curele)=>{
            return curele.category==category
        })
        setmenuData(updateList)
    }

    const data=(category)=>{
        const updateList= Menu.filter((curele)=>{
            return curele.category==category
        })
        setmenuData(updateList)
    }

    const dinner=(category)=>{
        const updateList= Menu.filter((curele)=>{
            return curele.category==category
        })
        setmenuData(updateList)
    }


       return (
        <>
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item' onClick={()=>filterItem("breakfast")}>Breakfast</button>
                <button className='btn-group__item' onClick={()=>filter("lunch")}>Lunch</button>
                <button className='btn-group__item'onClick={()=>data("evening")}>Evening</button>
                <button className='btn-group__item'onClick={()=>dinner("dinner")}>Dinner</button>
                <button className='btn-group__item' onClick={()=>setmenuData(Menu)}>All</button>
            </div>
        </nav>
        
        
        <Menucard menuData={menuData}/>
        
        </>
       )
}

export default Resturant