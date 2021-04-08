import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { BasketContext } from "./Context/BasketContext";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  const basketContext = useContext(BasketContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ", authUser);

      if (authUser) {
        basketContext.userHandler(authUser);
      } else {
        basketContext.userHandler(null);
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
