"use client";
import React from "react";
import CustomCard from "./custom-card";
import { CARDS_DATA } from "@/lib/constants";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const ScrollViewCard = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-30%" });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "grid w-full scale-50 grid-cols-3 justify-items-center gap-y-5 opacity-0 transition-all duration-700",
        { "scale-100 opacity-100": isInView },
      )}
    >
      {CARDS_DATA.map((card) => (
        <CustomCard
          key={card.id}
          title={card.title}
          description={card.description}
          img={card.img}
        />
      ))}
    </motion.div>
  );
};

export default ScrollViewCard;
