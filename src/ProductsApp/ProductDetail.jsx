import React, { useEffect, useState } from "react";
import "./App.css";
import "./productDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

function ProductDetail({ handleAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

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
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="offcanvasExampleLabel">
            PRODUCT DETAILS
          </h3>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {product && (
            <>
              <img
                src={product.images[0]}
                alt={product.title}
                className="product-image"
              />
              <h4 className="product-title">{product.title}</h4>
              <p className="product-description">{product.description}</p>
              <p className="product-brand">
                Brand: {product.brand ? product.brand : "No brand"}
              </p>

              <div className="product-rating">
                Rating: {renderStars(product.rating)}
              </div>
              <div className="product-price-container">
                <h6 className="productPrice">Price: Rs {product.price}</h6>
              </div>

              <button
                className="btn btn-primary add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>

              <h3 className="reviewAndRatingHeading">Reviews & Ratings</h3>
              <div className="product-rating-summary">
                <h4>{product.rating}</h4>

                <div>{renderStars(product.rating)}</div>
                <h6>{product.reviews?.length} ratings</h6>
              </div>

              <div className="reviews">
                {product.reviews?.map((item, index) => (
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
