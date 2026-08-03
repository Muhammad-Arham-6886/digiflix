export type ProcessStep = {
  step: string;
  title: string;
  duration: string;
  description: string;
  outcomes: string[];
  icon: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    duration: "Week 1",
    description:
      "We dig into your business, users and constraints. Interviews, analytics, competitive teardown and a clear definition of what success looks like in numbers.",
    outcomes: ["Strategy document", "Success metrics & KPIs", "Fixed-price proposal"],
    icon: "Search",
  },
  {
    step: "02",
    title: "Architect",
    duration: "Week 2",
    description:
      "System design before pixels. Information architecture, data models, API contracts, performance budget and the tech choices that will carry you for years.",
    outcomes: ["Technical architecture", "Sitemap & content model", "Performance budget"],
    icon: "Boxes",
  },
  {
    step: "03",
    title: "Design",
    duration: "Weeks 3–4",
    description:
      "Motion-driven design systems and page designs that match the brand — tokens, components and prototypes your team can actually build from.",
    outcomes: ["Design system & tokens", "Figma prototypes", "Motion language"],
    icon: "Palette",
  },
  {
    step: "04",
    title: "Build",
    duration: "Weeks 5–9",
    description:
      "Weekly demo cycles on a live preview URL. The design system goes to code, integrations wire up and every sprint ends with something you can click.",
    outcomes: ["Production codebase", "Weekly live demos", "CI/CD pipeline"],
    icon: "Code2",
  },
  {
    step: "05",
    title: "Launch",
    duration: "Week 10",
    description:
      "Load-testing, SEO migration checks, Lighthouse sign-off and a controlled launch. We hold your hand through DNS, analytics and the first spike of traffic.",
    outcomes: ["Zero-drama launch", "SEO migration runbook", "95+ Lighthouse sign-off"],
    icon: "Rocket",
  },
  {
    step: "06",
    title: "Grow",
    duration: "Ongoing",
    description:
      "Post-launch care, A/B testing, content engine and optimization sprints. The platform keeps getting faster and better while you focus on the business.",
    outcomes: ["Analytics & monitoring", "Optimization sprints", "SLA-backed support"],
    icon: "TrendingUp",
  },
];

export const processSummary = {
  title: "A Process That Removes Surprise",
  subtitle:
    "No hand-wavy agency theater. Every phase has defined outcomes and a fixed budget — you always know what's happening, what's shipping and what it costs.",
};
