import type { Resource } from "@/types";

/**
 * Resource hub content.
 *
 * Static local data — deliberately no CMS or backend. Cards link internally
 * only: "Read More" expands the preview in place, so no resource detail route
 * is required.
 */
export const resources: Resource[] = [
  {
    id: "r-001",
    slug: "javascript-array-methods-cheatsheet",
    title: "JavaScript Array Methods Cheat Sheet",
    description:
      "Map, filter, reduce, find and friends — with a one-line example of when each one is the right tool.",
    content:
      "Array methods are the most frequently used tools in everyday JavaScript. This sheet groups them by intent: transforming data, narrowing it down, locating items and combining values. Each entry shows a short example plus the common mistake to avoid, so you can check the right approach without breaking your flow.",
    category: "JavaScript",
    difficulty: "Beginner",
    readingTime: "6 min",
    type: "Cheat Sheet",
    icon: "braces",
  },
  {
    id: "r-002",
    slug: "javascript-async-await-guide",
    title: "A Practical Guide to Async / Await",
    description:
      "Understand promises, the event loop and how to sequence or parallelise work without deadlocks.",
    content:
      "Asynchronous code is where most beginners lose time. This guide walks through promises first, then async/await syntax, then the two patterns you will use constantly: awaiting in sequence when order matters, and running with Promise.all when it does not. It also covers try/catch placement and the classic mistake of accidentally serialising independent requests.",
    category: "JavaScript",
    difficulty: "Intermediate",
    readingTime: "9 min",
    type: "Guide",
    icon: "zap",
  },
  {
    id: "r-003",
    slug: "javascript-closures-explained",
    title: "Closures Explained With Real Examples",
    description:
      "Why functions remember where they were created, and how that powers hooks, factories and counters.",
    content:
      "A closure is simply a function that keeps access to the scope it was created in. Once that clicks, several confusing JavaScript behaviours become obvious. This article builds the idea from a small counter example, then shows the same pattern appearing in event handlers, module patterns and React hooks.",
    category: "JavaScript",
    difficulty: "Intermediate",
    readingTime: "7 min",
    type: "Article",
    icon: "book",
  },
  {
    id: "r-004",
    slug: "react-component-patterns",
    title: "React Component Patterns That Scale",
    description:
      "Composition, container/presentational splits and when to reach for a custom hook.",
    content:
      "Small React apps can survive almost any structure; larger ones cannot. This piece covers the patterns that keep components readable as a codebase grows: composing children instead of adding prop flags, separating data loading from presentation, extracting repeated logic into custom hooks, and knowing the point where a state management library becomes worth the cost.",
    category: "React",
    difficulty: "Intermediate",
    readingTime: "10 min",
    type: "Guide",
    icon: "atom",
  },
  {
    id: "r-005",
    slug: "react-useeffect-common-mistakes",
    title: "Common useEffect Mistakes",
    description:
      "Dependency arrays, stale closures and the effects you probably should not write at all.",
    content:
      "Most useEffect bugs come from one of three places: a missing dependency, a stale value captured in a closure, or an effect that is really just derived state. This article works through each case with a before/after example and explains the rule of thumb for deciding whether you need an effect at all.",
    category: "React",
    difficulty: "Intermediate",
    readingTime: "8 min",
    type: "Article",
    icon: "refresh",
  },
  {
    id: "r-006",
    slug: "react-state-management-options",
    title: "Choosing a React State Management Approach",
    description:
      "Local state, context, external stores and reducers — a decision tree rather than a verdict.",
    content:
      "There is no single correct answer for React state management; there is only what fits the problem in front of you. This resource lays out a simple decision path: start with local state, move to lifted state, consider context for low-frequency shared data, and reach for an external store when you need fine-grained subscriptions or non-React access.",
    category: "React",
    difficulty: "Advanced",
    readingTime: "11 min",
    type: "Guide",
    icon: "layers",
  },
  {
    id: "r-007",
    slug: "nextjs-rendering-strategies",
    title: "Next.js Rendering Strategies",
    description:
      "Static, dynamic, streamed and cached — how to choose deliberately instead of by accident.",
    content:
      "Rendering is the decision that most affects both performance and correctness in Next.js. This guide explains what each strategy guarantees, how caching and revalidation interact with it, and how to tell from the build output which one you actually got. It ends with a short checklist for reviewing a new route.",
    category: "Next.js",
    difficulty: "Intermediate",
    readingTime: "10 min",
    type: "Guide",
    icon: "route",
  },
  {
    id: "r-008",
    slug: "nextjs-app-router-cheatsheet",
    title: "App Router Cheat Sheet",
    description:
      "File conventions, special folders and data APIs in one scannable reference.",
    content:
      "The App Router introduces a set of file conventions that are easy to mix up under pressure. This cheat sheet lists page, layout, loading, error and not-found alongside their purpose, plus the special folders such as route groups and private folders. Keep it open while setting up a new project.",
    category: "Next.js",
    difficulty: "Beginner",
    readingTime: "5 min",
    type: "Cheat Sheet",
    icon: "compass",
  },
  {
    id: "r-009",
    slug: "nextjs-seo-checklist",
    title: "Next.js SEO Checklist",
    description:
      "Metadata, sitemaps, robots files and structured data — everything a content site needs.",
    content:
      "Good SEO in Next.js is mostly a matter of covering the fundamentals consistently. This checklist walks through page titles and descriptions, canonical URLs, Open Graph and Twitter cards, robots and sitemap files, heading hierarchy and structured data, with a short note on what to avoid inventing — such as ratings or review markup you cannot substantiate.",
    category: "Next.js",
    difficulty: "Beginner",
    readingTime: "7 min",
    type: "Checklist",
    icon: "target",
  },
  {
    id: "r-010",
    slug: "nodejs-api-design-basics",
    title: "Node.js API Design Basics",
    description:
      "Resource naming, status codes, pagination and error shapes that clients can rely on.",
    content:
      "A predictable API is easier to use and easier to change. This resource covers the conventions that make that happen: consistent resource naming, the status codes clients actually branch on, a standard error envelope, pagination that does not break when data grows, and versioning decisions worth making early.",
    category: "Node.js",
    difficulty: "Intermediate",
    readingTime: "9 min",
    type: "Guide",
    icon: "server",
  },
  {
    id: "r-011",
    slug: "nodejs-error-handling-patterns",
    title: "Error Handling Patterns in Node.js",
    description:
      "Where errors should be caught, how they should be shaped and what to log.",
    content:
      "Unhandled errors take down services silently. This article separates operational errors from programming mistakes, shows how to build a consistent error hierarchy, and covers the middleware pattern for turning thrown errors into well-shaped responses. It also covers what is safe to log and what should never reach a client.",
    category: "Node.js",
    difficulty: "Intermediate",
    readingTime: "8 min",
    type: "Article",
    icon: "shield",
  },
  {
    id: "r-012",
    slug: "python-beginner-roadmap",
    title: "Python Beginner Roadmap",
    description:
      "A suggested order for learning Python that avoids the usual detours and dead ends.",
    content:
      "Learning Python is easy to start and easy to乱 derail by chasing side topics. This roadmap proposes a straight line: syntax and core data structures first, then functions and modules, then files and error handling, then object orientation, and only then a framework or library. Each stage lists a small project to confirm you are ready to move on.",
    category: "Python",
    difficulty: "Beginner",
    readingTime: "6 min",
    type: "Roadmap",
    icon: "compass",
  },
  {
    id: "r-013",
    slug: "python-data-structures-guide",
    title: "Python Data Structures Guide",
    description:
      "Lists, tuples, sets and dicts — how to pick the right one for the job.",
    content:
      "Choosing the right built-in container changes both the clarity and the speed of your code. This guide compares lists, tuples, sets and dictionaries by the operations they are good at, with complexity notes and practical examples such as de-duplicating data, joining tables by key and keeping ordered records.",
    category: "Python",
    difficulty: "Beginner",
    readingTime: "8 min",
    type: "Guide",
    icon: "database",
  },
  {
    id: "r-014",
    slug: "python-automation-ideas",
    title: "Practical Python Automation Ideas",
    description:
      "Small scripts that are genuinely worth writing — file organisation, reports and API polling.",
    content:
      "Automation pays off when the task is repetitive, rule-based and boring. This collection lists ten small scripts worth building as learning projects, from renaming files by pattern to pulling data from an API into a spreadsheet. Each idea notes the libraries involved and the point at which a script becomes a maintenance liability.",
    category: "Python",
    difficulty: "Beginner",
    readingTime: "7 min",
    type: "Article",
    icon: "terminal",
  },
  {
    id: "r-015",
    slug: "django-project-structure",
    title: "A Clean Django Project Structure",
    description:
      "Apps, settings modules and where each kind of code should live as a project grows.",
    content:
      "Django's defaults are sensible until a project outgrows them. This resource covers splitting settings per environment, deciding what belongs in an app versus the project package, organising templates and static files, and the moment it is worth extracting shared code into a local package.",
    category: "Django",
    difficulty: "Intermediate",
    readingTime: "9 min",
    type: "Guide",
    icon: "layers",
  },
  {
    id: "r-016",
    slug: "django-orm-performance",
    title: "Django ORM Performance",
    description:
      "N+1 queries, select_related, prefetch_related and how to see what your ORM is doing.",
    content:
      "Most Django performance problems are query problems. This article explains how to spot an N+1 query, the difference between select_related and prefetch_related, how aggregate and annotate replace Python-side loops, and how the debug toolbar makes all of this visible while you develop.",
    category: "Django",
    difficulty: "Advanced",
    readingTime: "10 min",
    type: "Article",
    icon: "database",
  },
  {
    id: "r-017",
    slug: "aws-free-tier-guide",
    title: "Using the AWS Free Tier Wisely",
    description:
      "What is actually included, what quietly costs money and how to keep control of a bill.",
    content:
      "The free tier is generous but not unlimited, and surprises usually come from resources left running. This guide explains the three free tier categories, lists the services that are easiest to overspend on, and walks through budgets, alarms and a teardown checklist you should run after every lab.",
    category: "AWS",
    difficulty: "Beginner",
    readingTime: "7 min",
    type: "Guide",
    icon: "cloud",
  },
  {
    id: "r-018",
    slug: "aws-core-services-overview",
    title: "Core AWS Services Overview",
    description:
      "Compute, storage, networking and databases — what each is for and when to pick it.",
    content:
      "AWS offers far more services than any single project needs. This overview narrows the field to the handful you will actually reach for: when to use virtual machines, containers or serverless; the difference between object and block storage; how virtual networking fits together; and which managed database fits which workload.",
    category: "AWS",
    difficulty: "Beginner",
    readingTime: "9 min",
    type: "Article",
    icon: "cloud",
  },
  {
    id: "r-019",
    slug: "git-branching-workflows",
    title: "Git Branching Workflows",
    description:
      "Trunk-based and release-branch models compared, plus the commands you actually need.",
    content:
      "Branching strategy should reduce coordination cost, not create ceremony. This resource compares trunk-based development with release branching, shows merge versus rebase in practice, and lists the handful of commands that cover day-to-day work. It also covers how to recover from the mistakes everyone makes: wrong branch, lost commit and a botched rebase.",
    category: "Git",
    difficulty: "Beginner",
    readingTime: "8 min",
    type: "Guide",
    icon: "git",
  },
  {
    id: "r-020",
    slug: "git-recovery-cheatsheet",
    title: "Git Recovery Cheat Sheet",
    description:
      "Reset, revert, reflog and stash — the escape hatches for common Git problems.",
    content:
      "Almost every Git panic has a safe answer, as long as you know which tool fits. This sheet covers undoing a commit without losing work, recovering a branch you thought was gone using reflog, rescuing changes staged for the wrong branch, and the difference between reset and revert when a bad commit is already shared.",
    category: "Git",
    difficulty: "Intermediate",
    readingTime: "6 min",
    type: "Cheat Sheet",
    icon: "git",
  },
  {
    id: "r-021",
    slug: "sql-query-fundamentals",
    title: "SQL Query Fundamentals",
    description:
      "SELECT, JOIN, GROUP BY and subqueries explained with a single running example.",
    content:
      "SQL is easier to learn when one dataset carries you through the whole article. This guide builds queries step by step against a single sample schema: filtering, sorting, joining tables, grouping with aggregates, then nesting the same logic into subqueries and common table expressions.",
    category: "Databases",
    difficulty: "Beginner",
    readingTime: "10 min",
    type: "Guide",
    icon: "database",
  },
  {
    id: "r-022",
    slug: "nosql-vs-sql-decisions",
    title: "Choosing Between SQL and NoSQL",
    description:
      "A decision framework based on access patterns, not fashion.",
    content:
      "The SQL versus NoSQL question is really a question about your data and how it is read. This article walks through the trade-offs around schema flexibility, relationships, query patterns and scaling, then applies them to a few realistic scenarios so you can defend the choice rather than defaulting to it.",
    category: "Databases",
    difficulty: "Intermediate",
    readingTime: "9 min",
    type: "Article",
    icon: "database",
  },
  {
    id: "r-023",
    slug: "database-indexing-primer",
    title: "Database Indexing Primer",
    description:
      "Why indexes speed reads, slow writes and how to spot a missing one.",
    content:
      "An index is a trade: faster reads at the cost of slower writes and more storage. This primer explains how a B-tree index actually works, when composite indexes help and when they do not, how to read an execution plan, and the warning signs that an index is being used incorrectly.",
    category: "Databases",
    difficulty: "Advanced",
    readingTime: "11 min",
    type: "Article",
    icon: "database",
  },
  {
    id: "r-024",
    slug: "ai-for-developers-overview",
    title: "AI for Developers: What Matters Now",
    description:
      "The concepts, limits and integration points worth understanding before you build.",
    content:
      "You do not need a research background to build useful AI features. This overview covers the concepts that matter at the application layer — context windows, temperature, structured output and grounding — plus the limitations you must design around, and a short list of the integration patterns teams use most often.",
    category: "AI",
    difficulty: "Beginner",
    readingTime: "8 min",
    type: "Article",
    icon: "sparkles",
  },
  {
    id: "r-025",
    slug: "prompt-design-patterns",
    title: "Prompt Design Patterns",
    description:
      "Role framing, examples, constraints and structured output — repeatable prompt techniques.",
    content:
      "Good prompts are written like specifications rather than wishes. This resource covers the patterns that reliably improve output: giving the model a role, providing one or two worked examples, stating constraints explicitly, requesting a fixed output shape, and separating instructions from user content so the two cannot be confused.",
    category: "AI",
    difficulty: "Intermediate",
    readingTime: "9 min",
    type: "Guide",
    icon: "zap",
  },
  {
    id: "r-026",
    slug: "rag-explained",
    title: "Retrieval-Augmented Generation, Explained",
    description:
      "How to answer questions over your own documents, and where the approach breaks down.",
    content:
      "Retrieval-augmented generation grounds model answers in your own content. This article explains the pipeline end to end — chunking, embedding, indexing, retrieval and prompting — then discusses the practical failure modes: chunk size, retrieval quality, stale data and the point at which a simple search interface would serve users better.",
    category: "AI",
    difficulty: "Advanced",
    readingTime: "12 min",
    type: "Guide",
    icon: "sparkles",
  },
  {
    id: "r-027",
    slug: "responsive-layouts-modern-css",
    title: "Responsive Layouts With Modern CSS",
    description:
      "Grid, flexbox, container queries and the clamp() patterns that replace media query sprawl.",
    content:
      "Responsive design is much simpler with the current CSS toolkit. This guide shows how to compose layouts from grid and flexbox, when container queries are a better fit than viewport queries, and how fluid type and spacing with clamp() remove many breakpoints altogether.",
    category: "Web Development",
    difficulty: "Intermediate",
    readingTime: "10 min",
    type: "Guide",
    icon: "layers",
  },
  {
    id: "r-028",
    slug: "web-performance-baseline",
    title: "Web Performance Baseline",
    description:
      "Core Web Vitals, the fixes that matter and how to avoid regressions after launch.",
    content:
      "Performance work pays off when you focus on the metrics users feel. This resource explains Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift in plain terms, then lists the highest-leverage fixes for each — image sizing, font loading, layout stability and deferring non-critical work.",
    category: "Web Development",
    difficulty: "Intermediate",
    readingTime: "9 min",
    type: "Article",
    icon: "zap",
  },
  {
    id: "r-029",
    slug: "frontend-accessibility-checklist",
    title: "Frontend Accessibility Checklist",
    description:
      "Semantics, keyboard access, contrast and focus — a pre-launch pass you can actually run.",
    content:
      "Accessibility improves fastest when it is a routine check rather than a retrofit. This checklist covers semantic structure, heading order, keyboard operability, visible focus, colour contrast, form labelling and reduced-motion support, with a short note on testing with a screen reader and real assistive technology.",
    category: "Web Development",
    difficulty: "Beginner",
    readingTime: "7 min",
    type: "Checklist",
    icon: "shield",
  },
  {
    id: "r-030",
    slug: "developer-portfolio-guide",
    title: "Building a Developer Portfolio That Works",
    description:
      "What to include, what to leave out and how to present projects for maximum credibility.",
    content:
      "A portfolio is evidence, not decoration. This guide explains how to choose two or three strong projects over ten shallow ones, what to write on each project page — problem, decisions, trade-offs, result — and how to keep it honest when you are still early in your learning.",
    category: "Career",
    difficulty: "Beginner",
    readingTime: "8 min",
    type: "Guide",
    icon: "target",
  },
  {
    id: "r-031",
    slug: "technical-interview-preparation",
    title: "Technical Interview Preparation",
    description:
      "A realistic study plan covering fundamentals, practice and the questions worth asking back.",
    content:
      "Interview preparation works best as steady practice rather than a last-minute cram. This roadmap suggests a weekly plan: fundamentals review, data structure practice, a small live-coding session and one mock interview. It also covers how to talk through your reasoning out loud and the questions that reveal whether a team is a good fit.",
    category: "Career",
    difficulty: "Intermediate",
    readingTime: "11 min",
    type: "Roadmap",
    icon: "users",
  },
  {
    id: "r-032",
    slug: "first-developer-role-roadmap",
    title: "Roadmap to Your First Developer Role",
    description:
      "Skills, projects and application habits in a sensible order — without the noise.",
    content:
      "Getting a first role is partly about skill and partly about how you present it. This roadmap sequences the work: core language, one frontend or backend framework, two substantial projects, then version control and deployment. It closes with practical advice on applications, follow-up and how to keep learning while you search.",
    category: "Career",
    difficulty: "Beginner",
    readingTime: "10 min",
    type: "Roadmap",
    icon: "rocket",
  },
];

export const resourceCategories: string[] = Array.from(
  new Set(resources.map((resource) => resource.category)),
).sort();

export const resourceDifficulties: string[] = Array.from(
  new Set(resources.map((resource) => resource.difficulty)),
);

export const resourceTypes: string[] = Array.from(
  new Set(resources.map((resource) => resource.type)),
);
