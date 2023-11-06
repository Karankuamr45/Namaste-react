import React, { useState } from 'react'
import Shimmer from './Shimmer'
// import { CDN_URL } from '../utils/constant'
import { useParams } from 'react-router-dom'
import useRestauranrMenu from '../utils/useRestaurantMenu'
import ResCategory from './ResCategory'

const ResMenu = () => {

 const {resId}=useParams()
 const menu=useRestauranrMenu(resId)

//  const [showIndex,setShowIndex]=useState(null)
const [openIndex, setOpenIndex] = useState(null);

    if(menu===null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage,cloudinaryImageId,avgRating}=menu?.cards[0]?.card?.card?.info

    // const restaurantdata=menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card?.itemCards
    // const restaurantdata=menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card?.categories[2].itemCards
    // console.log( "smdhsbd0",menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const category=menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.["card"]?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(category)


    

    const handleItemClick = (index) => {
      setOpenIndex(index === openIndex ? null : index);
    };
    
    return (
    <>
    <div className="text-center">
      {/* <img src={CDN_URL + cloudinaryImageId} alt="" className="restaurant-image" /> */}
    
        <h2 className="font-bold my-6 text-2xl ">{name}</h2>
        <p className="font-bold text-lg">{cuisines.join(", ")}</p>

        {/* {Catgory Accordions} */}

       

        {
          category.map((category,index)=>{
            // controlled component
            return <ResCategory
             key={category?.card?.card.title}
              data={category?.card?.card}
              // showItems={index===showIndex ? true : false}
              isOpen={index === openIndex}
              onClick={() => handleItemClick(index)}
              />
          })
        }


       </div>



    {/* <div>
    {
        restaurantdata.map((value)=>{
            return(
                <p key={value.card.info.id}>{value.card.info.name}</p>
            )

        })
    }
    </div> */}

    </>



    
  );
}

export default ResMenu
