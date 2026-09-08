import assert from "node:assert/strict";
import test from "node:test";
import { articles, topics, categories } from "../src/content.ts";
import {
  archiveHash,
  filterArticles,
  readFilters,
} from "../src/lib/articles.ts";

const clear = { query: "", category: "all", year: "all" };

test("search combines normalized keywords with category and year", () => {
  const records = [
    {
      id: "match",
      title: "Python 入门",
      summary: "配置开发环境",
      tags: ["VSCode"],
      publishedAt: "2024-12",
      category: "coding",
    },
    {
      id: "year",
      title: "Python 入门",
      summary: "配置开发环境",
      tags: ["VSCode"],
      publishedAt: "2025-12",
      category: "coding",
    },
    {
      id: "category",
      title: "Python 入门",
      summary: "配置开发环境",
      tags: ["VSCode"],
      publishedAt: "2024-12",
      category: "tools",
    },
  ];
  assert.deepEqual(
    filterArticles(records, {
      query: "  ＰＹＴＨＯＮ   环境 vscode ",
      category: "coding",
      year: "2024",
    }).map((article) => article.id),
    ["match"],
  );
  assert.equal(
    filterArticles(records, { ...clear, query: "不存在的内容" }).length,
    0,
  );
});

test("shareable filters round-trip Chinese text and reserved URL characters", () => {
  const filters = {
    query: "C++ 中文 & Agent? #基础",
    category: "ai",
    year: "2026",
  };
  assert.deepEqual(readFilters(archiveHash(filters)), filters);
  assert.deepEqual(readFilters("#articles?category=unknown&year=nope"), clear);
  assert.equal(readFilters("#articles?q=why?now").query, "why?now");
});

test("latest order handles month precision without mutating source", () => {
  const records = [
    {
      id: "old",
      title: "旧文",
      summary: "",
      tags: [],
      category: "ai",
      publishedAt: "2024-12",
    },
    {
      id: "latest",
      title: "新文",
      summary: "",
      tags: [],
      category: "ai",
      publishedAt: "2026-08-13",
    },
    {
      id: "month",
      title: "月度",
      summary: "",
      tags: [],
      category: "ai",
      publishedAt: "2026-05",
    },
  ];
  assert.deepEqual(
    filterArticles(records, clear).map((article) => article.id),
    ["latest", "month", "old"],
  );
  assert.equal(records[0].id, "old");
});

test("catalog keeps unique IDs and valid article metadata", () => {
  assert.equal(
    new Set(articles.map((article) => article.id)).size,
    articles.length,
  );
  assert.equal(
    new Set(articles.map((article) => article.url)).size,
    articles.length,
  );
  for (const article of articles) {
    assert.ok(article.title && article.summary && article.tags.length);
    assert.match(article.publishedAt, /^\d{4}-\d{2}(?:-\d{2})?$/);
    assert.ok(categories.some((category) => category.id === article.category));
    assert.ok(new URL(article.url).hostname.endsWith(".csdn.net"));
  }
  assert.equal(articles.filter((article) => article.featuredReason).length, 3);
});

test("every reading path resolves to articles in its topic", () => {
  assert.equal(new Set(topics.map((topic) => topic.id)).size, 4);
  for (const topic of topics) {
    assert.ok(
      topic.articleIds.length >= 2,
      `${topic.title} needs a reading sequence`,
    );
    for (const id of topic.articleIds) {
      const article = articles.find((item) => item.id === id);
      assert.ok(article, `missing article ${id}`);
      assert.equal(article.category, topic.id);
    }
  }
});
