import { CDN_URL } from "../utils/constant"
const ResCard=({resData}) => {
    const {name,costForTwo,avgRating,cloudinaryImageId}=resData?.info
     return (
        <div className="res-card">
           
           <img className='res-logo' src={CDN_URL + cloudinaryImageId} alt="" />
  
          
           
           <h3> {name || "Abc Food Corner"}</h3>
           <h3> {costForTwo}</h3>
           {/* <h4>{resData.info.cuisines.join(" , ")}</h4> */}
           <h4>{avgRating} Stars</h4>
           <h4>{resData.info.sla.deliveryTime}Minutes</h4>
        </div>
     )
  }



  export default ResCard