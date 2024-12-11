"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import PopoverMenu from "./popover-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-around bg-slate-300/70 px-5 py-4">
      <div className="text-3xl font-extrabold text-slate-700">GymFluencer</div>
      <div className="flex items-center justify-center gap-2">
        <Link
          className="rounded-2xl px-5 py-2 transition-all duration-300 hover:bg-slate-600 hover:text-white"
          href="/"
        >
          Features
        </Link>
        <PopoverMenu trigger={"Diet Plan"} />
        <PopoverMenu trigger={"Workouts Plan"} />
        <Link
          className="rounded-2xl px-5 py-2 transition-all duration-300 hover:bg-slate-600 hover:text-white"
          href="/"
        >
          Blog
        </Link>

        <Link
          className="rounded-2xl px-5 py-2 transition-all duration-300 hover:bg-slate-600 hover:text-white"
          href="/"
        >
          FAQs
        </Link>
        <Link
          className="rounded-2xl px-5 py-2 transition-all duration-300 hover:bg-slate-600 hover:text-white"
          href="/"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex gap-5">
        <Button className="rounded-3xl">Get Started</Button>
        <Button className="rounded-3xl">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
