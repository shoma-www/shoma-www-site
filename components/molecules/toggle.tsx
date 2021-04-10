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
      {!open && <span className="animate-pulse text-4xl">開</span>}
      {open && <span className="animate-pulse text-4xl">閉</span>}
    </div>
  );
}
