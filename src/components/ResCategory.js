import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CatgoryItemList from "./CategoryItemList"
import { useState } from "react"

const ResCategory=({data,isOpen,onClick})=>{

   
    
   
    return(
        <div>
            {/*Accordian Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" 
            onClick={onClick}
            >
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <FontAwesomeIcon icon={faAngleDown} />

            </div>

             {/*Accordian Body */}

            {isOpen && <CatgoryItemList item={data.itemCards}/>}
            
            </div>

           

            

        </div>
    )
}

export default ResCategory