import React from "react"
class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2,
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:""

            }
        }

        // console.log("Child Contructor")

    }

   async componentDidMount(){
        // console.log("Child ComponentDidMount")
        const data=await fetch("https://api.github.com/users/akshaymarch7?");
        const json=await data.json()
        this.setState({
            userInfo:json
        })
        console.log(json)


    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }


    componentWillUnmount(){
        console.log("Component will unmount")
    }


    render() {
        // console.log("Child Render")

        return(
            <div className="user-card">
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1,
                        count2:this.state.count2 + 1

                    })


                }} >Increase</button>
                <h1>Count2 : {this.state.count2}</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h1>Name : {this.state.userInfo.name}</h1>
                <h3>Location : {this.state.userInfo.location}</h3>
                <h4>Contact : Karankumar46226@gmail.com</h4>
    
            </div>
        )
    }
}

export default UserClass