import React from "react";

export default function NavLink(
  { href, name, icon, className }: {
    href: string;
    name: string;
    icon: string;
    className?: string;
  },
) {
  return (
    <li
      className={`border-transparent border-b-2 hover:border-black ${className}`}
    >
      <a href={href} className="flex items-center" rel="prefetch">
        <span className="material-icons md-36">{icon}</span>
        <span className="hidden md:inline-block text-2xl font-medium ml-2">
          {name}
        </span>
      </a>
    </li>
  );
}
