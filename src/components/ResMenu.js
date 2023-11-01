import React from 'react'
import Shimmer from './Shimmer'
import { CDN_URL } from '../utils/constant'
import { useParams } from 'react-router-dom'
import useRestauranrMenu from '../utils/useRestaurantMenu'

const ResMenu = () => {

 const {resId}=useParams()
 const menu=useRestauranrMenu(resId)

    if(menu===null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage,cloudinaryImageId,avgRating}=menu?.cards[0]?.card?.card?.info

    const restaurantdata=menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card?.itemCards
    // const restaurantdata=menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card?.categories[2].itemCards
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
