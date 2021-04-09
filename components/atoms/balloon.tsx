import React, { ReactNode } from "react";

export default function Balloon(
  { children }: { children: ReactNode },
) {
  return (
    <div className="balloon-left">
      {children}
    </div>
  );
}
