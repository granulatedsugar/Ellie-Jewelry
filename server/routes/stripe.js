import { Router } from "express";
import dotenv from "dotenv";
import { Stripe } from "stripe";

dotenv.config();

const router = Router();
const stripe = Stripe(process.env.STRIPE_PUBLIC);

// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return items.amount;
// };

router.post("/payment", async (req, res) => {
  const { items } = req.body;

  console.log(req.body.amount);
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// // Payment
// router.post("/payment", (req, res) => {
//   console.log(stripe.charges);
//   stripe.charges.create(
//     {
//       source: req.body.tokenId,
//       amount: req.body.amount,
//       currency: "usd",
//     },
//     (stripeErr, stripeRes) => {
//       if (stripeErr) {
//         res.status(500).json(stripeErr);
//       } else {
//         res.status(200).json(stripeRes);
//       }
//     }
//   );
// });

export default router;
