import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Create = () => {







    const {product}=useSelector((e)=>e)
    const [productUrl,setProductUrl]=useState([])
    const [productName,setProductName]=useState([])
    const [productPrice,setProductPrice]=useState([])
    const dispatch=useDispatch()
    

    function createProduct(){
        const newProduct={
            id:product.length ? product[product.length-1].id+1 : 1,
            name:productName,
            price:productPrice,
            img:productUrl,
            rating:Math.round(Math.random()*5),
        }
        dispatch({type:"CREATE_PRODUCT",payload:newProduct})
        setProductName('')
        setProductPrice('')
        setProductUrl('')
    }
console.log(product);


  return (
    <div className="my-[60px]">
      <div className="container">
        <div className="flex flex-col items-center gap-5">
        <div className="mx-auto w-[40%] text-[22px] font-mono">
          <div className="relative z-0 w-full   mb-5 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e)=>setProductUrl(e.target.value)}
              value={productUrl}
            />
            <label className=" text-center text-[20px] peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Url
            </label>
          </div>
          <div className="relative z-0 w-full  mb-5 group">
            <input
              type="text"
              className=" block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e)=>setProductName(e.target.value)}
              value={productName}
            />
            <label className=" text-center text-[20px] peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-1  0 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Name
            </label>
          </div>
          <div className="relative z-0 w-full  mb-5 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e)=>setProductPrice(e.target.value)}
              value={productPrice}
            />
            <label className=" text-center text-[20px] peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Product Price
            </label>
          </div>
        </div>
        <div className="">
          <button
          onClick={()=>createProduct()}
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Create Product
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
