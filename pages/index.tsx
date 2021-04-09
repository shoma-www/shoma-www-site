import React, { useState } from "react";
import Navbar from "../components/organisms/navbar.tsx";
import Section from "../components/molecules/section.tsx";
import Toggle from "../components/organisms/toggle.tsx";

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

      <Toggle open={open} onClick={() => setOpen(!open)} />
      <Navbar open={open} />

      <Section id="about" title="About">
        <div>
          shoma-wwwの説明 githubのリポジトリのページとか
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

      <footer className="text-center bg-gray-50">
        © 2021 shoma-www
      </footer>
    </>
  );
}
