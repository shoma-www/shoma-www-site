import React, { PropsWithChildren } from "react";

export default function Card(
  { children, className, key }: PropsWithChildren<
    { className?: string; key?: string }
  >,
) {
  return (
    <div
      className={`p-4 rounded-md border-2 border-gray-theme ${className}`}
      key={key}
    >
      {children}
    </div>
  );
}
