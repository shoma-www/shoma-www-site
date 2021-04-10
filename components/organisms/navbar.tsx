import React from "react";
import NavLink from "../atoms/navlink.tsx";

export default function Navbar({ open }: { open: boolean }) {
  const isShow = open ? "is-show" : "";
  return (
    <nav
      className={`w-screen fixed z-10 px-10 py-4 bg-gray-50 bg-opacity-75 nav ${isShow}`}
    >
      <ul className="flex justify-between">
        <NavLink href="#about" name="About" icon="person" />
        <NavLink
          href="#history"
          className="hidden md:inline-block"
          name="History"
          icon="history"
        />
        <NavLink href="#skill" name="Skil" icon="psychology" />
        <NavLink href="#work" name="Work" icon="work" />
        <NavLink href="./blog" name="Blog" icon="article" />
      </ul>
    </nav>
  );
}
