import { createBrowserRouter } from 'react-router-dom'
import Mainlayout from '../layout/mainlayout'
import Home from '../Pages/Home/Home'
import Products from '../Products/Products'
import '../App.css'
import ProductDetails from '../Products/ProductDetails'

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
                path: '/productdetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <div>This is Dashboard</div>
            }
        ]
    }
])

export default myCreateRoute;