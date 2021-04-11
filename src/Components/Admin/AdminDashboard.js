import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(null);
  const [image, setImage] = useState("");

  const addProductHandler = (e) => {
    e.preventDefault();
    db.collection("products").add({
      id: id,
      title: title,
      price: +price,
      rating: +rating,
      image: image,
    });
    setId("");
    setTitle("");
    setPrice(null);
    setRating(null);
    setImage("");
  };

  return (
    <div className="dashboard">
      <Link to="/">
        <img
          className="adminLogin-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="dashboard-container">
        <h1>Add Product</h1>
        <form>
          <h5>id</h5>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <h5>title</h5>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h5>price</h5>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <h5>rating</h5>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <h5>image</h5>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button onClick={addProductHandler} className="dashboard-button">
            Add product to my catalog
          </button>
        </form>
        <p>
          Provide all details to add a new product of your choice to your
          products
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
