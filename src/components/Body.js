import ResCard from "./ResCard"

import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"


const Body=()=>{
   

   const[reslist,setReslist]=useState([])
   const[filtterRes,setFiltterRes]=useState([])

   const[searctxt,setSearchtext]=useState("")

   console.log(searctxt)

   useEffect(()=>{
      fetchData()

   },[])

   const fetchData=async()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5194062&lng=77.2024306&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json=await data.json()
      const reesData=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // console.log(json)
      // console.log(reesData)
      setReslist(reesData)
      setFiltterRes(reesData)

   }
// if(reslist.length===0){
//    return <Shimmer/>
// }


const formHandler=(e)=>{
   e.preventDefault()

      searchRes=reslist.filter(item=>item.info.name.toLowerCase().includes(searctxt.toLowerCase()))
      setFiltterRes(searchRes)
   }

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
                 return <ResCard key={value.info.id}  resData={value}/>
             })
          }
        
 
       </div>
 
    </div>
    )
   
 }


 export default Body





    // https://chat.openai.com/share/16720138-116a-467b-9597-79afeb30af43  React Fiber important
