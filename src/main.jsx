import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreateRoute from './Route/Route'


// const myCreateRoute = createBrowserRouter([
//   {
//     path:"/",
//     element: <App></App>
//   },
//   {
//     path: "/about",
//     element: <About></About>
//   },
//   {
//     path: "/product",
//     element: <Product></Product>
//   }
// ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRoute}></RouterProvider>
  </React.StrictMode>,
)
