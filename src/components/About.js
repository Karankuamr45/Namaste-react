import {Component} from "react"
import User from "./User"
import UserClass from "./UserClass"

import UserContext from "../utils/UserContext"



class About extends Component{
    constructor(props){
        super(props)
        // console.log("Parent Contructor")

    }


    componentDidMount(){
        // console.log("Parent ComponentDidMount")


    }

    render(){

        // console.log("Parent Render")


        return(
                    <div>
                        <h1>About Page</h1>
                        <div>
                            <UserContext.Consumer>
                                {({loggedInUser})=> <h1 className="text-xl font bold">{loggedInUser}</h1>}
                            </UserContext.Consumer>
                        </div>
                        <UserClass name={"karan (class)"}/>
                       
                    </div>
                )

    }
}

// const About=()=>{
//     return(
//         <div>
//             <h1>About Page</h1>

            

//             <UserClass name={"karan (class)"}/>

//         </div>
//     )
// }


export default About