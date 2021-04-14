import React from "react";

export default function ShareButtons(
  { className, url }: { className?: string; url?: string },
) {
  return (
    <ul className={className}>
      <li className="inline-block">
        <a
          href={`https://b.hatena.ne.jp/entry/${url}`}
          className="hatena-bookmark-button"
          data-hatena-bookmark-layout="touch"
          data-hatena-bookmark-width="40"
          data-hatena-bookmark-height="40"
          title="このエントリーをはてなブックマークに追加"
        >
          <img
            src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
            alt="このエントリーをはてなブックマークに追加"
            width="20"
            height="20"
            className="border-none"
          />
        </a>
        <script
          type="text/javascript"
          src="https://b.st-hatena.com/js/bookmark_button.js"
          async={true}
        />
      </li>
    </ul>
  );
}
