import React, { useContext } from "react";
import "./Product.css";
import { BasketContext } from "../Context/BasketContext";

const Product = ({
  id = Math.floor(Math.random() * 100),
  title,
  image,
  price,
  rating,
}) => {
  const basketContext = useContext(BasketContext);
  const addBasketHandler = () => {
    const item = {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    };
    basketContext.addToBasket(item);
    basketContext.basketSizeHandler();
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>rupees</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addBasketHandler}>Add to Basket</button>
    </div>
  );
};

export default Product;
