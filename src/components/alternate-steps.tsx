"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface AlternateStepsProps {
  index: number;
  title: string;
  description: string;
  img: StaticImageData;
}

const AlternateSteps = ({
  index,
  title,
  img,
  description,
}: AlternateStepsProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "flex translate-x-[50%] items-center justify-around gap-10 opacity-0 transition-all delay-100 duration-1000",
        {
          "-translate-x-[50%]": !isInView && index % 2 === 0,
          "translate-x-0 opacity-100": isInView,
        },
      )}
    >
      <div
        className={cn("order-2 overflow-hidden rounded-md", {
          "order-1": index % 2 === 0,
        })}
      >
        <Image
          width={500}
          src={img}
          alt="img"
          className="max-h-[500px] transition-all duration-300 hover:scale-125"
        />
      </div>
      <div className={cn("order-1 w-[600px]", { "order-2": index % 2 === 0 })}>
        <p className="mb-2 text-3xl font-semibold text-orange-500">
          Step {index + 1}: {title}
        </p>
        <p className="text-lg text-slate-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default AlternateSteps;
