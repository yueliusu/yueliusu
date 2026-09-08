import { useRef, useState } from "react";
import {
  articles,
  categories,
  contentReviewedAt,
  experience,
  topics,
  type Article,
} from "../content";
import {
  archiveHash,
  displayDate,
  filterArticles,
  readFilters,
  type ArticleFilters,
} from "../lib/articles";
import { DateTag, SectionLabel } from "./desk";

const allFilters: ArticleFilters = { query: "", category: "all", year: "all" };
const sortedArticles = filterArticles(articles, allFilters);

export function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="external-arrow"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12 12 4M4 4h8v8" />
    </svg>
  );
}

function ArticleRow({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <li className={`reading-row group ${featured ? "is-featured" : ""}`}>
      <div className="reading-copy">
        <h3>
          <a href={article.url} target="_blank" rel="noreferrer">
            {article.title}
          </a>
        </h3>
        <p>{featured ? article.featuredReason : article.summary}</p>
        <div className="article-meta">
          <span>
            {
              categories.find((category) => category.id === article.category)
                ?.label
            }
          </span>
          <span aria-hidden="true">·</span>
          <span className="whitespace-nowrap">
            CSDN 原文
            <ExternalArrow />
          </span>
        </div>
      </div>
      <time className="article-date" dateTime={article.publishedAt}>
        <DateTag tilt="-rotate-2">{displayDate(article.publishedAt)}</DateTag>
      </time>
    </li>
  );
}

export function FeaturedArticles() {
  return (
    <section
      id="featured"
      className="page-section"
      aria-labelledby="featured-title"
    >
      <SectionLabel id="featured-title">精选必读</SectionLabel>
      <p className="section-intro">第一次来，可以从这几篇开始。</p>
      <ul className="reading-list">
        {articles
          .filter((article) => article.featuredReason)
          .map((article) => (
            <ArticleRow key={article.id} article={article} featured />
          ))}
      </ul>
    </section>
  );
}

export function TopicGuide() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <section
      id="topics"
      className="page-section"
      aria-labelledby="topics-title"
    >
      <SectionLabel id="topics-title">按专题阅读</SectionLabel>
      <p className="section-intro">选一个感兴趣的方向，顺着线索读下去。</p>
      <div className="topic-list">
        {topics.map((topic) => {
          const open = openId === topic.id;
          const readingPath = topic.articleIds
            .map((id) => articles.find((article) => article.id === id))
            .filter((article): article is Article => Boolean(article));
          return (
            <div
              key={topic.id}
              className={`topic-row ${open ? "is-open" : ""}`}
            >
              <h3>
                <button
                  type="button"
                  className="topic-toggle"
                  aria-expanded={open}
                  aria-controls={`topic-${topic.id}`}
                  onClick={() => setOpenId(open ? null : topic.id)}
                >
                  <span>
                    <span className="topic-name">{topic.title}</span>
                    <span className="topic-description">
                      {topic.description}
                    </span>
                  </span>
                  <span className="topic-toggle-label">
                    {open ? "收起" : "阅读路线"}
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    >
                      <path d="m4 6 4 4 4-4" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id={`topic-${topic.id}`}
                className={`fold ${open ? "open" : ""}`}
                inert={!open}
              >
                <div>
                  <div className="topic-content">
                    <p className="topic-audience">{topic.audience}</p>
                    <ol className="reading-path">
                      {readingPath.map((article) => (
                        <li key={article.id}>
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {article.title}
                            <ExternalArrow />
                          </a>
                        </li>
                      ))}
                    </ol>
                    {topic.columns.length > 0 && (
                      <div className="column-links">
                        <span>继续读专栏</span>
                        {topic.columns.map((column) => (
                          <a
                            key={column.url}
                            href={column.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {column.title}
                            <ExternalArrow />
                          </a>
                        ))}
                      </div>
                    )}
                    <div className="topic-footer">
                      <span>以上链接在 CSDN 打开，访问条件以原文为准。</span>
                      <a
                        className="text-action"
                        href={archiveHash({
                          ...allFilters,
                          category: topic.id,
                        })}
                      >
                        浏览本主题文章 <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function LatestArticles() {
  return (
    <section className="page-section" aria-labelledby="latest-title">
      <div className="section-heading">
        <SectionLabel id="latest-title">最近文章</SectionLabel>
        <a className="text-action" href="#articles">
          全部 {articles.length} 篇 <span aria-hidden="true">→</span>
        </a>
      </div>
      <p className="section-intro">
        本站整理于 {displayDate(contentReviewedAt)}，按文章发布时间排序。
      </p>
      <ul className="reading-list">
        {sortedArticles.slice(0, 6).map((article) => (
          <ArticleRow key={article.id} article={article} />
        ))}
      </ul>
      <a className="archive-link" href="#articles">
        搜索文章、按主题或年份查找 <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}

function changeFilters(filters: ArticleFilters, replace = false) {
  const nextHash = archiveHash(filters);
  if (replace) {
    window.history.replaceState(null, "", nextHash);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  } else {
    window.location.hash = nextHash;
  }
}

export function ArticleDirectory({ hash }: { hash: string }) {
  const filters = readFilters(hash);
  const matches = filterArticles(articles, filters);
  const years = [
    ...new Set(articles.map((article) => article.publishedAt.slice(0, 4))),
  ]
    .sort()
    .reverse();
  const inputRef = useRef<HTMLInputElement>(null);
  const hasFilters = Boolean(
    filters.query || filters.category !== "all" || filters.year !== "all",
  );
  const clearFilters = () => {
    changeFilters(allFilters, true);
    inputRef.current?.focus();
  };
  return (
    <section id="articles" className="article-directory">
      <a className="text-action back-link" href="#home">
        <span aria-hidden="true">←</span> 回到首页
      </a>
      <h1 tabIndex={-1}>文章目录</h1>
      <p className="directory-intro">
        找到此刻需要的那一篇。这里收录 {articles.length} 篇文章，全文均在 CSDN
        新标签页打开。
      </p>
      <div className="archive-controls">
        <label className="search-label" htmlFor="article-search">
          搜索文章
        </label>
        <div className="search-box">
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="8.5" cy="8.5" r="5.5" />
            <path d="m13 13 4 4" />
          </svg>
          <input
            ref={inputRef}
            id="article-search"
            type="search"
            value={filters.query}
            placeholder="搜索标题、关键词，如 Python、Agent…"
            onChange={(event) =>
              changeFilters({ ...filters, query: event.target.value }, true)
            }
          />
        </div>
        <fieldset className="category-options">
          <legend className="sr-only">文章主题</legend>
          {[{ id: "all", label: "全部主题" }, ...categories].map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={filters.category === category.id}
              onClick={() =>
                changeFilters({
                  ...filters,
                  category: category.id as ArticleFilters["category"],
                })
              }
            >
              {category.label}
            </button>
          ))}
        </fieldset>
        <div className="archive-toolbar">
          <label htmlFor="article-year">
            发布年份
            <select
              id="article-year"
              value={filters.year}
              onChange={(event) =>
                changeFilters({ ...filters, year: event.target.value })
              }
            >
              <option value="all">全部年份</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year} 年
                </option>
              ))}
            </select>
          </label>
          {hasFilters && (
            <button
              className="text-action"
              type="button"
              onClick={clearFilters}
            >
              清空筛选
            </button>
          )}
        </div>
      </div>
      <h2 className="sr-only">文章查找结果</h2>
      <div className="result-heading">
        <p role="status" aria-live="polite">
          {hasFilters
            ? `找到 ${matches.length} 篇文章`
            : `共 ${matches.length} 篇文章`}
        </p>
        <span>由新到旧</span>
      </div>
      {matches.length > 0 ? (
        <ul className="reading-list">
          {matches.map((article) => (
            <ArticleRow key={article.id} article={article} />
          ))}
        </ul>
      ) : (
        <div className="empty-results">
          <h2>还没有找到匹配的文章</h2>
          <p>试试更短的关键词，或清空主题和年份筛选。</p>
          <button className="paper-button" type="button" onClick={clearFilters}>
            查看全部文章
          </button>
        </div>
      )}
      <p className="catalog-note">
        这里只收录已整理的文章。
        <a
          href="https://blog.csdn.net/qq_51646682"
          target="_blank"
          rel="noreferrer"
        >
          前往 CSDN 查看完整博客
          <ExternalArrow />
        </a>
      </p>
    </section>
  );
}

export function AboutAuthor() {
  return (
    <section
      id="about"
      className="page-section about-section"
      aria-labelledby="about-title"
    >
      <SectionLabel id="about-title">写作之外，也是探索</SectionLabel>
      <p>
        从编程入门，到 AI
        应用与计算机科普，希望把每一次学习和实践，变成下一位读者用得上的线索。
      </p>
      <ul className="experience-list">
        {experience.map((entry) => (
          <li key={entry.label}>
            <span>{entry.label}</span>
            <span>{entry.date}</span>
          </li>
        ))}
      </ul>
      <a
        className="text-action"
        href="https://github.com/yueliusu"
        target="_blank"
        rel="noreferrer"
      >
        在 GitHub 看我的项目与代码
        <ExternalArrow />
      </a>
    </section>
  );
}
