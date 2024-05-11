import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Resgister from './pages/Resgister.jsx'
import Signin from './pages/Signin.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import 'react-toastify/dist/ReactToastify.css'
import PageNotFound from './pages/PageNotFound.jsx'
import AllFoods from './pages/AllFoods.jsx'
import Gallery from './pages/Gallery.jsx'
import axios from 'axios'
import AddFoodItem from './pages/AddFoodItem.jsx'
import MyFoodItems from './pages/MyFoodItems.jsx'
import MyPurchases from './pages/MyPurchase.jsx'
import PurchaseItem from './pages/PurchaseItem.jsx'
import UpdateFoodItem from './pages/UpdateFoodItem.jsx'
import PrivateRoute from './providers/PrivateRoute.jsx'

const router = createBrowserRouter([{
      path:'/',
      element: <App/>,
      errorElement:<PageNotFound/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/signin',
          element: <Signin/>
        },
        {
          path:'/signup',
          element: <Resgister/>
        },
        {
          path: '/allFoods',
          element: <AllFoods/>,
          loader:()=>{
            return axios.get('http://localhost:5000/allFoods')
          }
        },
        {
          path: '/gallery',
          element: <Gallery/>,
          loader: ()=>{
            return axios.get('http://localhost:5000/allFeedbacks')
          }
        },
        {
          path: '/addFoodItem',
          element: <PrivateRoute><AddFoodItem/></PrivateRoute>
        },
        {
          path: '/updateFoodItem',
          element: <UpdateFoodItem/>
        },
        {
          path: '/myFoodItems',
          element: <PrivateRoute><MyFoodItems/></PrivateRoute>,
        },
        {
          path: '/myPurchases',
          element: <MyPurchases/>
        },
        {
          path: '/purchaseItem',
          element: <PurchaseItem/>
        }
      ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router}/>
        </AuthProvider>
  </React.StrictMode>,

)
