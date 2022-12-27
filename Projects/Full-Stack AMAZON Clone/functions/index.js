/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LP5yiGdo9hHvCBNBcaoGeVheVmJVpkmw40zYkrDtQ9bBnLs1N7Kgs36v2xUH8WVaO4f5BFvGmwQNOZ4mp0hvalj00rVaPkuhK"
);

// APi

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routs
app.get("/", (request, response) =>
  response.status(200).send("Full-Stack AMAZON Clone")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request🚀💖🚀", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen Command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-dd86d/us-central1/api
