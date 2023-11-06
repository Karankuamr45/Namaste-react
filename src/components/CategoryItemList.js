import { CDN_URL } from "../utils/constant"

const CatgoryItemList=({item})=>{
    // console.log("jhggh",item)
    return(
        <div >

            {item.map((i)=> (<div key={i.card.info.id} className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between">
               
                <div className="w-9/12">
                <div className="py-2">
                    
                    <span className="">{i.card.info.name}</span>
                    <span> - ₹ {i.card.info.price ? i.card.info.price/100 : i.card.info.defaultPrice/100}</span>
                </div>

                <p className="text-sm ">{i.card.info.description}</p>

                </div>

                <div className="w-3/12 p-2">


            <div className="absolute">
            <button className="p-2 bg-black text-white shadow-lg  mx-12 rounded"> Add +</button>
            </div>
            <img src={CDN_URL+ i.card.info.imageId}  className="w-full" />

            </div>

                
            </div>
            ))}

        </div>


    )
}

export default CatgoryItemList