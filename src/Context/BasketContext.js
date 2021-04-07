import React, { useState } from "react";

export const BasketContext = React.createContext({
  basket: [],
  user: null,
  basketSize: 0,
  addToBasket: () => {},
  basketSizeHandler: () => {},
  userHandler: () => {},
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

  return (
    <BasketContext.Provider
      value={{
        basket: basket,
        addToBasket: addToBasketHandler,
        basketSize: basketSize,
        basketSizeHandler: basketSizeHandler,
        user: user,
        userHandler: userHandler,
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
