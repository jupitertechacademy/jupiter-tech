import type { Feature, NavLink, RoadmapStep, Stat } from "@/types";

/**
 * Site-wide configuration.
 *
 * Everything here is editable placeholder content — replace the contact
 * details, social URLs and legal copy with real information before launch.
 */

export const site = {
  name: "Jupiter Tech Academy",
  shortName: "Jupiter",
  tagline: "Learn. Build. Grow.",
  description:
    "Jupiter Tech Academy helps learners build practical, career-focused technology skills across web development, mobile, Python, cloud and AI.",
  /** Replace with the production domain before going live. */
  url: "https://jupiter-tech-academy.example.com",
  locale: "en_US",
  email: "hello@example.com", // EDITABLE: real contact address
  phone: "+1 (000) 000-0000", // EDITABLE: real phone number
  location: "Remote-first · Worldwide", // EDITABLE: real location
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/#contact" },
];

/**
 * Placeholder social profiles.
 * EDITABLE: swap `href` for the academy's real profile URLs before launch.
 */
export const socialLinks: NavLink[] = [
  { label: "X (Twitter)", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
];

/**
 * Homepage statistics.
 *
 * These describe the content shipped with this site rather than business
 * results (no student counts, ratings or placement claims are made).
 * EDITABLE: update as the course library grows.
 */
export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Technology courses", isNumeric: true },
  { value: 100, suffix: "+", label: "Learning resources", isNumeric: true },
  {
    headline: "Project-based",
    label: "Learning built around real work",
    isNumeric: false,
  },
  {
    headline: "Career-focused",
    label: "Skills mapped to modern roles",
    isNumeric: false,
  },
];

export const features: Feature[] = [
  {
    icon: "rocket",
    title: "Practical Learning",
    description:
      "Every topic is taught through working code, so you learn by building rather than memorising theory.",
  },
  {
    icon: "zap",
    title: "Modern Technologies",
    description:
      "Focused on the tools teams actually use today — React, Next.js, Node, Python, cloud and AI.",
  },
  {
    icon: "layers",
    title: "Project Based",
    description:
      "Courses are structured around real projects you can add to a portfolio and talk about in interviews.",
  },
  {
    icon: "compass",
    title: "Beginner Friendly",
    description:
      "Clear starting points, plain explanations and no assumed knowledge for newcomers to programming.",
  },
  {
    icon: "target",
    title: "Career Focused",
    description:
      "Skills are mapped to the roles and responsibilities employers list in modern technical job posts.",
  },
  {
    icon: "refresh",
    title: "Continuously Updated",
    description:
      "Curriculum content is reviewed regularly so it stays aligned with current frameworks and practices.",
  },
];

export const roadmapSteps: RoadmapStep[] = [
  {
    step: "01",
    title: "Beginner",
    description: "Set up your environment and understand how the web fits together.",
  },
  {
    step: "02",
    title: "Fundamentals",
    description: "Master HTML, CSS, JavaScript and the core programming mindset.",
  },
  {
    step: "03",
    title: "Development",
    description: "Move into React, Next.js, Node.js, Python or mobile development.",
  },
  {
    step: "04",
    title: "Projects",
    description: "Combine your skills into complete, shippable applications.",
  },
  {
    step: "05",
    title: "Advanced Skills",
    description: "Add testing, databases, cloud deployment and AI-powered features.",
  },
  {
    step: "06",
    title: "Career",
    description: "Present your portfolio, prepare for interviews and keep growing.",
  },
];

export const popularTopics: string[] = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Django",
  "MongoDB",
  "SQL",
  "AWS",
  "Git",
  "AI",
];

export const footerNavigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/#contact" },
];

export const footerResources: NavLink[] = [
  { label: "Resource hub", href: "/resources" },
  { label: "JavaScript", href: "/resources?category=JavaScript" },
  { label: "React", href: "/resources?category=React" },
  { label: "Python", href: "/resources?category=Python" },
  { label: "Career", href: "/resources?category=Career" },
];
