import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Sale from '../../images/sale.png'

const ProductCart = ({ el }) => {
  return (
    <div className="py-[30px]">
      <div className="container">
        <div className="w-[300px] h-[300px] relative flex flex-col justify-evenly items-center gap-2 border-2 border-solid border-yellow-600 rounded-2xl ">
          {el.price>300 ?<img src={Sale} width={140} className="absolute top-[-7px] left-[-7px] " alt="" />: null}
          <Zoom>
            <img src={el.img} className="w-[150px] h-[150px]" alt="" />
          </Zoom>
          <h1 className="text-[20px] font-mono">{el.name}</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-between gap-2">
              <div
                className="star"
                style={{ background: el.rating > 0 ? "Yellow" : "gray" }}
              ></div>
              <div
                className="star"
                style={{ background: el.rating > 1 ? "Yellow" : "gray" }}
              ></div>
              <div
                className="star"
                style={{ background: el.rating > 2 ? "Yellow" : "gray" }}
              ></div>
              <div
                className="star"
                style={{ background: el.rating > 3 ? "Yellow" : "gray" }}
              ></div>
              <div
                className="star"
                style={{ background: el.rating > 4 ? "Yellow" : "gray" }}
              ></div>
            </div>
            <h3 className="font-mono text-[21px]">{el.rating}</h3>
          </div>
          {el.price > 300 ? (
            <div className="flex relative">
              <h2 className=" text-red-600 text-[20px] font-bold">
                {el.price > 300 ? el.price - (el.price / 100) * 20 : el.price}$
              </h2>
              <h2 className="font-mono absolute top-[-12px] right-[-35px]">
                {el.price}$
              </h2>
            </div>
          ) : (
            <h2 className=" text-[20px] font-bold">{el.price}$</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
