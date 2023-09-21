import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {

    const {products} = useLoaderData()
    console.log(products);
    
    return (
        <div className='grid grid-cols-3 gap-5 p-5'>
            {products?.map(product => <Product key={product.id} pro
        </div>
    );
};

export default Products;