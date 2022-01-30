import React from "react";

const Product = (props) => {
  console.log(props.product);
  const { title, price, description, category, image } = props.product;
  return (
    <div className="bg-slate-100 flex flex-row border border-purple-500 rounded-lg m-3 p-3 shadow-lg">
      <img
        src={image}
        className=" basis-1/4 lg:rounded-full lg:w-24 lg:h-24 mx-auto md:w-48 md:h-auto md:rounded-none"
        alt=""
        width="384"
        height="512"
      />

      <div className="basis-3/4 px-3">
        <h4 className="text-purple-600 font-medium">
          Name: {title.slice(0, 12)}
        </h4>
        <p className="text-slate-400">Category: {category}</p>
        <h4>Price: ${price}</h4>
        <button>Details</button>
      </div>
    </div>
  );
};

export default Product;
<h1>Product component</h1>;
