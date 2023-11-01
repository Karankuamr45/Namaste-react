import ResCard from "./ResCard"

import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useBody from "../utils/useBody"
import useOnlineStatus from "../utils/useOnlineStatus"


const Body=()=>{
   

   
   const[searctxt,setSearchtext]=useState("")

   const {reslist,filtterRes,formHandler,setFiltterRes}=useBody()
   

 
// if(reslist.length===0){
//    return <Shimmer/>
// }

const onlineStatus=useOnlineStatus()

if(onlineStatus===false) return <h1>Bhai tera internet band h</h1>


return reslist.length===0 ? (<Shimmer/> ): (
       <div className="body">
       <div className="filter">
          
          <div className="search-bar-container">
           <form action="" onSubmit={formHandler}>
           <input type="text" className="search-bar" placeholder="Search..." value={searctxt}
            onChange={(e)=>{setSearchtext(e.target.value)}} />
            <button className="search-button">Search</button>
           </form>
          </div>


         <button className="filter-btn" onClick={()=>{
         const topRestau=reslist.filter(item=>item.info.avgRating > 4)
         setFiltterRes(topRestau)
            }}
            >Top Rated Restaurents</button>
       </div>

       <div className="res-container">
          
          {
             filtterRes.map((value,index)=>{
                 return <Link to={'/restaurants/' + value.info.id} key={value.info.id} > <ResCard  resData={value}/></Link>
             })
          }
        
 
       </div>
 
    </div>
    )
   
 }


 export default Body





    // https://chat.openai.com/share/16720138-116a-467b-9597-79afeb30af43  React Fiber important
