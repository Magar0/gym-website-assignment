"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface PopoverMenuProps {
  trigger: string;
}
const PopoverMenu = ({ trigger }: PopoverMenuProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  console.log({ isHover });
  return (
    <HoverCard openDelay={300} onOpenChange={() => setIsHover(!isHover)}>
      <HoverCardTrigger className="relative flex cursor-pointer px-5 py-1 before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-0 before:bg-green-600 before:transition-all before:duration-300 hover:before:w-full">
        {trigger}{" "}
        <ChevronUp
          className={cn("transition-all duration-300", {
            "rotate-180": isHover,
          })}
        />
      </HoverCardTrigger>
      <HoverCardContent className="w-fit">
        <ul className="flex flex-col gap-3">
          <li className="cursor-pointer hover:text-blue-400">Option 2</li>
          <li className="cursor-pointer hover:text-blue-400">Option 3</li>
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
};

export default PopoverMenu;
