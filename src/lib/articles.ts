import type { Article, CategoryId } from "../content";

export type ArticleFilters = {
  query: string;
  category: CategoryId | "all";
  year: string;
};

const categoryIds = ["ai", "coding", "computing", "tools"];

export function readFilters(hash: string): ArticleFilters {
  const queryStart = hash.indexOf("?");
  const params = new URLSearchParams(
    queryStart < 0 ? "" : hash.slice(queryStart + 1),
  );
  const category = params.get("category") ?? "all";
  const year = params.get("year") ?? "all";
  return {
    query: params.get("q") ?? "",
    category: categoryIds.includes(category) ? (category as CategoryId) : "all",
    year: /^\d{4}$/.test(year) ? year : "all",
  };
}

export function archiveHash(filters: ArticleFilters): string {
  const params = new URLSearchParams();
  if (filters.query) params.set("q", filters.query);
  if (filters.category !== "all") params.set("category", filters.category);
  if (filters.year !== "all") params.set("year", filters.year);
  return `#articles${params.size ? `?${params}` : ""}`;
}

export function filterArticles(items: Article[], filters: ArticleFilters) {
  const words = filters.query
    .normalize("NFKC")
    .trim()
    .toLocaleLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  return items
    .filter((item) => {
      const searchable = [item.title, item.summary, ...item.tags]
        .join(" ")
        .normalize("NFKC")
        .toLocaleLowerCase();
      return (
        (filters.category === "all" || item.category === filters.category) &&
        (filters.year === "all" || item.publishedAt.startsWith(filters.year)) &&
        words.every((word) => searchable.includes(word))
      );
    })
    .toSorted((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function displayDate(date: string) {
  return date.replaceAll("-", ".");
}
