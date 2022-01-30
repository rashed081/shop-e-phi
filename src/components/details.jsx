import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, []);
  const { title, description, image, price} = productDetails;
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className="mx-auto font-sans m-4 p-4 border rounded-lg w-96">
      <div className="text-lg font-semibold text-slate-500 flex justify-end">
        ${price}
      </div>
      <div className=" w-48 relative mx-auto m-2">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <h1 className="flex-auto text-lg font-semibold text-slate-900 m-2">
        {title}
      </h1>
      <blockquote>
        <p className="m-2">{description}</p>
      </blockquote>

      <button
        className="h-10 px-6 font-semibold rounded-md bg-black text-white"
        type="submit"
        onClick={handleClick}
      >
        Go back to Homepage
      </button>
    </div>
  );
};

export default Details;
<h1>Details Comming soon.</h1>;
