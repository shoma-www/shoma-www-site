import React from "react";

export default function NavLink(
  { href, name, icon }: {
    href: string;
    name: string;
    icon: string;
  },
) {
  return (
    <li className="border-transparent border-b-2 hover:border-black">
      <a href={href}>
        <span className="material-icons">{icon}</span>
        <span className="hidden text-2xl font-medium">{name}</span>
      </a>
    </li>
  );
}
