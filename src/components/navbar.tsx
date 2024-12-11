"use client";

import Link from "next/link";
import React from "react";
import PopoverMenu from "./popover-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-around bg-slate-300/70 px-5 py-4 backdrop-blur">
      <div className="text-3xl font-extrabold text-slate-700">GymFluencer</div>
      <div className="flex items-center justify-center gap-2 font-semibold">
        <Link
          className="relative px-5 py-1 before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-0 before:bg-green-600 before:transition-all before:duration-300 hover:before:w-full"
          href="/"
        >
          Features
        </Link>
        <PopoverMenu trigger={"Diet Plan"} />
        <PopoverMenu trigger={"Workouts Plan"} />
        <Link
          className="relative px-5 py-1 before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-0 before:bg-green-600 before:transition-all before:duration-300 hover:before:w-full"
          href="/"
        >
          Blog
        </Link>

        <Link
          className="relative px-5 py-1 before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-0 before:bg-green-600 before:transition-all before:duration-300 hover:before:w-full"
          href="/"
        >
          FAQs
        </Link>
        <Link
          className="relative px-5 py-1 before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-0 before:bg-green-600 before:transition-all before:duration-300 hover:before:w-full"
          href="/"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex gap-5">
        <Button className="w-32 rounded-xl hover:font-semibold">
          Get Started
        </Button>
        <Button className="w-32 rounded-xl hover:font-semibold">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
