import React from "react";
import { Link } from "react-router-dom";
import BasketItem from "../BasketItem/BasketItem";
import { useStateValue } from "../StateProvider";
import "./payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <Link to="/">
        <img
          className="payment__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>P.O+Vill-Sangrampur, P.S-Basirhat</p>
            <p>24 Pgs(N), West Bengal, India</p>
            <p>Pin-743422</p>
          </div>
        </div>

        {/* payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <BasketItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* Stripe Magic */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
