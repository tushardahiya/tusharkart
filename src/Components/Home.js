import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchedProducts = [];
    db.collection("products")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          fetchedProducts.push(doc.data());
        });
        setProducts(fetchedProducts);
        console.log(products);
      });
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home-row">
          {products.map((product) => {
            return (
              <Product
                id={product.id}
                title={product.title}
                price={+product.price}
                rating={product.rating}
                image={product.image}
              />
            );
          })}
        </div>

        <div className="home-row">
          <Product
            id="4903850"
            title="Amazfit fitness band (2nd Gen) with Heart Rate sensor and Accelerometer"
            price={5999}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={7999}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={54999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={69900}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
