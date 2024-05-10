import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Resgister from './pages/Resgister.jsx'
import Signin from './pages/Signin.jsx'

const router = createBrowserRouter([{
      path:'/',
      element: <App/>,
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
      ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
