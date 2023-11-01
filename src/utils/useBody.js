import { useState,useEffect } from "react"
const useBody=()=>{

    const[reslist,setReslist]=useState([])
   const[filtterRes,setFiltterRes]=useState([])

    useEffect(()=>{
        fetchData()
  
     },[])
  
     const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5194062&lng=77.2024306&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json()
        const reesData=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setReslist(reesData)
        setFiltterRes(reesData)
  
     }

     const formHandler=(e)=>{
        e.preventDefault()
     
           searchRes=reslist.filter(item=>item.info.name.toLowerCase().includes(searctxt.toLowerCase()))
           setFiltterRes(searchRes)
        }

     return {
        reslist:reslist,
        filtterRes:filtterRes,
        formHandler:formHandler,
        setFiltterRes:setFiltterRes,
     }

}

export default useBody;