const router = require("express").Router();
const Stripe = require("stripe");
require("dotenv").config();
const stripe = Stripe(process.env.SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
  const { items, userId } = req.body;
  console.log(items);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: items.product,
          },
          unit_amount: items.amount * 100,
        },
        quantity: items.quantity,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/buy",
  });

  res.send({ url: session.url });
});

module.exports = router;
