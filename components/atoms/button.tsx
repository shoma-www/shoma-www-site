import React, { PropsWithChildren } from "react";

export default function Button(
  { children, className, href }: PropsWithChildren<
    { className?: string; href?: string }
  >,
) {
  return (
    <div className={`text-center ${className}`}>
      <a
        className="py-2 px-8 rounded-full border-2 transform hover:bg-gray-50 bg-white"
        href={href}
      >
        {children}
      </a>
    </div>
  );
}
