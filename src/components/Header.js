import { useState } from 'react'
import {LOGO_URL} from '../utils/constant'

import { Link, NavLink } from 'react-router-dom'


const Header=()=>{

   const [log,setLog]=useState('Login')

   // console.log("rerender")

    return(
       <div className='header'>
          <div className="logo-container">
             <img className='logo' src={LOGO_URL} alt="" />
          </div>
 
          <div className='nav-items'>
             <ul >
                <li>
                  <NavLink to='/' className='nav-link'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/about'  className='nav-link'>About Us</NavLink>
                </li>
                <li>
                  <NavLink to='/contact'  className='nav-link'>Contact Us</NavLink>
                </li>
                <li>Cart</li>
                <button className='login' onClick={()=>{
                  log==='Login'?setLog("Logout"):setLog('Login')

                }}>{log}</button>
             </ul>
 
          </div>
 
 
       </div>
    )
 }


 export default Header