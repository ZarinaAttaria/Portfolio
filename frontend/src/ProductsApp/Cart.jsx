import React from "react";
import { toast } from "react-toastify";
import "./Cart.css";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cart({ isCartIcon, cart, setCart }) {
  const handleRemoveCartItem = (pid) => {
    let myCart = [...cart];
    let index = myCart.findIndex((item) => item.id === pid);
    myCart.splice(index, 1);
    setCart(myCart);
    localStorage.setItem("cart", JSON.stringify(myCart));
    toast.success("Item removed from cart!");
  };

  const increaseQuantity = (pid) => {
    const updatedCart = cart.map((item) => {
      if (item.id === pid) {
        return { ...item, quantity: (item.quantity || 0) + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (pid) => {
    const updatedCart = cart.map((item) => {
      if (item.id === pid && item.quantity > 1) {
        return { ...item, quantity: (item.quantity || 0) - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = () => {
    let total = 0;
    cart?.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    toast.success("Cart has been cleared!");
  };

  return (
    <div className="cart-container">
      <h5 className="cart-Item-heading">
        You have {cart?.length} {cart?.length === 1 ? "item" : "items"} in cart!
      </h5>
      {isCartIcon && (
        <div className="cart-body">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.images}
                    alt={item.title}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h6>{item.title}</h6>
                    <p className="productPrice">Price: $ {item.price}</p>
                  </div>
                  <div className="quantity-controls">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="quantityBtn"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="quantityBtn"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-primary removeFromCartBtn"
                    onClick={() => handleRemoveCartItem(item.id)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              ))}
              <div>
                <div className="clearButtonContainer">
                  <button
                    onClick={handleClearCart}
                    className="btn btn-primary clearBtn"
                  >
                    Clear
                  </button>
                </div>

                <h3 className="cartSummary">Cart Summary</h3>
                <hr />
                <h4 className="totalPrice">Total: $ {totalPrice()}</h4>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
