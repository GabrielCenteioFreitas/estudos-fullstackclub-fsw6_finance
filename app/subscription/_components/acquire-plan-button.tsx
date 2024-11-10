"use client";

import { Button } from "@/app/_components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { createStripeCheckout } from "../_actions/create-checkout";

export const AcquirePlanButon = () => {
  const handleAcquirePlanClick = async () => {
    const { sessionId } = await createStripeCheckout();

    if (!process.env.NEXT_PUBLIC_STRIE_PUBLISHABLE_KEY) {
      throw new Error("Stripe Publishable Key not found!");
    }

    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIE_PUBLISHABLE_KEY,
    );

    if (!stripe) {
      throw new Error("Stripe not found!");
    }

    await stripe.redirectToCheckout({ sessionId });
  };

  return (
    <Button
      onClick={handleAcquirePlanClick}
      className="w-full rounded-full font-bold"
    >
      Adquirir plano
    </Button>
  );
};
