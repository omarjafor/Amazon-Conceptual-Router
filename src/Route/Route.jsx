import { createBrowserRouter } from 'react-router-dom'
import Mainlayout from '../layout/mainlayout'
import Home from '../Pages/Home/Home'
import Products from '../Products/Products'
import '../App.css'

const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('https://dummyjson.com/products')
            },
            {
                path: '/dashboard',
                element: <div>This is Dashboard</div>
            }
        ]
    }
])

export default myCreateRoute;