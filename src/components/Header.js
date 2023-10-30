import { useState } from 'react'
import {LOGO_URL} from '../utils/constant'


const Header=()=>{

   const [log,setLog]=useState('Login')

   console.log("rerender")

    return(
       <div className='header'>
          <div className="logo-container">
             <img className='logo' src={LOGO_URL} alt="" />
          </div>
 
          <div className='nav-items'>
             <ul >
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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