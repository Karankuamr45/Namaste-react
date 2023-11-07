import { useContext, useState } from 'react'
import { LOGO_URL } from '../utils/constant'

import { Link, NavLink } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'


const Header=()=>{

   const [log,setLog]=useState('Login')

   // console.log("rerender")

   const onlineStatus=useOnlineStatus()

   const contextData=useContext(UserContext)

  //  Selector (subscribing our store using the selector)

  const cartItems=useSelector((store)=> store.cart.items);
  // const cartItems=useSelector((store)=> store);
  console.log(cartItems)

    return(
       <div className='flex  justify-between items-center    bg-pink-200 shadow-lg mb-5'>
          <div className="p-4 mx-8 my-2 ">

            <h2 className='text-6xl text-white font-bold'>Swiggy</h2>
            
             {/* <img className='w-56 ' src={LOGO_URL} alt="" /> */}
          </div>
 
          <div className='nav-items'>
             <ul className='flex space-x-4' >
               {/* <li className='px-4'>
                  Online Status - {onlineStatus ? "🧶" : "🎈" }
               </li>
                <li  className='px-4'>
                  <NavLink to='/grocery' className='nav-link'>Grocery</NavLink>
                </li> */}
                <li  className='px-4 hover:underline cursor-pointer text-white'>
                  <NavLink to='/' className='text-2xl '>Home</NavLink>
                </li>
                <li  className='px-4 hover:underline cursor-pointer text-white'>
                  <NavLink to='/about'  className='text-2xl '>About Us</NavLink>
                </li>
                <li  className='px-4 hover:underline cursor-pointer text-white'>
                  <NavLink to='/contact'  className='text-2xl'>Contact Us</NavLink>
                </li>
                <li  className='px-4 hover:underline cursor-pointer text-white'>
                <NavLink to='/cart'  className='text-2xl'>Cart ({cartItems.length} Items)</NavLink>
                </li>

                <li className='px-4 hover:underline cursor-pointer text-white text-2xl'>{contextData.loggedInUser}</li>
                {/* <button className='login' onClick={()=>{
                  log==='Login'?setLog("Logout"):setLog('Login')

                }}>{log}</button> */}
             </ul>
 
          </div>
 
 
       </div>
    )
 }


 export default Header