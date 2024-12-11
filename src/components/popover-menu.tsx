"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface PopoverMenuProps {
  trigger: string;
}
const PopoverMenu = ({ trigger }: PopoverMenuProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <HoverCard openDelay={300} onOpenChange={() => setIsHover(!isHover)}>
      <HoverCardTrigger className="flex cursor-pointer rounded-2xl px-5 py-2 transition-all duration-300 hover:bg-slate-600 hover:text-white">
        {trigger} {isHover ? <ChevronUp /> : <ChevronDown />}
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
