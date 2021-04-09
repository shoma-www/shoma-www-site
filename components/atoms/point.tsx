import React from "react";

export default function Point({ className }: { className: string }) {
  return (
    <span
      className={`relative block rounded-full h-8 w-8 border-8 border-gray-theme bg-white ${className}`}
    />
  );
}
