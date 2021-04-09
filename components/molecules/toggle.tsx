import React from "react";

export default function Toggle(
  { open, onClick }: { open: boolean; onClick?(e: React.MouseEvent): void },
) {
  return (
    <div className="fixed z-10 right-10 bottom-20" onClick={onClick}>
      {!open && <span className="animate-pulse text-4xl">丸</span>}
      {open && <span className="animate-pulse text-4xl">罰</span>}
    </div>
  );
}
