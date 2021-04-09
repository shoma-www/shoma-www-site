import React, { ReactNode } from "react";

export default function Section(
  { id, title, children }: { id: string; title: string; children: ReactNode },
) {
  return (
    <section id={id} className="w-screen p-8 mb-6">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <div className="text-xl">
        {children}
      </div>
    </section>
  );
}
