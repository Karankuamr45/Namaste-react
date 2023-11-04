import ResCard from "./ResCard"

import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useBody from "../utils/useBody"
import useOnlineStatus from "../utils/useOnlineStatus"


const Body=()=>{
   

   
   

   const {reslist,filtterRes,formHandler,setFiltterRes,searctxt,setSearchtext}=useBody()
   

 
// if(reslist.length===0){
//    return <Shimmer/>
// }

const onlineStatus=useOnlineStatus()

if(onlineStatus===false) return <h1>Bhai tera internet band h</h1>


return reslist.length===0 ? (<Shimmer/> ): (

       <div className="body mt-32">
       <div className="filter flex">
          
          <div className="  m-4 flex items-center shadow-sm justify-between overflow-hidden rounded-full ">
           <form action="" onSubmit={formHandler}>
           <input type="text" className="py-2 px-4 m-4 text-white leading-tight focus:outline-none  bg-slate-600  rounded-full " placeholder="Search..." value={searctxt}
            onChange={(e)=>{setSearchtext(e.target.value)}} />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none">Search</button>
           </form>
          </div>

          <div className="m-4 p-4 flex items-center ">
          <button  className=" rounded-lg  bg-pink-200  text-white  px-4 py-2 " onClick={()=>{
         const topRestau=reslist.filter(item=>item.info.avgRating > 4)
         setFiltterRes(topRestau)
            }}
            >Top Rated Restaurents</button>
          </div>


        
       </div>

       <div className="flex flex-wrap justify-center items-center h-screen">
          
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
