import React, { useState } from "react";
import Navbar from "../components/organisms/navbar.tsx";
import Section from "../components/molecules/section.tsx";
import History from "../components/organisms/history.tsx";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <head>
        <title>Shoma's Home</title>
      </head>

      <header
        className="w-screen h-screen bg-gray-50 p-8 flex justify-start items-center"
      >
        <h1 id="top">
          <div className="text-6xl font-semibold">Shoma's</div>
          <div className="text-6xl font-semibold">Home</div>
        </h1>
      </header>

      <Navbar open={open} onClick={() => setOpen(!open)} />

      <div className="max-w-3xl mx-auto">
        <Section id="about" title="About">
          <div>
            <div className="mb-2">
              <span className="mr-2">name:</span>
              <span className="font-bold">shoma-www</span>
            </div>
            <p className="mb-4">
              労働からはじめたバックエンドエンジニアもどき。<br />
              ２日前のことはだいたい忘れてます。
            </p>
          </div>
        </Section>

        <Section id="history" title="History">
          <div>
            <p className="mb-4">
              いきてきたヒストリー
            </p>
            <History />
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
