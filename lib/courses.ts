import type { Course } from "@/types";

/**
 * Course catalogue.
 *
 * Static, fully serialisable data — ready to be replaced by an API or CMS
 * later without changing any UI code.
 */
export const courses: Course[] = [
  {
    id: "c-001",
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    description:
      "Build complete web applications from the interface to the database with React, Next.js and Node.js.",
    overview:
      "A complete path through modern web development. You start with the fundamentals of the web, move into building rich interfaces with React and Next.js, then build and connect APIs, work with databases and finish by deploying a production-ready application.",
    category: "Web Development",
    level: "Intermediate",
    duration: "12 weeks",
    format: "Self-paced · Project based",
    icon: "layers",
    topics: ["HTML & CSS", "JavaScript", "React", "Next.js", "Node.js", "Databases"],
    skills: [
      "Full-stack architecture",
      "REST API design",
      "Relational & document databases",
      "Authentication basics",
      "Deployment pipelines",
    ],
    outcomes: [
      "Design and build a complete web application from scratch",
      "Create and document RESTful APIs with Node.js and Express",
      "Model data and write efficient queries in SQL and MongoDB",
      "Implement session and token based authentication",
      "Deploy an application with a production build and environment config",
    ],
    prerequisites: [
      "Basic computer literacy and comfortable file management",
      "A computer with permission to install development tools",
      "No prior programming experience is required",
    ],
    audience: [
      "Career switchers aiming for a first developer role",
      "Students who want a structured path through the full stack",
      "Designers who want to ship the products they design",
    ],
    modules: [
      {
        title: "The Web Fundamentals",
        lessons: [
          "How the web works: clients, servers and HTTP",
          "Semantic HTML and document structure",
          "Layout with Flexbox and CSS Grid",
          "Responsive design and modern CSS techniques",
          "Accessibility foundations",
        ],
      },
      {
        title: "JavaScript for Application Development",
        lessons: [
          "Variables, types and control flow",
          "Functions, arrays and objects in practice",
          "The DOM, events and browser APIs",
          "Asynchronous JavaScript: promises, async/await and fetch",
          "Modules, tooling and the modern build workflow",
        ],
      },
      {
        title: "Building Interfaces with React",
        lessons: [
          "Components, props and state",
          "Handling events and forms",
          "Rendering lists and conditional UI",
          "Effects, data fetching and loading states",
          "Routing and page structure",
        ],
      },
      {
        title: "Server Side Development",
        lessons: [
          "Building an API with Node.js and Express",
          "Request validation and error handling",
          "Connecting to SQL and MongoDB",
          "Authentication and authorisation basics",
          "Environment variables and configuration",
        ],
      },
      {
        title: "Shipping the Application",
        lessons: [
          "Rendering strategies in Next.js",
          "Optimising images, fonts and bundle size",
          "Testing the critical paths",
          "Deploying to a production environment",
          "Monitoring and iterating after launch",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need to know programming before starting?",
        answer:
          "No. The first module covers how the web works and the basics of programming from scratch. You only need a computer and the willingness to practise consistently.",
      },
      {
        question: "Which technologies does this course cover?",
        answer:
          "HTML, CSS, JavaScript, React, Next.js, Node.js with Express, SQL and MongoDB databases, plus deployment and environment configuration.",
      },
      {
        question: "Is this course self-paced?",
        answer:
          "Yes. All modules are available up front so you can move through them at your own speed and revisit any section whenever you need to.",
      },
      {
        question: "Does the course include a certificate?",
        answer:
          "Certification details are still to be confirmed and will be published here once they are finalised. The focus of the course is the portfolio projects you build.",
      },
    ],
  },
  {
    id: "c-002",
    slug: "javascript-mastery",
    title: "JavaScript Mastery",
    description:
      "Go from language fundamentals to asynchronous patterns, the DOM and the tooling that modern teams rely on.",
    overview:
      "JavaScript is the language of the browser and the backbone of most web tooling. This course builds a precise, practical understanding of the language — starting with core syntax and ending with asynchronous programming, the DOM and the build tools used in real projects.",
    category: "Web Development",
    level: "Beginner",
    duration: "6 weeks",
    format: "Self-paced · Exercise driven",
    icon: "braces",
    topics: ["ES6+", "DOM", "Async", "Modules", "Tooling", "Debugging"],
    skills: [
      "Modern JavaScript syntax",
      "Asynchronous control flow",
      "DOM manipulation",
      "Debugging with browser tools",
      "Package managers and bundlers",
    ],
    outcomes: [
      "Write clear, idiomatic modern JavaScript",
      "Reason confidently about asynchronous code and the event loop",
      "Build interactive UIs directly against the DOM",
      "Structure projects with modules and a package manager",
      "Diagnose bugs using browser developer tools",
    ],
    prerequisites: [
      "Basic HTML and CSS knowledge is helpful but not mandatory",
      "A modern browser and a code editor",
    ],
    audience: [
      "Beginners who want a solid JavaScript foundation",
      "HTML/CSS developers ready to add interactivity",
      "Anyone who has struggled with asynchronous code",
    ],
    modules: [
      {
        title: "Language Foundations",
        lessons: [
          "Values, types and coercion",
          "Functions, scope and closures",
          "Arrays and objects in depth",
          "Control flow and error handling",
          "Clean code and naming conventions",
        ],
      },
      {
        title: "The Browser Environment",
        lessons: [
          "Selecting and updating the DOM",
          "Events, delegation and propagation",
          "Forms and user input",
          "Storage, history and browser APIs",
          "Debugging with developer tools",
        ],
      },
      {
        title: "Asynchronous JavaScript",
        lessons: [
          "The event loop explained clearly",
          "Callbacks, promises and async/await",
          "Fetching data from APIs",
          "Error handling and retries",
          "Sequencing and parallelising work",
        ],
      },
      {
        title: "Modern Tooling",
        lessons: [
          "ES modules and project structure",
          "npm and package management",
          "Bundlers and dev servers",
          "Linting and formatting",
          "Testing the essentials",
        ],
      },
    ],
    faq: [
      {
        question: "Is this course suitable for complete beginners?",
        answer:
          "Yes. It assumes no programming experience, though knowing basic HTML and CSS will help you see results faster in the browser sections.",
      },
      {
        question: "Do you teach TypeScript?",
        answer:
          "TypeScript is not covered here — this course focuses on the language itself. TypeScript is introduced in the Next.js and React courses where it is used directly.",
      },
      {
        question: "How much time should I set aside each week?",
        answer:
          "Around six to eight hours a week is a comfortable pace for the six-week outline, but the material is self-paced and can be stretched or compressed.",
      },
    ],
  },
  {
    id: "c-003",
    slug: "react-development",
    title: "React Development",
    description:
      "Learn component-driven UI development, state management and data fetching with the world's most used frontend library.",
    overview:
      "React changed how interfaces are built. This course teaches the mental model behind it — components, state, effects and composition — and then applies that model to real problems: data fetching, forms, routing, performance and maintainable project structure.",
    category: "Frontend",
    level: "Intermediate",
    duration: "7 weeks",
    format: "Self-paced · Project based",
    icon: "atom",
    topics: ["Components", "Hooks", "State", "Routing", "Data Fetching", "Testing"],
    skills: [
      "Component architecture",
      "State modelling",
      "Custom hooks",
      "Client-side routing",
      "Performance profiling",
    ],
    outcomes: [
      "Break complex interfaces into well-composed components",
      "Manage local and shared state without unnecessary complexity",
      "Fetch, cache and refresh data reliably",
      "Build multi-page experiences with client routing",
      "Find and fix performance problems with React's profiler",
    ],
    prerequisites: [
      "Solid JavaScript fundamentals including array methods and async/await",
      "Comfort with HTML and CSS",
    ],
    audience: [
      "Developers moving from jQuery or plain JavaScript",
      "Frontend developers formalising their React knowledge",
      "Backend developers adding a frontend skill",
    ],
    modules: [
      {
        title: "Thinking in React",
        lessons: [
          "Components, props and composition",
          "State, rendering and one-way data flow",
          "Handling events and forms",
          "Lists, keys and conditional rendering",
          "Thinking in components before writing code",
        ],
      },
      {
        title: "Hooks in Depth",
        lessons: [
          "State, effect and ref hooks",
          "Deriving state instead of duplicating it",
          "Effect dependencies and cleanup",
          "Building reusable custom hooks",
          "Context for shared state",
        ],
      },
      {
        title: "Data and Routing",
        lessons: [
          "Fetching data and handling loading states",
          "Error boundaries and failure states",
          "Client-side routing and layouts",
          "Query caching and invalidation",
          "Forms and validation patterns",
        ],
      },
      {
        title: "Scale and Polish",
        lessons: [
          "Project structure that grows well",
          "Memoisation and render performance",
          "Accessible component patterns",
          "Testing components and hooks",
          "Preparing a portfolio project",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need to know Next.js before this course?",
        answer:
          "No. React is taught on its own so the mental model is clear. Next.js is covered as a separate course where server rendering and routing are introduced.",
      },
      {
        question: "Which version of React is used?",
        answer:
          "The material targets the current stable React release and focuses on patterns that remain relevant across versions rather than version-specific shortcuts.",
      },
      {
        question: "Is state management library like Redux covered?",
        answer:
          "The course focuses on built-in patterns first — context, composition and custom hooks. Library-based state management is discussed as an option and when it is actually justified.",
      },
    ],
  },
  {
    id: "c-004",
    slug: "nextjs-development",
    title: "Next.js Development",
    description:
      "Master the React framework for production: routing, rendering strategies, data fetching and optimisation.",
    overview:
      "Next.js adds routing, server rendering and a full set of performance optimisations to React. This course covers the App Router end to end — layouts, data fetching, rendering strategies, caching, metadata and the optimisation tools that make pages fast.",
    category: "Frontend",
    level: "Intermediate",
    duration: "7 weeks",
    format: "Self-paced · Project based",
    icon: "route",
    topics: ["App Router", "Server Components", "Rendering", "SEO", "Caching", "Deployment"],
    skills: [
      "App Router navigation",
      "Server and client component boundaries",
      "Rendering strategy selection",
      "Metadata and SEO",
      "Core Web Vitals optimisation",
    ],
    outcomes: [
      "Structure a production application with the App Router",
      "Choose between static, dynamic and streaming rendering deliberately",
      "Fetch and cache data efficiently on the server",
      "Add metadata, Open Graph tags and structured data",
      "Deploy an optimised production build",
    ],
    prerequisites: [
      "Working knowledge of React components, props and hooks",
      "Comfortable with JavaScript async/await",
    ],
    audience: [
      "React developers moving to a full framework",
      "Teams standardising on Next.js",
      "Developers optimising existing Next.js applications",
    ],
    modules: [
      {
        title: "Framework Foundations",
        lessons: [
          "Project structure and the App Router",
          "Pages, layouts and nested routes",
          "Dynamic segments and route params",
          "Navigation and Link behaviour",
          "Loading, error and not-found states",
        ],
      },
      {
        title: "Rendering and Data",
        lessons: [
          "Server Components vs Client Components",
          "Static, dynamic and streaming rendering",
          "Fetching data on the server",
          "Caching, revalidation and invalidation",
          "Mutations and server actions",
        ],
      },
      {
        title: "Optimisation and SEO",
        lessons: [
          "Image, font and script optimisation",
          "Metadata API and Open Graph tags",
          "Sitemaps, robots and structured data",
          "Measuring Core Web Vitals",
          "Bundle analysis and code splitting",
        ],
      },
      {
        title: "Production Delivery",
        lessons: [
          "Environment variables and configuration",
          "Authentication patterns overview",
          "Testing routes and rendering output",
          "Building for production",
          "Deploying and monitoring",
        ],
      },
    ],
    faq: [
      {
        question: "Should I take the React course first?",
        answer:
          "If you are already comfortable with components, hooks and data fetching in React, you can start directly here. Otherwise the React course is the better starting point.",
      },
      {
        question: "Does the course cover the Pages Router?",
        answer:
          "The course focuses on the App Router, which is the current recommended approach. Concepts are explained so you can still read and maintain older Pages Router code.",
      },
      {
        question: "Is TypeScript required?",
        answer:
          "Examples are shown in TypeScript because it is the common choice for Next.js projects, but the concepts apply equally if you prefer JavaScript.",
      },
    ],
  },
  {
    id: "c-005",
    slug: "nodejs-express",
    title: "Node.js & Express",
    description:
      "Design and build reliable backend services: APIs, middleware, databases, authentication and deployment.",
    overview:
      "Node.js lets you use JavaScript across the entire stack. This course focuses on building server-side applications that stay maintainable — designing clean APIs, structuring middleware, working with databases, securing endpoints and preparing a service for deployment.",
    category: "Backend",
    level: "Intermediate",
    duration: "6 weeks",
    format: "Self-paced · Project based",
    icon: "server",
    topics: ["Express", "REST APIs", "Middleware", "Databases", "Auth", "Testing"],
    skills: [
      "REST API design",
      "Middleware architecture",
      "Database integration",
      "Authentication and authorisation",
      "Service deployment",
    ],
    outcomes: [
      "Build and document a well-structured REST API",
      "Organise routes, controllers and middleware cleanly",
      "Connect a service to SQL and MongoDB databases",
      "Implement token based authentication securely",
      "Write tests that protect critical endpoints",
    ],
    prerequisites: [
      "Comfortable with JavaScript including async/await",
      "Basic understanding of HTTP requests and responses",
    ],
    audience: [
      "Frontend developers adding backend skills",
      "Students building their first API",
      "Developers formalising Node.js knowledge",
    ],
    modules: [
      {
        title: "Runtime and HTTP Basics",
        lessons: [
          "How Node.js runs JavaScript",
          "Modules, npm and project setup",
          "HTTP methods, status codes and headers",
          "Your first Express server",
          "Structured project layout",
        ],
      },
      {
        title: "Building the API",
        lessons: [
          "Routing and route parameters",
          "Request validation and sanitisation",
          "Middleware and the request lifecycle",
          "Error handling strategies",
          "Logging and debugging",
        ],
      },
      {
        title: "Data and Security",
        lessons: [
          "Modeling data for an API",
          "Working with SQL and MongoDB",
          "Authentication with tokens",
          "Authorisation and access control",
          "Rate limiting and common protections",
        ],
      },
      {
        title: "Testing and Delivery",
        lessons: [
          "Unit and integration testing",
          "Testing API endpoints end to end",
          "Configuration and environment variables",
          "Container and platform deployment",
          "Health checks and monitoring basics",
        ],
      },
    ],
    faq: [
      {
        question: "Is Express still relevant?",
        answer:
          "Yes. Express remains widely used and the architectural ideas — routing, middleware, error handling — transfer directly to newer frameworks.",
      },
      {
        question: "Which database is used?",
        answer:
          "Both a relational database and MongoDB are covered so you can compare the two approaches and choose appropriately for a given project.",
      },
      {
        question: "Does this course cover GraphQL?",
        answer:
          "No. The course concentrates on REST, which remains the most common requirement for the roles this training is aimed at.",
      },
    ],
  },
  {
    id: "c-006",
    slug: "python-development",
    title: "Python Development",
    description:
      "Build a strong Python foundation and use it for scripting, automation and backend development.",
    overview:
      "Python's readable syntax makes it an ideal first language and a powerful professional tool. This course moves from core language fundamentals to files, data structures and automation, and finishes with building a small backend service using Python.",
    category: "Backend",
    level: "Beginner",
    duration: "6 weeks",
    format: "Self-paced · Exercise driven",
    icon: "terminal",
    topics: ["Syntax", "Data Structures", "OOP", "Automation", "Testing", "APIs"],
    skills: [
      "Core Python syntax",
      "Data structure manipulation",
      "Object-oriented design",
      "Scripting and automation",
      "Testing with pytest",
    ],
    outcomes: [
      "Write clear, well-structured Python programs",
      "Transform and analyse data with built-in structures",
      "Automate repetitive tasks with scripts",
      "Design classes where object orientation genuinely helps",
      "Build and test a small HTTP service",
    ],
    prerequisites: [
      "No programming experience required",
      "Willingness to type out and modify examples",
    ],
    audience: [
      "First-time programmers choosing an entry language",
      "Analysts automating repetitive work",
      "Developers adding Python to their toolkit",
    ],
    modules: [
      {
        title: "Getting Started with Python",
        lessons: [
          "Installing Python and choosing an editor",
          "Values, types and variables",
          "Control flow and comparison",
          "Functions and code organisation",
          "Readable code and naming",
        ],
      },
      {
        title: "Working with Data",
        lessons: [
          "Strings and text processing",
          "Lists, tuples and dictionaries",
          "Comprehensions and iteration",
          "Files and structured data formats",
          "Errors and exception handling",
        ],
      },
      {
        title: "Object-Oriented Python",
        lessons: [
          "Classes and instances",
          "Encapsulation and composition",
          "Inheritance and when to use it",
          "Modules and packages",
          "Virtual environments and dependencies",
        ],
      },
      {
        title: "Practical Python",
        lessons: [
          "Automating everyday tasks",
          "Consuming HTTP APIs",
          "Building a small web service",
          "Testing with pytest",
          "Formatting, linting and shipping",
        ],
      },
    ],
    faq: [
      {
        question: "Is Python a good first programming language?",
        answer:
          "It is one of the most common choices for beginners because the syntax stays out of the way and you can see useful results quickly.",
      },
      {
        question: "Does this course cover data science libraries?",
        answer:
          "No. This course is about general-purpose Python programming. Data analysis libraries are a separate specialisation.",
      },
      {
        question: "Which Python version is used?",
        answer:
          "Examples target the current stable Python release. Nothing in the course depends on version-specific behaviour.",
      },
    ],
  },
  {
    id: "c-007",
    slug: "django-development",
    title: "Django Development",
    description:
      "Build production-ready backend applications with Django's admin, ORM, views and security defaults.",
    overview:
      "Django is a batteries-included framework that makes it easy to build secure, data-driven applications. Learn its conventions — the ORM, the admin, class-based views, forms and the built-in security features — and apply them to a complete project.",
    category: "Backend",
    level: "Intermediate",
    duration: "7 weeks",
    format: "Self-paced · Project based",
    icon: "shield",
    topics: ["Django", "ORM", "Templates", "Admin", "Auth", "Deployment"],
    skills: [
      "Django project structure",
      "ORM modelling and queries",
      "Server-rendered views",
      "Authentication workflows",
      "Security best practices",
    ],
    outcomes: [
      "Scaffold and structure a Django application correctly",
      "Model relationships and query them efficiently",
      "Build both template and JSON based interfaces",
      "Use the admin for internal tooling",
      "Deploy a configured production deployment",
    ],
    prerequisites: [
      "Comfortable with Python fundamentals",
      "Basic HTML and CSS knowledge",
      "Understanding of HTTP request/response flow",
    ],
    audience: [
      "Python developers moving into web development",
      "Backend engineers evaluating a batteries-included framework",
      "Developers building internal tools quickly",
    ],
    modules: [
      {
        title: "Django Foundations",
        lessons: [
          "Projects, apps and settings",
          "URL routing and views",
          "Templates and template inheritance",
          "The request/response cycle",
          "Project structure conventions",
        ],
      },
      {
        title: "Data Modelling",
        lessons: [
          "Models and field types",
          "Relationships and migrations",
          "QuerySets and the ORM",
          "Optimising query performance",
          "Fixing common modelling mistakes",
        ],
      },
      {
        title: "Interfaces and Admin",
        lessons: [
          "Forms and validation",
          "Class-based views",
          "Configuring the admin",
          "Serving JSON for frontend clients",
          "File and media handling",
        ],
      },
      {
        title: "Security and Delivery",
        lessons: [
          "Authentication and permissions",
          "CSRF, XSS and SQL injection defences",
          "Caching strategies",
          "Testing with Django's test tools",
          "Deploying a production configuration",
        ],
      },
    ],
    faq: [
      {
        question: "Should I learn Flask first?",
        answer:
          "Not necessarily. Django's structure is opinionated but well documented, and the conventions it enforces are useful to learn early.",
      },
      {
        question: "Is Django suitable for APIs only?",
        answer:
          "Yes. Django REST Framework is the common choice for API-only projects, and the ORM, admin and security features work the same way.",
      },
      {
        question: "Does this course cover Django best practices?",
        answer:
          "Project structure, testing, configuration management and security defaults are covered throughout rather than saved for a single section.",
      },
    ],
  },
  {
    id: "c-008",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Design, build and ship cross-platform mobile applications from a single codebase.",
    overview:
      "This course covers modern cross-platform mobile development. You learn the component model, navigation, local state and data persistence, then integrate APIs and prepare a build for the app stores.",
    category: "Mobile",
    level: "Intermediate",
    duration: "8 weeks",
    format: "Self-paced · Project based",
    icon: "smartphone",
    topics: ["Components", "Navigation", "State", "Storage", "APIs", "Publishing"],
    skills: [
      "Cross-platform UI development",
      "Mobile navigation patterns",
      "Offline data persistence",
      "Native device APIs",
      "Store submission process",
    ],
    outcomes: [
      "Build a cross-platform app from a single codebase",
      "Implement reliable navigation and screen structure",
      "Persist data locally and synchronise with an API",
      "Handle loading, error and empty states properly",
      "Prepare screenshots, metadata and a store submission",
    ],
    prerequisites: [
      "Working knowledge of JavaScript",
      "Basic React experience is strongly recommended",
      "An Android or iOS device for testing",
    ],
    audience: [
      "Web developers expanding to mobile",
      "Students building a first portfolio app",
      "Founders prototyping a product idea",
    ],
    modules: [
      {
        title: "Mobile Foundations",
        lessons: [
          "How cross-platform frameworks work",
          "Project setup and tooling",
          "Components, styles and layouts",
          "Responsive design for small screens",
          "Navigation and screen structure",
        ],
      },
      {
        title: "State and Data",
        lessons: [
          "Local and shared state",
          "Lists and performance",
          "Fetching and caching remote data",
          "Local storage and persistence",
          "Forms and input handling",
        ],
      },
      {
        title: "Platform Features",
        lessons: [
          "Working with the camera and media",
          "Notifications fundamentals",
          "Gestures and haptics",
          "Deep links and share targets",
          "Handling permissions",
        ],
      },
      {
        title: "Ship the App",
        lessons: [
          "Icons, splash screens and branding",
          "App store listing requirements",
          "Versioning and release builds",
          "Testing across screen sizes",
          "Post-release updates",
        ],
      },
    ],
    faq: [
      {
        question: "Which framework does this course teach?",
        answer:
          "The course teaches cross-platform development using React Native concepts, which transfer directly if you later choose a different cross-platform framework.",
      },
      {
        question: "Do I need a Mac to publish an iOS app?",
        answer:
          "Developing and testing on Android can be done on any platform, but Apple's tooling requires a Mac for iOS builds. This is covered in the publishing module.",
      },
      {
        question: "Is the store submission process included?",
        answer:
          "Yes. The final module walks through the practical requirements for preparing a listing and submitting a release, using placeholder account details.",
      },
    ],
  },
  {
    id: "c-009",
    slug: "aws-fundamentals",
    title: "AWS Fundamentals",
    description:
      "Understand core cloud concepts and deploy applications using the most widely used cloud platform.",
    overview:
      "Cloud skills are now expected of most developers. This course starts with the fundamentals — regions, IAM, compute, storage and networking — and then applies them by deploying a real application with a managed database and a static frontend.",
    category: "Cloud",
    level: "Beginner",
    duration: "5 weeks",
    format: "Self-paced · Hands-on labs",
    icon: "cloud",
    topics: ["IAM", "Compute", "Storage", "Networking", "Databases", "Cost"],
    skills: [
      "Cloud architecture fundamentals",
      "IAM and access management",
      "Compute and storage choices",
      "Managed database deployment",
      "Cost monitoring",
    ],
    outcomes: [
      "Explain core cloud concepts and terminology confidently",
      "Create and manage access with IAM best practice",
      "Deploy compute, storage and database resources",
      "Serve a static site alongside an API",
      "Track and control cloud spending",
    ],
    prerequisites: [
      "Basic command line familiarity",
      "Understanding of what a web server does",
      "No prior cloud experience required",
    ],
    audience: [
      "Developers deploying their first cloud workload",
      "Students preparing for cloud fundamentals topics",
      "Ops-curious engineers wanting practical experience",
    ],
    modules: [
      {
        title: "Cloud Fundamentals",
        lessons: [
          "Regions, availability zones and edge locations",
          "Shared responsibility model",
          "Creating an account safely",
          "The free tier and cost control",
          "The console, CLI and infrastructure as code",
        ],
      },
      {
        title: "Identity and Networking",
        lessons: [
          "IAM users, groups and roles",
          "Policies and least privilege",
          "Virtual networks and subnets",
          "Security groups and firewalls",
          "Content delivery with CloudFront",
        ],
      },
      {
        title: "Compute and Storage",
        lessons: [
          "Virtual machines vs containers vs serverless",
          "Running code without servers",
          "Object storage and static hosting",
          "Block and file storage options",
          "Selecting the right service",
        ],
      },
      {
        title: "Data and Operations",
        lessons: [
          "Managed relational databases",
          "Key-value stores and caching",
          "Monitoring and logging",
          "Backups and recovery",
          "Building a cost dashboard",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need to pay for an AWS account?",
        answer:
          "Most of the exercises fit within the AWS free tier. Where a resource is not free, the lab explains the cost beforehand and how to remove it afterwards.",
      },
      {
        question: "Does this course prepare for a certification exam?",
        answer:
          "It builds the practical foundation that certifications assume. Exam-specific preparation is a separate track and is not part of this course.",
      },
      {
        question: "Are the cloud labs hands-on?",
        answer:
          "Yes. Each module includes practical exercises performed in your own account, with teardown instructions at the end of every lab.",
      },
    ],
  },
  {
    id: "c-010",
    slug: "ai-modern-development",
    title: "AI & Modern Development",
    description:
      "Integrate AI capabilities into real applications and understand how modern AI systems are built and used.",
    overview:
      "AI features are becoming a standard part of modern products. This course explains how large language models work at a practical level, how to integrate them safely into an application, and how to build useful features such as search, summarisation and assistants.",
    category: "AI",
    level: "Intermediate",
    duration: "6 weeks",
    format: "Self-paced · Project based",
    icon: "sparkles",
    topics: ["LLMs", "Prompts", "Embeddings", "RAG", "Evaluation", "Ethics"],
    skills: [
      "LLM API integration",
      "Prompt design",
      "Retrieval-augmented generation",
      "AI feature evaluation",
      "Responsible AI practices",
    ],
    outcomes: [
      "Explain how language models produce output",
      "Design prompts that produce consistent results",
      "Add AI features to an existing web application",
      "Ground responses with retrieval over your own data",
      "Evaluate and safeguard AI behaviour before shipping",
    ],
    prerequisites: [
      "Comfortable with JavaScript or Python",
      "Experience building at least one web application",
      "Willingness to experiment and iterate",
    ],
    audience: [
      "Developers adding AI features to products",
      "Backend engineers evaluating AI integrations",
      "Students exploring the modern AI landscape",
    ],
    modules: [
      {
        title: "Understanding AI Systems",
        lessons: [
          "How language models work at a practical level",
          "Tokens, context windows and cost",
          "Choosing models for a task",
          "Capabilities and failure modes",
          "Terminology and the wider landscape",
        ],
      },
      {
        title: "Working with Model APIs",
        lessons: [
          "Authentication and API structure",
          "Designing effective prompts",
          "Structured and typed output",
          "Streaming responses",
          "Error handling and rate limits",
        ],
      },
      {
        title: "Grounded Generation",
        lessons: [
          "Embeddings and vector search",
          "Retrieval-augmented generation",
          "Chunking and indexing documents",
          "Building an assistant over your own content",
          "Reducing hallucination in answers",
        ],
      },
      {
        title: "Shipping Responsible Features",
        lessons: [
          "Evaluation and regression testing",
          "Guardrails and input filtering",
          "Latency, caching and cost control",
          "Privacy and data handling",
          "Monitoring after release",
        ],
      },
    ],
    faq: [
      {
        question: "Do I need a mathematics background?",
        answer:
          "No. The course is practical and explains the concepts you need at an application level without requiring calculus or statistics training.",
      },
      {
        question: "Is a paid AI API required?",
        answer:
          "A small API budget is useful for the exercises, and alternatives are noted where a locally hosted or free model can be used instead.",
      },
      {
        question: "Does this cover training my own model?",
        answer:
          "No. The course focuses on integrating existing models well, which is what most application teams actually need to do.",
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export const courseSlugs: string[] = courses.map((course) => course.slug);

export const courseCategories: string[] = Array.from(
  new Set(courses.map((course) => course.category)),
);

export const courseLevels: string[] = Array.from(
  new Set(courses.map((course) => course.level)),
);

/** Courses shown in the homepage "Featured Courses" section. */
export const featuredCourses: Course[] = courses.slice(0, 6);
