import React, { PropsWithChildren } from "react";
import Balloon from "../atoms/balloon.tsx";
import Point from "../atoms/point.tsx";

export default function HistoryBranch(
  { date, children }: PropsWithChildren<{ date: string }>,
) {
  return (
    <li>
      <Point className="top-12 right-7" />
      <Balloon>
        <div className="font-semibold">{date}</div>
        <p className="text-base break-words">
          {children}
        </p>
      </Balloon>
    </li>
  );
}
