import { Router } from "express";
import dotenv from "dotenv";
import { Stripe } from "stripe";

dotenv.config();

const router = Router();
const stripe = Stripe(process.env.STRIPE_PUBLIC);
const YOUR_DOMAIN = "http://localhost:3000/";

// Payment
// router.post("/payment", async (req, res) => {
//   const { items } = req.body;

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items.amount),
//     currency: "usd",
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// Payment
router.post("/payment", (req, res) => {
  console.log(req.body);
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "USD",
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

export default router;
