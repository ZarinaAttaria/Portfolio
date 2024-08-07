import React from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import "./productDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ProductDetail({ products, handleAddToCart }) {
  const { id } = useParams();
  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

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
      <div className="productDetailContainer">
        {selectedProduct ? (
          <>
            <img
              src={selectedProduct.images[0]}
              alt={selectedProduct.title}
              className="product-image"
            />
            <div className="productDetailItem">
              <h4 className="product-title">{selectedProduct.title}</h4>
              <p className="product-description">
                {selectedProduct.description}
              </p>
              <p className="product-brand">
                Brand: {selectedProduct.brand || "No brand"}
              </p>

              <div className="product-rating">
                Rating: {renderStars(selectedProduct.rating)}
              </div>
              <div className="product-price-container">
                <h6 className="productPrice">
                  Price: Rs {selectedProduct.price}
                </h6>
              </div>

              <button
                className="btn btn-primary add-to-cart"
                onClick={() => handleAddToCart(selectedProduct)}
              >
                Add to Cart
              </button>
              <h3 className="reviewAndRatingHeading">Reviews & Ratings</h3>
              <div className="product-rating-summary">
                <h4>{selectedProduct.rating}</h4>

                <div>{renderStars(selectedProduct.rating)}</div>
                <h6>{selectedProduct.reviews.length} ratings</h6>
              </div>

              <div className="reviews">
                {selectedProduct.reviews.map((item, index) => (
                  <div key={index} className="review-item">
                    <p className="review-author">{item.reviewerName}</p>
                    <div className="review-rating">
                      {renderStars(item.rating)}
                      <span>{item.rating}</span>
                    </div>
                    <p className="review-comment">"{item.comment}"</p>
                    <p className="review-date">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default ProductDetail;
