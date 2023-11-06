import { useContext } from "react";
import { CDN_URL } from "../utils/constant"
import UserContext from "../utils/UserContext";
const ResCard=({resData}) => {
    const {name,costForTwo,avgRating,cloudinaryImageId}=resData?.info
   //  const contextData=useContext(UserContext)
     return (
        <div className="w-56 h-72 rounded overflow-hidden shadow-lg m-6 bg-white">
           
           <div className="relative rounded h-32">
           <img className='absolute rounded-3xl  w-full h-full p-2 object-cover' src={CDN_URL + cloudinaryImageId} alt="" />

           </div>
  
          
           <div className="px-6 py-4">
           <h3 className="font-bold text-xl mb-2 truncate"> {name || "Abc Food Corner"}</h3>
           <h3> {costForTwo}</h3>
           {/* <h4>{resData.info.cuisines.join(" , ")}</h4> */}
           <h4>{avgRating} Stars</h4>
           <h4>{resData.info.sla.deliveryTime} Minutes</h4>
           {/* <h1>{contextData.loggedInUser}</h1> */}
           </div>
           
        </div>
     )
  };

// HOC for Discount
//  export const withDiscount=(ResCard)=>{
//    return (props)=>{
//       console.log("prp",props)
//       return(
//          <div>
//             <h1>{props.resData.info.aggregatedDiscountInfoV3.header}</h1>

//             <ResCard  {...props} />

//          </div>
//       )
//    }
//   }


//   Higher Order Componenets(HOC)
//  export const withPromotedLabel=(ResCard)=>{
//    return (props)=>{

//       return(
//          <div>
//             <label>promoted</label>
//             <ResCard {...props} />
//          </div>
//       )
//    }
//   }



  export default ResCard