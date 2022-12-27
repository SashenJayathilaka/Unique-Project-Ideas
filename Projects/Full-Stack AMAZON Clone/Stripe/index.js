const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LP5yiGdo9hHvCBNBcaoGeVheVmJVpkmw40zYkrDtQ9bBnLs1N7Kgs36v2xUH8WVaO4f5BFvGmwQNOZ4mp0hvalj00rVaPkuhK"
);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get("/", (request, response) =>
  response.status(200).send("Full-Stack AMAZON Clone")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request🚀💖🚀", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
  }
});

/*
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  // console.log("Payment Request🚀💖🚀", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
*/
app.listen(process.env.PORT || 9000, () => {
  console.log("Sever is listening on port 4000");
});

// return new StripeInvalidRequestError(rawStripeError);

// https://amazonbackend24.herokuapp.com/
