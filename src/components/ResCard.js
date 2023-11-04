import { CDN_URL } from "../utils/constant"
const ResCard=({resData}) => {
    const {name,costForTwo,avgRating,cloudinaryImageId}=resData?.info
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
           </div>
           
        </div>
     )
  }



  export default ResCard