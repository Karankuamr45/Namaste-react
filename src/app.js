import React from 'react';
import  ReactDOM  from 'react-dom/client';
import '../index.css'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResMenu from './components/ResMenu';


const Applayout=()=>{
   return(
      <div className='app'>
         <Header/>
         <Outlet />
         {/* <Footer/> */}

      </div>
   )
}

const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<Applayout/>,
      children:[
         {
            path:'/',
            element:<Body/>
         },
         {
            path:"/about",
            element:<About/>
         },
         {
            path:"/contact",
            element:<Contact/>
         },
         {
            path:"/restaurants/:resId",
            element: <ResMenu/>
         },

      ],
      errorElement:<Error/>,
   },
   
   
])




const root=ReactDOM.createRoot(document.getElementById('root'));

 root.render(<RouterProvider router={appRouter}/>)






 // 20231031140239
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7100319&lng=77.2603927&restaurantId=407805&catalog_qa=undefined&submitAction=ENTER