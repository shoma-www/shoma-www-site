import React from "react";

export default function NavLink(
  { href, name }: { href: string; name: string },
) {
  return (
    <li className="border-transparent border-b-2 hover:border-black">
      <a href={href} className="text-2xl font-medium">{name}</a>
    </li>
  );
}
