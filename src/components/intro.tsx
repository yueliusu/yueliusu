import type { ReactNode } from "react";
import avatarMark from "../assets/avatar-mark.png";
import { intro } from "../content";
import {
  DashedFrame,
  DraggableSticker,
  HandUnderline,
  MarkerHighlight,
  Monogram,
  Pushpin,
} from "./desk";

/* Phrase-level accents for the intro copy. Each phrase gets a different
   hand-drawn flourish — edit the list (or colors) to taste. */
const ACCENTS: { phrase: string; wrap: (s: string) => ReactNode }[] = [
  {
    phrase: intro.name,
    wrap: (s) => (
      <HandUnderline color="red" note="对，就是我">
        {s}
      </HandUnderline>
    ),
  },
  {
    phrase: "AI apps",
    wrap: (s) => (
      <HandUnderline color="green" note="理论与实践并重">
        {s}
      </HandUnderline>
    ),
  },
  {
    phrase: "tool推荐",
    wrap: (s) => <MarkerHighlight note="亲测好用">{s}</MarkerHighlight>,
  },
  {
    phrase: "粉丝社群",
    wrap: (s) => (
      <HandUnderline color="blue" note="★ 欢迎加入">
        {s}
      </HandUnderline>
    ),
  },
];

function decorateIntro(line: string): ReactNode {
  const pattern = ACCENTS.map((a) =>
    a.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  ).join("|");
  return line.split(new RegExp(`(${pattern})`)).map((part, i) => {
    const accent = ACCENTS.find((a) => a.phrase === part);
    return <span key={i}>{accent ? accent.wrap(part) : part}</span>;
  });
}

/* The header monogram + draggable avatar, the intro paragraphs with their
   marker accents, and the pinned blue status note. */
export function Intro() {
  return (
    <>
      <header
        className="rise flex items-start justify-between gap-4"
        style={{ animationDelay: "0ms" }}
      >
        <DraggableSticker className="shrink-0">
          <span className="peel-hint block">
            <img
              src={avatarMark}
              alt={intro.name}
              width={44}
              height={44}
              draggable={false}
              className="size-11"
            />
          </span>
        </DraggableSticker>
        <Monogram>{intro.initial}</Monogram>
      </header>

      <div
        className="rise mt-7 space-y-3 text-[0.95rem] leading-relaxed"
        style={{ animationDelay: "90ms" }}
      >
        {intro.lines.map((line) => (
          <p key={line}>{decorateIntro(line)}</p>
        ))}
      </div>

      <aside
        className="note rise relative mt-5 -rotate-[0.6deg] px-4 py-3.5 font-mono text-[0.72rem] leading-relaxed"
        style={{
          animationDelay: "170ms",
          borderRadius: "11px 8px 12px 9px / 8px 12px 9px 11px",
        }}
      >
        <DashedFrame />
        <Pushpin />
        {intro.status} 在{" "}
        <a
          href={intro.github}
          className="font-medium underline underline-offset-2"
        >
          GitHub
        </a>{" "}
        找我，或{" "}
        <a
          href={intro.message}
          className="font-medium underline underline-offset-2"
        >
          来信
        </a>
        。
      </aside>
    </>
  );
}
