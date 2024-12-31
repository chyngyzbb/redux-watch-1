import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../ProductCart';

const Product = () => {
    const {product}=useSelector((e)=>e)
    return (
        <div>
            <div className="container">
                <div className='flex mt-[50px]  items-center justify-between flex-wrap gap-4'>
                    {product.map((el)=><ProductCart el={el}/>)}
                </div>
            </div>
        </div>
    );
};

export default Product;