import { Projects } from "@/types/type";
import FabFunnelHero from "../../public/images/fabfunnel/hero.png";
import FabFunnelNewsletter from "../../public/images/fabfunnel/newsletter.png";
import FabFunnelPlatforms from "../../public/images/fabfunnel/platforms.png";
import LookfinityHero from "../../public/images/lookfinity/hero.png";
import LookfinityDashboard from "../../public/images/lookfinity/dashboard.png";
import LookfinityReports from "../../public/images/lookfinity/reports.png";
import LookfinityAutomation from "../../public/images/lookfinity/automation.png";
import FigmaAnalyzerHero from "../../public/images/figma-analyzer/hero.png";

// Project details from SourabhResume.pdf; screenshots supplied by the user.
export const allProjects: Projects[] = [
  {
    "id": 0,
    "title": "FabFunnel",
    "alt": "FabFunnel marketing website homepage",
    mainImage: FabFunnelHero,
    introImage: FabFunnelHero,
    size: "w-full md:w-[65%]",
    marginBottom: "mb-0",
    imagesLandscape: [
      { image: FabFunnelPlatforms, alt: "FabFunnel marketing website showcasing supported advertising platforms" },
      { image: FabFunnelNewsletter, alt: "FabFunnel marketing website newsletter section with a dashboard preview" },
    ],
    "year": "",
    "roles": [
      "frontend development",
      "integrations",
      "reporting"
    ],
    "technologies": [
      "React",
      "TypeScript",
      "Ant Design",
      "React Hook Form",
      "SCSS",
      "GraphQL",
      "Apollo Client",
      "Codegen"
    ],
    "website": "https://app.fabfunnel.com",
    "description1": [
      "I designed and implemented major modules across integrations, a rule engine, and reporting, alongside reusable React components. These contributions improved feature scalability by 25% and reduced development time by 30%.",
      "I created and maintained more than five custom React hooks to simplify state management, reducing code complexity by 30%."
    ],
    "description2": [
      "I collaborated with more than three cross-functional teams to integrate features and improve deployment efficiency."
    ]
  },
  {
    "id": 1,
    "title": "Lookfinity 2.0",
    "alt": "Lookfinity marketing automation website homepage",
    mainImage: LookfinityHero,
    introImage: LookfinityHero,
    imagesLandscape: [
      { image: LookfinityDashboard, alt: "Lookfinity dashboard with campaign spend, revenue, gross margin, and ROAS analytics" },
      { image: LookfinityReports, alt: "Lookfinity CPS reports showing capture rates, flow health, and click failure breakdowns" },
      { image: LookfinityAutomation, alt: "Lookfinity advertising automation overview with a dashboard preview" },
    ],
    "year": "",
    "roles": [
      "frontend development",
      "campaign analytics",
      "data visualization"
    ],
    "technologies": [
      "React",
      "Ant Design",
      "GraphQL",
      "Apollo Client",
      "Chart.js"
    ],
    "website": "https://app.lookfinity.com/",
    "description1": [
      "I built a reporting service for campaign performance insights, reducing reliance on third-party applications and lowering costs by 20%.",
      "I integrated daily and hourly performance reporting for launched campaigns, improving data visibility and decision-making efficiency by 25%."
    ],
    "description2": [
      "I implemented Apollo Client subscriptions for real-time campaign updates and interactive Chart.js visualizations to make performance insights easier to explore."
    ]
  },
  {
    id: 2,
    title: "Figma Analyzer",
    alt: "Figma Analyzer interface with design inputs and a live analysis stage",
    mainImage: FigmaAnalyzerHero,
    introImage: FigmaAnalyzerHero,
    year: "",
    roles: ["design analysis", "developer tooling"],
    technologies: ["Figma", "Gemini"],
    website: "https://analyzer-slack-bot.vercel.app/",
    description1: [
      "Figma Analyzer connects a Figma frame URL with a codebase to help explore component reuse, open questions, and implementation effort. Route and component hints let users focus the analysis on a specific part of an application.",
    ],
    description2: [
      "The interface presents analysis progress in a live stage, with options for heuristic-only analysis, refreshing cached data, and saving or copying a Markdown report.",
    ],
  }
];
