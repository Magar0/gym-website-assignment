"use client";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { title } from "process";
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
  console.log({ index, test: index % 2 });
  return (
    <div className="flex items-center justify-around gap-10">
      <div className={cn("order-2", { "order-1": index % 2 === 0 })}>
        <Image
          width={500}
          src={img}
          alt="img"
          className="max-h-[500px] rounded-md"
        />
      </div>
      <div className={cn("order-1 w-[600px]", { "order-2": index % 2 === 0 })}>
        <p className="mb-2 text-3xl font-semibold text-orange-500">
          Step {index + 1}: {title}
        </p>
        <p className="text-lg text-slate-700">{description}</p>
      </div>
    </div>
  );
};

export default AlternateSteps;
