import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {

    const {products} = useLoaderData()
    console.log(products);
    
    return (
        <div>
            {products?.map(product => <Product key={product.id} product={product}></Product>)}
        </div>
    );
};

export default Products;