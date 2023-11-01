import { useEffect ,useState} from "react";
import { MENU_API } from "./constant";
const useRestauranrMenu=(resId)=>{

    const[menu,setMenu]=useState(null)

    useEffect(()=>{
        fetchMenu()

    },[])

    const fetchMenu = async ()=>{
        const data=await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER")
        const json=await data.json()
        setMenu(json?.data)
    }

    return menu;

}


export default useRestauranrMenu