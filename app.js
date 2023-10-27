import React from 'react';
import  ReactDOM  from 'react-dom/client';

const heading=React.createElement('h1',{id:"heading"},"this is an heading tag with namaste react");
 const root=ReactDOM.createRoot(document.getElementById('root'));

 const jsxHeading=<h1>this is  dhd a jsx bro</h1>

 const fn =() => true

 const fn2=()=>{return true}
 const num=10000;

 const Heading=()=><h1>Function shorthand Components</h1>
 const Heading2=()=>(
 <div>
    <Heading/>
    <h1>{num}</h1>
    {jsxHeading}
    <h1>Function shorthand  heading2 Components</h1>
 <h1>Function shorthand  heading2 second time</h1>
 </div>
 )


 const Heading3=()=>{
    return <h1>Function Components</h1>
 }
 console.log(<Heading/>)
 root.render(<Heading2/>)

