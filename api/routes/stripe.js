const stripeRouter = require('express').Router()
const stripe = require('stripe')("sk_test_51KYalKIQ7sZAjO4XNvBFxGazYFBCeQbypUUEPL6NwfA1PJPRv7f4jpcVnDZtKwr59d3rsmiB7w6O0p5EhBr7aThS00yTKe997e")

stripeRouter.post("/payment", (req, res) => {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  });


module.exports = stripeRouter