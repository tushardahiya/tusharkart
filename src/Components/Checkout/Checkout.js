import React, { useContext } from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
import { BasketContext } from "../../Context/BasketContext";

const Checkout = () => {
  const basketContext = useContext(BasketContext);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello , {basketContext.user?.email}</h3>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          {basketContext.basket.map((basketItem) => (
            <CheckoutProduct
              id={basketItem.id}
              title={basketItem.title}
              image={basketItem.image}
              price={basketItem.price}
              rating={basketItem.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout-right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
