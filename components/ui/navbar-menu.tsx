"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  link
}: {
  setActive: (item: string) => void;
  active: string;
  item: string;
  link:string
}) => {
  return (
    <Link href={`${link}`} passHref>
      <span
        onMouseEnter={() => setActive(item)}
        onMouseLeave={() => setActive("")}
        className="relative cursor-pointer text-green-100"
      >
        {item}
        <motion.div
          className="absolute left-0 bottom-[-2px] h-[2px] bg-white "
          initial={{ width: 0 }}
          animate={{ width: active === item ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
        />
      </span>
    </Link>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive("")}
      className="relative rounded-full border-2 border-green-400 bg-neutral-800 shadow-input flex justify-center space-x-4 px-4 py-5"
    >
      {children}
    </nav>
  );
};
