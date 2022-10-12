import React from "react";
import { useProductContext } from "./Context/productcontext";
import Product from "./Product";
const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  console.log(featureProducts);
  return (
    <>
      <h2>Featured products</h2>
      <div className="feature-product-list">
        {featureProducts.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </>
  );
};

export default FeatureProduct;
