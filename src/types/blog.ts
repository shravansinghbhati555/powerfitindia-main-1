export type BlogCategory =
  | "Weight Loss"
  | "Strength Training"
  | "CrossFit"
  | "Yoga"
  | "Nutrition"
  | "Supplements"
  | "Home Workout"
  | "Motivation"
  | "Success Stories"
  | "Gym Setup"
  | "Franchise"
  | "Recovery"
  | "HIIT";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Weight Loss",
  "Strength Training",
  "CrossFit",
  "Yoga",
  "Nutrition",
  "Supplements",
  "Home Workout",
  "Motivation",
  "Success Stories",
  "Gym Setup",
  "Franchise",
  "Recovery",
  "HIIT",
];

export interface BlogArticle {
  id: string;
  handle: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  publishedAt: string;
  author: { name: string };
  image: { url: string; altText: string | null } | null;
  tags: string[];
  blog: { handle: string; title: string };
  readingTime: number;
}

export interface BlogPageResponse {
  articles: BlogArticle[];
  hasNextPage: boolean;
  endCursor: string | null;
}
