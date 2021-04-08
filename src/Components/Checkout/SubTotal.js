import React, { useContext, useEffect, useState } from "react";
import "./SubTotal.css";
import { BasketContext } from "../../Context/BasketContext";

const SubTotal = () => {
  const [basketTotal, setBasketTotal] = useState(0);
  const basketContext = useContext(BasketContext);
  useEffect(() => {
    let totalPrice = basketContext.basket.reduce(
      (total, item) => total + item.price,
      0
    );
    setBasketTotal(totalPrice);
  }, [basketContext]);

  return (
    <div className="subtotal">
      <p>
        Subtotal : (${basketContext.basket.length} items) :
        <strong>{basketTotal}</strong>
      </p>
      <button>Proceed To Checkout</button>
    </div>
  );
};

export default SubTotal;
