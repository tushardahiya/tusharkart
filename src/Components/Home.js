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
      </div>
    </div>
  );
};

export default Home;
