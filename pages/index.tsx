import React, { useState } from "react";
import Navbar from "../components/organisms/navbar.tsx";
import Section from "../components/molecules/section.tsx";
import HistoryBranch from "../components/molecules/historyBranch.tsx";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <head>
        <title>Shoma's Home</title>
      </head>

      <Navbar open={open} onClick={() => setOpen(!open)} />

      <header
        id="top"
        className="w-screen h-screen bg-gray-50 p-8 flex justify-start items-center"
      >
        <h1 id="top">
          <div className="text-6xl font-semibold">Shoma's</div>
          <div className="text-6xl font-semibold">Home</div>
        </h1>
      </header>

      <div className="max-w-3xl mx-auto">
        <Section id="about" title="About">
          <div>
            <div>
              <span className="mr-2">name:</span>
              <span className="font-bold">shoma-www</span>
            </div>
            <ul className="mb-2">
              <li className="inline-block">
                <a href="https://github.com/shoma-www">
                  <img src="images/i-github.svg" />
                </a>
              </li>
            </ul>
            <p className="break-words">
              労働からプログラミングはじめたバックエンドエンジニアもどき。<br />
              なにができるかはよくわからない。<br />
              埼玉県在住。２日前のことはだいたい忘れてます。<br />
              田舎でひっそり生きていける程度に稼ぎたい。
            </p>
          </div>
        </Section>

        <Section id="history" title="History">
          <div>
            <p className="mb-4">
              時代は巡るよいつまでも
            </p>
            <ul className="border-l-8 border-gray-theme ml-12 p-2">
              <li>
                <HistoryBranch date="1993年10月">
                  <p className="break-words">
                    関西のどこかで生まれる
                  </p>
                </HistoryBranch>
              </li>
              <li>
                <HistoryBranch date="2016年3月">
                  <p className="break-words">
                    <b>Kwansei</b>学院大学 理工学部をぎりぎり卒業する
                  </p>
                </HistoryBranch>
              </li>
              <li>
                <HistoryBranch date="2016年4月">
                  <p className="break-words">
                    一念発起（他に採用されなかった）で東京の会社に就職する<br />
                    どっかの証券の勘定系のシステムと格闘する<br />
                    コボる？なにそれ？美味しいの？
                  </p>
                </HistoryBranch>
              </li>
              <li>
                <HistoryBranch date="2019年7月">
                  <p className="break-words">
                    Excelと密結合してたので、離別することを決意<br />
                    グループ会社の暗号資産取引的なシステムを扱ってる会社に転職する<br />
                    暗号資産取引だからといって、特に暗号資産に関わるところはあんまり触らなかった<br />
                    LiquidのeKYCシステムはすごいと思った（小並感）
                  </p>
                </HistoryBranch>
              </li>
              <li>
                <HistoryBranch date="2020年8月">
                  <p className="break-words">
                    すごい不満があったわけではないけど、事業会社っぽいとこにいけそうだったので、またもや転職<br />
                    ジョブホッパーの道を歩んでる気がする<br />
                    決済代行的なファクタリング的なSaaSを提供してる会社に今いる、と思う
                  </p>
                </HistoryBranch>
              </li>
            </ul>
          </div>
        </Section>

        <Section id="skill" title="Skill">
          <div>
            スキルの説明
          </div>
        </Section>

        <Section id="work" title="Work">
          <div>
            つくったやつの説明 ないけど
          </div>
        </Section>
      </div>

      <footer className="text-center bg-gray-50 py-1">
        ©2021 shoma-www
      </footer>
    </>
  );
}
