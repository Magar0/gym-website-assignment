import { PRICING_CARDS, PRICING_PLANS } from "@/lib/constants";
import React from "react";
import CustomCard2 from "./custom-card2";
import { CardContent, CardTitle } from "./ui/card";
import { CheckIcon, Diamond } from "lucide-react";
import { Button } from "./ui/button";

const PricingDiv = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-left text-3xl font-semibold sm:max-w-[750px] sm:text-5xl md:text-center">
          The Perfect Plan For You
        </h2>
        <p className="sm:max-w-[450px] md:text-center">
          Experience all the benefits of our platform. Select a plan that suits
          your needs and take your productivity to new heights.
        </p>
      </div>
      <div className="mt-10 flex flex-col-reverse items-center justify-center gap-4 sm:flex-row sm:items-stretch">
        {PRICING_CARDS.map((card, index) => (
          <CustomCard2
            key={index}
            className="relative w-[300px] rounded-2xl from-transparent via-gray-400 to-gray-500 shadow-lg transition-all duration-300 hover:z-10 hover:translate-x-10 hover:translate-y-10 hover:scale-110"
            cardHeader={
              <CardTitle className="text-2xl font-semibold">
                {card.planType === PRICING_PLANS.proplan && (
                  <>
                    <Diamond
                      fill="gold"
                      className="absolute right-6 top-6"
                      style={{ filter: "drop-shadow(0 0 5px gold)" }}
                    />
                  </>
                )}
                {card.planType}
              </CardTitle>
            }
            cardContent={
              <CardContent className="p-0">
                <span className="text-2xl font-normal">${card.price}</span>
                {+card.price > 0 ? <span className="ml-1">/mo</span> : ""}
                <p>{card.description}</p>
                <Button
                  variant={"btn-primary"}
                  className="mt-4 w-full whitespace-nowrap"
                >
                  {card.planType === PRICING_PLANS.proplan
                    ? "Go Pro"
                    : "Get Started"}
                </Button>
              </CardContent>
            }
            cardFooter={
              <ul className="mb-2 flex flex-col gap-4 font-normal">
                <small>{card.highlightFeature}</small>
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            }
          ></CustomCard2>
        ))}
      </div>
    </>
  );
};

export default PricingDiv;
