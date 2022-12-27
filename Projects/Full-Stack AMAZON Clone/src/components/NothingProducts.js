import React from "react";
import "./NothingProducts.css";
import svgImage from "../assets/kettle-desaturated._CB445243794_.svg";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function NothingProducts() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="checkout_no">
      {user && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <img
            style={{ width: "90%" }}
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle-content-smeghn/2021/RewardsJanSXGY/1500x90ILM_10_Disc.png"
            alt=""
          />
        </div>
      )}

      <div className="empty">
        <img className="empty__image" src={svgImage} alt="image" />
        <div className="empty__container">
          <h1>Your Amazon Bucket is empty</h1>
          <p>Shop today's deals</p>
          {user ? (
            <div style={{ marginTop: "10px" }}>
              <p>
                Your Shopping Cart lives to serve. Give it purpose — fill it
                with groceries, clothing, household supplies, electronics, and
                more. Continue shopping on the{" "}
                <strong style={{ color: "#228b22" }}>
                  Amazon.com homepage
                </strong>{" "}
                learn about{" "}
                <strong style={{ color: "#228b22" }}>today's deals</strong>, or
                visit your Wish List.
              </p>
            </div>
          ) : (
            <div className="empty__button">
              <button
                className="empty__sign"
                onClick={(e) => history.push("/login")}
              >
                Sign in to your account
              </button>

              <button
                className="empty__signUp"
                onClick={(e) => history.push("/login")}
              >
                Sign up now
              </button>
            </div>
          )}
        </div>
      </div>
      {!user && (
        <>
          <div className="empty" style={{ marginTop: "50px" }}>
            <img
              className="empty__image"
              src={svgImage}
              alt="image"
              style={{ display: "none" }}
            />
            <div className="empty__container" style={{ display: "none" }}>
              <h1>Your Amazon Bucket is empty</h1>
              <p>Shop today's deals</p>
              <div className="empty__button">
                <button className="empty__sign">Sign in to your account</button>
                <button className="empty__signUp">Sign up now</button>
              </div>
            </div>
          </div>
          <div className="empty__footer">
            <p>
              The price and availability of items at Amazon.com are subject to
              change. The Cart is a temporary place to store a list of your
              items and reflects each item's most recent price. Shopping
              CartLearn more Do you have a gift card or promotional code? We'll
              ask you to enter your claim code when it's time to pay.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default NothingProducts;
