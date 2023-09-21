import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Mainlayout from './layout/mainlayout'

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

const myCreateRoute = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <div>This is home route</div>
      },
      {
        path: '/products',
        element: <div>Products Pages</div>
      },
      {
        path: '/apps',
        element: <App></App>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRoute}></RouterProvider>
  </React.StrictMode>,
)
