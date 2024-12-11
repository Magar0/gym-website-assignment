"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReviewCrads from "./review-cards";
import { REVIEWS } from "@/lib/constants";
import { useInView, motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className={cn("scale-50 opacity-0 transition-all duration-500", {
        "scale-100 opacity-100": isInView,
      })}
    >
      <Carousel className="w-full max-w-[85vw]">
        <CarouselContent>
          {REVIEWS.map((item, index) => (
            <CarouselItem
              key={index}
              style={{ filter: "drop-shadow(0 0 2px #c9c9c9)" }}
              className="flex md:basis-1/2 lg:basis-1/3"
            >
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
    </motion.div>
  );
}
