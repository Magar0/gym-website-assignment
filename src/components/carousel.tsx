import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReviewCrads from "./review-cards";
import { reviewData } from "@/lib/constants";

// interface Data {
//   id: string;
//   title: string;
//   description: string;
//   rating: number;
// }

// interface CarouselCompProps {
//   data: Data[];
// }

export function CarouselComp() {
  return (
    <Carousel className="w-full max-w-[85vw]">
      <CarouselContent>
        {reviewData.map((item, index) => (
          <CarouselItem key={index} className="flex md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <ReviewCrads
                title={item.title}
                description={item.description}
                rating={item.rating}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
