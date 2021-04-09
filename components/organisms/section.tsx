import React, { ReactNode } from "react";

export default function Section(
  { id, title, children }: { id: string; title: string; children: ReactNode },
) {
  return (
    <section id={id} className="w-screen bg-gray-50 p-8">
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </section>
  );
}
