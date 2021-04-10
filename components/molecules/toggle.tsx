import React from "react";

export default function Toggle(
  { open, onClick, className }: {
    open: boolean;
    onClick?(e: React.MouseEvent): void;
    className?: string;
  },
) {
  return (
    <div
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      {!open && <span className="animate-pulse text-4xl">丸</span>}
      {open && <span className="animate-pulse text-4xl">罰</span>}
    </div>
  );
}
