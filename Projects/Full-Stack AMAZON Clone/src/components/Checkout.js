/* eslint-disable no-unused-vars */
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";
import NothingProducts from "./NothingProducts";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <>
      {basket.length > 0 ? (
        <div className="checkout">
          <div className="checkout__left">
            <img
              className="checkout__ad"
              src="https://drive.google.com/uc?export=download&id=1VyaeWS-74b8piGP9uCTHA2pAbkxML9DU"
              alt=""
            />
            <div>
              <h3>Hello, {user?.email}</h3>

              <h2 className="checkout__title">Your Shopping Basket</h2>
              <FlipMove
                staggerDurationBy={30}
                duration={750}
                delay={30}
                // enterAnimation={""}
                // leaveAnimation={""}
              >
                {basket.map((item) => (
                  <div key={item.id}>
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                  </div>
                ))}
              </FlipMove>
            </div>
          </div>
          <div className="checkout__right">
            <Subtotal />
          </div>
        </div>
      ) : (
        <NothingProducts />
      )}
    </>
  );
};

export default Checkout;
