import ResCard from "./ResCard"
import { resDataObj } from "../utils/constant"
import { useState } from "react"


const Body=()=>{

   const[reslist,setReslist]=useState(resDataObj)
 
   // console.log()
   // https://chat.openai.com/share/16720138-116a-467b-9597-79afeb30af43  React Fiber important
 
 
 
    return(
       <div className="body">
       <div className="filter">
         <button className="filter-btn" onClick={()=>{
         const topRestau=resDataObj.filter(item=>item.info.avgRating > 4)
         setReslist(topRestau)
            }}
            >Top Rated Restaurents</button>
       </div>
       <div className="res-container">
          
          {
             reslist.map((value,index)=>{
                 return <ResCard key={value.info.id}  resData={value}/>
             })
          }
        
 
       </div>
 
    </div>
    )
   
 }


 export default Body