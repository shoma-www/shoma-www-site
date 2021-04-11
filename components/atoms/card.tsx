import React, { PropsWithChildren } from "react";

export default function Card(
  { children, className }: PropsWithChildren<{ className?: string }>,
) {
  return (
    <div className={`p-4 rounded-md border-2 border-gray-theme ${className}`}>
      {children}
    </div>
  );
}
