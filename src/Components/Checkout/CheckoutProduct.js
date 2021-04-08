import React, { useContext } from "react";
import "./CheckoutProduct.css";
import { BasketContext } from "../../Context/BasketContext";
import { v4 as uuidv4 } from "uuid";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const basketContext = useContext(BasketContext);

  const removeFromBasketHandler = () => {
    basketContext.removeFromBasketHandler(id);
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt="" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>Rupees :</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p id={uuidv4()}>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasketHandler}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
