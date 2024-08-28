import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProductDetail from "./ProductDetail";

function ProductCard({ products, handleAddToCart }) {
  const navigate = useNavigate();
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i <= rating ? "rating-stars" : "rating-stars gray"}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <div className="container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.images[0]}
              alt={product.title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text product-price"> $ {product.price}</p>
              <p className="card-text">{renderStars(product.rating)}</p>

              <button
                className="btn btn-primary AddToCartBtn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>

              <Link
                to={`/projectsPage/productsApp/products/${product.id}`}
                className="btn btn-primary productDetailButton"
              >
                More Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
