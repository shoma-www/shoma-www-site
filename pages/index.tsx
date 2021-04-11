import React, { useState } from "react";
import Navbar from "../components/organisms/navbar.tsx";
import Section from "../components/molecules/section.tsx";
import HistoryBranch from "../components/molecules/historyBranch.tsx";
import WorkCard from "../components/molecules/workCard.tsx";

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
        className="w-full h-screen bg-gray-50 p-8 flex justify-start items-center"
      >
        <h1 id="top">
          <div className="text-6xl font-semibold">Shoma's</div>
          <div className="text-6xl font-semibold">Home</div>
        </h1>
      </header>

      <div className="max-w-3xl mx-auto mb-16">
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
            <p className="text-base break-words">
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
                    決済代行的なファクタリング的なSaaSを提供してる会社に転職する<br />
                    環境かわりすぎて？しかでてこない
                  </p>
                </HistoryBranch>
              </li>
            </ul>
          </div>
        </Section>

        <Section id="skill" title="Skill">
          <div>
            <p className="mb-4">
              使った気がする技術たち<br />
              実務に耐えられるかは未知数
            </p>
            <ul className="list-disc ml-8 break-words">
              <li>
                C# (.Net Framework), PHP(Laravel, Wordpress), Go,
                JavaScript/TypeScript(React/Nuxt.js/NestJS)
              </li>
              <li>Oracle 11g, MySQL</li>
              <li>AWS, GCP</li>
            </ul>
          </div>
        </Section>

        <Section id="work" title="Works">
          <div className="mb-4">
            個人でつくったやつ
          </div>
          <div
            className="flex flex-col md:flex-row md:justify-start md:flex-wrap"
          >
            <WorkCard
              className="w-full md:w-80 mb-8 md:mr-4"
              title="最初のサイト"
              url="https://www.shumai-engineer.com"
              github="https://github.com/shoma-www/shoma-portfolio-site"
              img="images/shumai-engineer.jpg"
            >
              <a href="https://www.gatsbyjs.com/" className="underline">
                Gatsby
              </a>とAWS Amplifyでつくった最初のポートフォリオ用のサイト。<br />
              ブログ作ろうと思ったまま、まったく更新していなかった悲しき遺産。<br />
              触ったの結構前だったので、公式サイト久しぶりに見たら劇的進化してた。
            </WorkCard>
            <WorkCard
              className="w-full md:w-80 mb-8"
              title="このサイト"
              url="https://shoma-www.dev/"
              github="https://github.com/shoma-www/shoma-www-site"
              img="images/shoma-www-site.jpg"
            >
              休職のリハビリで作っているこのサイト。<br />
              Denoの<a href="https://alephjs.org/" className="underline">
                Aleph.js
              </a>っていう素敵なフレームワークを使って作っている。<br />
              ホスティング自体は、firebase hostingで無駄にcloudbuild使ってデプロイしてる。<br />
              少しだけレスポンシブもどきになっている。<br />
              Aleph.jsは見守っていきたい気持ち。
            </WorkCard>
          </div>
        </Section>
      </div>

      <footer className="text-center bg-gray-50 py-1">
        ©2021 shoma-www
      </footer>
    </>
  );
}
