import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ProductCard({ products, handleAddToCart }) {
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

            <a
              href="#"
              className="btn btn-primary AddToCartBtn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </a>

            <Link
              to={`/product/${product.id}`}
              className="btn btn-primary productDetailButton"
            >
              More Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
