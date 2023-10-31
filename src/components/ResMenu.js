import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { CDN_URL } from '../utils/constant'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../utils/constant'

const ResMenu = () => {



    const[menu,setMenu]=useState(null)

    const {resId}=useParams()
    console.log(resId)




    useEffect(()=>{
        fetchMenu()

    },[])


    const fetchMenu = async ()=>{
        const data=await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER")

        const json=await data.json()
        // const restaurant=json?.data

        console.log(json)
        // console.log(restaurantdata)
        setMenu(json?.data)
    }



    if(menu===null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage,cloudinaryImageId,avgRating}=menu?.cards[0]?.card?.card?.info

    // const restaurantdata=menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card?.itemCards
    const restaurantdata=menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card?.categories[2].itemCards
    console.log( "smdhsbd0",restaurantdata)



    




   return (
    <>
    <div className="restaurant-card">
      <img src={CDN_URL + cloudinaryImageId} alt="" className="restaurant-image" />
      <div className="restaurant-details">
        <h2 className="restaurant-name">{name}</h2>
        <p className="restaurant-cuisine">{cuisines.join(", ")}</p>
        <p className="restaurant-cuisine">{costForTwoMessage}</p>
        <p className="restaurant-rating">Rating: {avgRating}</p>
      </div>

      

    
    </div>

    <div>
    {
        restaurantdata.map((value)=>{
            return(
                <p key={value.card.info.id}>{value.card.info.name} - Rs.{value.card.info.price/100 } </p>
            )

        })
    }
    </div>

    </>



    
  );
}

export default ResMenu
