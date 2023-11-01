import { useState } from "react"

const User=({name})=>{
    const [count,setCount]=useState(0)
    const [count2]=useState(1)
    return(
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h1>Name : {name}</h1>
            <h3>Location : UP</h3>
            <h4>Contact : Karankumar46226@gmail.com</h4>

        </div>
    )
}

export default User