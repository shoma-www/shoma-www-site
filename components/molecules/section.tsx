import React, { PropsWithChildren } from "react";

export default function Section(
  { id, title, children }: PropsWithChildren<{ id: string; title: string }>,
) {
  return (
    <section id={id} className="w-full px-4 pt-16">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <div className="text-xl px-4 ml-2 border-l-2 border-gray-theme">
        {children}
      </div>
    </section>
  );
}
