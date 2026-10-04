/**
 * Central type definitions for Jupiter Tech Academy.
 *
 * Data is kept fully serialisable (plain strings / arrays) so it can be passed
 * from Server Components into Client Components — and later swapped for a real
 * API or CMS without touching the UI layer.
 */

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type CourseCategory =
  | "Web Development"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Cloud"
  | "AI";

export type ResourceCategory =
  | "JavaScript"
  | "React"
  | "Next.js"
  | "Node.js"
  | "Python"
  | "Django"
  | "AWS"
  | "Git"
  | "Databases"
  | "AI"
  | "Web Development"
  | "Career";

export type ResourceDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type ResourceType =
  | "Article"
  | "Guide"
  | "Cheat Sheet"
  | "Checklist"
  | "Roadmap";

export type IconName =
  | "code"
  | "braces"
  | "atom"
  | "layers"
  | "server"
  | "terminal"
  | "smartphone"
  | "cloud"
  | "sparkles"
  | "database"
  | "git"
  | "rocket"
  | "target"
  | "compass"
  | "zap"
  | "refresh"
  | "book"
  | "users"
  | "route"
  | "shield";

/** A single expandable module inside a course curriculum. */
export interface CourseModule {
  title: string;
  lessons: string[];
}

export interface CourseFaq {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  /** One-line summary used on cards and in metadata. */
  description: string;
  /** Longer hero copy used on the course detail page. */
  overview: string;
  category: CourseCategory;
  level: CourseLevel;
  duration: string;
  format: string;
  icon: IconName;
  /** Short chips shown on cards. */
  topics: string[];
  /** Broader skills gained by the end of the course. */
  skills: string[];
  /** Concrete "you will be able to…" statements. */
  outcomes: string[];
  prerequisites: string[];
  /** Who the course is designed for. */
  audience: string[];
  modules: CourseModule[];
  faq: CourseFaq[];
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  /** Longer preview revealed by the "Read More" disclosure. */
  content: string;
  category: ResourceCategory;
  difficulty: ResourceDifficulty;
  readingTime: string;
  type: ResourceType;
  icon: IconName;
}

/** A single editable homepage statistic — no fabricated business claims. */
export interface Stat {
  /** Numeric headline. Rendered with a count-up animation when `isNumeric`. */
  value?: number;
  suffix?: string;
  /** Text headline used in place of a number for non-numeric stats. */
  headline?: string;
  label: string;
  isNumeric: boolean;
}

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

export interface RoadmapStep {
  step: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
