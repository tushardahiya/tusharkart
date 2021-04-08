import React, { useState } from "react";

export const BasketContext = React.createContext({
  basket: [],
  user: null,
  basketSize: 0,
  addToBasket: () => {},
  basketSizeHandler: () => {},
  userHandler: () => {},
  removeFromBasketHandler: () => {},
});

const BasketProvider = (props) => {
  const [basket, setBasket] = useState([]);
  const [basketSize, setBasketSize] = useState(0);
  const [user, setUser] = useState({});

  const addToBasketHandler = (item) => {
    setBasket([...basket, item]);
  };
  const basketSizeHandler = () => {
    setBasketSize((prevState) => prevState + 1);
  };

  const userHandler = (authUser) => {
    setUser(authUser);
  };

  const removeFromBasketHandler = (id) => {
    const index = basket.findIndex((basketItem) => basketItem.id === id);
    let newBasket = [...basket];
    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn(
        `Cannot remove product ( id:${id}) as its not in the basket!`
      );
    }
    setBasket(newBasket);
    setBasketSize((prevState) => prevState - 1);
  };

  return (
    <BasketContext.Provider
      value={{
        basket: basket,
        addToBasket: addToBasketHandler,
        basketSize: basketSize,
        basketSizeHandler: basketSizeHandler,
        user: user,
        userHandler: userHandler,
        removeFromBasketHandler: removeFromBasketHandler,
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
