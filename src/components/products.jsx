import React from "react";
import { useState, useEffect } from "react";
import Product2 from "./product2";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-slate-900 bg-gray-200 p-4 ">
        Shop-E-Phi
      </h1>
      <div className="grid   md:grid-cols-2 sm:grid-cols-1">
        {product.map((pd) => (
          <Product2 key={pd.id} product={pd} />
        ))}
      </div>
      <div className="grid   md:grid-cols-2 sm:grid-cols-1">
        {product.map((pd) => (
          <Product2 key={pd.id} product={pd} />
        ))}
      </div>
    </div>
  );
};

export default Products;
