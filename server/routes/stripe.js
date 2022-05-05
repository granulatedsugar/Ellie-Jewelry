import {Router} from express;
import dotenv from dotenv;


dotenv.config();

const router = Router();
const stripe = process.env.STRIPE_PUBLIC;


// Payment
router.post("/payment", (req, res)=> {
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"USD",
    }, (stripeErr, stripeRes) => {
        if(stripeErr){
            res.status(500).json(stripeErr);
        }else{
            res.status(200).json(stripeRes);
        }
    })
})

export default router;