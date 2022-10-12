import React from "react";
import { NavLink } from "react-router-dom";
import "./Product.css"
import FormatPrice from "./Helpers/FormatPrice";
const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;

  return (
    <>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <figure>
            <img className="product-image" src={image} alt={name} />
            <figcaption className="caption">{category}</figcaption>
          </figure>
          <div className="card-data">
            <p className="card-data-name">{name}</p>
            <p className="card-data-price">{<FormatPrice price={price}/>}</p>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Product;
