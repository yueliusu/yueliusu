import { Fragment } from "react";
import avatarMark from "../assets/avatar-mark.png";
import { intro } from "../content";
import {
  DraggableSticker,
  HandUnderline,
  MarkerHighlight,
  Monogram,
} from "./desk";

export function Intro() {
  return (
    <header className="intro-block" id="home">
      <div className="author-line">
        <DraggableSticker className="shrink-0">
          <img
            src={avatarMark}
            alt={intro.name}
            width={48}
            height={48}
            draggable={false}
            className="size-12"
          />
        </DraggableSticker>
        <span className="author-signature">{intro.signature}</span>
        <Monogram>{intro.initial}</Monogram>
      </div>
      <h1 className="intro-title">
        你好，我是 <HandUnderline color="red">{intro.name}</HandUnderline>。
      </h1>
      <p className="intro-lead">
        {intro.lines[0].split(intro.highlight).map((part, index) => (
          <Fragment key={index}>
            {index > 0 && <MarkerHighlight>{intro.highlight}</MarkerHighlight>}
            {part}
          </Fragment>
        ))}
      </p>
      <p className="intro-description">{intro.lines[1]}</p>
      <div className="intro-actions">
        <a className="paper-button primary" href="#featured">
          从精选开始 <span aria-hidden="true">↓</span>
        </a>
        <a className="text-action" href="#topics">
          按专题阅读 <span aria-hidden="true">↓</span>
        </a>
      </div>
      <p className="reading-note">{intro.readingNote}</p>
    </header>
  );
}
