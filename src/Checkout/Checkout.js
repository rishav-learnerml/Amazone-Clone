import userEvent from "@testing-library/user-event";
import React from "react";
import BasketItem from "../BasketItem/BasketItem";
import { useStateValue } from "../StateProvider";
import Subtotal from "../Subtotal/Subtotal";
import "./checkout.css";

function Checkout() {
  const [{basket, user},dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
      <div className="checkout__title">
        <h3>Hello, {user?user.email:"Guest"}</h3>
        <h2>Your Shopping Basket</h2>
        {/* Basket Items */}

        {
        basket.length==0?<div className="checkout__empty">
          <img src="https://cdn.dribbble.com/users/204955/screenshots/4930541/emptycart.png"/>
          <h2>Your Amazon Basket is Empty!!</h2>
        </div>:
        basket.map(item =>(
          <BasketItem 
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
        ))}
      </div>
      </div>
      <div className="checkout__right">
          <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
