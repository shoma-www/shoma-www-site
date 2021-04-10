import React from "react";
import HistoryBranch from "../molecules/historyBranch.tsx";

export default function History() {
  return (
    <ul className="border-l-8 border-gray-theme ml-12 p-2">
      <li>
        <HistoryBranch date="2021/4/1">
          <p className="break-words">
            hogaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssaaaaae
          </p>
        </HistoryBranch>
      </li>
      <li>
        <HistoryBranch date="2020/9/1">
          <div>hoge</div>
          <div>hoge</div>
          <div>hoge</div>
          <div>hoge</div>
        </HistoryBranch>
      </li>
      <li>
        <HistoryBranch date="2020/3/1">
          <div>hoge</div>
          <div>hoge</div>
          <div>hoge</div>
          <div>hoge</div>
        </HistoryBranch>
      </li>
    </ul>
  );
}
