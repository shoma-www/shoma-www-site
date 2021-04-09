import React from "react";
import NavLink from "../atoms/navlink.tsx";

export default function Navbar({ open }: { open: boolean }) {
  const fadeClassName = open ? "fade-in" : "fade-out";
  return (
    <nav
      className={`w-screen fixed z-10 left-0 bottom-0 px-10 py-4 bg-gray-50 bg-opacity-75 ${fadeClassName}`}
    >
      <ul className="flex justify-between">
        <NavLink href="#about" name="About" />
        <NavLink href="#skill" name="Skil" />
        <NavLink href="#work" name="Work" />
        <NavLink href="./blog" name="Blog" />
      </ul>
    </nav>
  );
}
