import React,{useState} from 'react';
import './Payment.css';
import { useStateValue } from "../StateProvider";
import CheckoutDish from "./CheckoutDish";
import { loadStripe } from '@stripe/stripe-js';


function Payment() {
    const item = {
        price: "price_1LHIf4KWeULaVcioAs74CtDV",
        quantity: 1
      };
    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
      };

    // const [{ basket}, dispatch] = useStateValue();
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const handleCheckout = async () => {
        const stripePromise = await loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
        const { error } = await stripePromise.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error);

        if (error) setStripeError(error.message);
        setLoading(false);
    }
    return (
        <div>
            <h1> Thi is payment </h1>
     <button
        className="checkout-button"
        onClick={handleCheckout}
        disabled={isLoading}
      >
        <div className="grey-circle">
          <div className="purple-circle">
            {/* <img className="icon" src={CardIcon} alt="credit-card-icon" /> */}
          </div>
        </div>
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
        </div>
      </button>
        </div>
    )
}

export default Payment
