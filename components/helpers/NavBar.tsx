"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavigationBar() {
    const [active, setActive] = useState<string>("");
  
    return (
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-10" active={active} setActive={setActive} />
      </div>
    );
  }
  
  function Navbar({
    className,
    active,
    setActive,
  }: {
    className?: string;
    active: string;
    setActive: (item: string) => void;
  }) {
    return (
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home" link="/"/>
          <MenuItem setActive={setActive} active={active} item="Docs" link="/documentation"/>
          <MenuItem setActive={setActive} active={active} item="Collections" link="/collections"/>
          <MenuItem setActive={setActive} active={active} item="Wallpapers" link="/wallpapers"/>
          <MenuItem setActive={setActive} active={active} item="Playground" link="/playground"/>
        </Menu>
      </div>
    );
  }
  