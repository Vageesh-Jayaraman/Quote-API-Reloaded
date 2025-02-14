"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Documentation",
      link: "/documentation",
    },
    {
      name: "Try API",
      link: "/about",
    },
    {
      name: "Collections",
      link: "/collections",
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

