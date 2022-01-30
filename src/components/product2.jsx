import React from "react";
import { useNavigate } from "react-router-dom";

const Product2 = (props) => {
  const { id, title, price, image } = props.product;
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}`);
  };
  return (
    <div>
      <div className="flex font-sans m-4 p-4 border rounded-lg ">
        <div className="flex-none w-48 relative">
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              {title.slice(0, 12)}
            </h1>
            <div className="text-lg font-semibold text-slate-500">${price}</div>
            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              In stock
            </div>
          </div>
          <div className="flex-auto flex mt-3 mb-4 text-sm font-medium">
            <button
              className="h-10 px-6 font-semibold rounded-md bg-black text-white"
              type="submit"
              onClick={handleClick}
            >
              See Details
            </button>
          </div>

          <p className="text-sm text-slate-700">
            Free shipping on all continental BD orders.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Product2;
