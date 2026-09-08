import { useEffect, useSyncExternalStore } from "react";
import { Intro } from "./components/intro";
import {
  ArticleDirectory,
  AboutAuthor,
  FeaturedArticles,
  LatestArticles,
  TopicGuide,
} from "./components/sections";
import { ContactSection } from "./components/contact";

function subscribeToHash(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

export default function App() {
  const hash = useSyncExternalStore(
    subscribeToHash,
    () => window.location.hash,
    () => "",
  );
  const isDirectory = hash.split("?")[0] === "#articles";
  useEffect(() => {
    document.title = isDirectory
      ? "文章目录 — Code_流苏"
      : "Code_流苏 — 技术与生活的阅读手记";
    if (isDirectory) {
      window.scrollTo({ top: 0 });
      document
        .querySelector<HTMLElement>("main h1")
        ?.focus({ preventScroll: true });
    }
  }, [isDirectory]);

  useEffect(() => {
    if (isDirectory || !hash) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash, isDirectory]);

  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById("main-content");
          main?.focus();
          main?.scrollIntoView();
        }}
      >
        跳到阅读内容
      </a>
      <div className="site-shell">
        <nav className="site-nav" aria-label="主导航">
          <a className="site-name" href="#home" aria-label="Code_流苏 首页">
            Code_流苏
          </a>
          <div>
            <a href="#featured">精选</a>
            <a href="#topics">专题</a>
            <a href="#articles" aria-current={isDirectory ? "page" : undefined}>
              文章目录
            </a>
            <a href="#contact">联系</a>
          </div>
        </nav>
        <main id="main-content" tabIndex={-1}>
          {isDirectory ? (
            <ArticleDirectory hash={hash} />
          ) : (
            <>
              <Intro />
              <FeaturedArticles />
              <TopicGuide />
              <LatestArticles />
              <AboutAuthor />
            </>
          )}
          <ContactSection />
        </main>
        <footer className="site-footer">
          <span>Code_流苏 · 认真写下，慢慢积累。</span>
          <a href="#home">
            回到首页 <span aria-hidden="true">↑</span>
          </a>
        </footer>
      </div>
    </>
  );
}
