import React from "react";
import { useStateValue } from "../store/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, rating, price, hiddenButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItemFromBasket = () => {
    dispatch({ type: "REMOVE_TO_BASKET", id });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />

      <div className="checkoutProduct__detail">
        <p className="checkoutProduct__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hiddenButton && (
          <button onClick={removeItemFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
