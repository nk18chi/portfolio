type TprivateProjectData = {
  id: number;
  serviceName: string;
  serviceDescription: string;
  tools: string[];
  githubUrl: string;
  website?: string;
};

export const PRIVATE_PROJECTS: TprivateProjectData[] = [
  {
    id: 0,
    serviceName: "The Chess Game",
    serviceDescription: "The Chess Game is a Node application where you can play chess with another player in the command line.",
    tools: ["Typescript", "Node", "Jest", "Circle CI"],
    githubUrl: "https://github.com/nk18chi/chess-Typescript",
  },
  {
    id: 1,
    serviceName: "Tempmon",
    serviceDescription:
      "Tempmon is a NPM package that helps develop Node.js based applications by monitoring your directory and automatically creating initial files based on your template when a new folder is created in the directory.",
    tools: ["Typescript", "NPM", "Jest", "GitHub Action"],
    website: "https://www.npmjs.com/package/tempmon",
    githubUrl: "https://github.com/nk18chi/tempmon",
  },
  {
    id: 2,
    serviceName: "Pelican",
    serviceDescription:
      "Pelican is an e-commerce application that sells cellular phones with data plans and charges monthly subscriptions using Stripe.",
    tools: [
      "React",
      "Next.js",
      "Typescript",
      "Storybook",
      "Jest",
      "React Testing Library",
      "Cypress",
      "AWS",
      "Chakra",
      "GraphQL",
      "Docker",
      "GitHub Action",
      "Mongo",
      "Express",
      "Gitflow Workflow",
      "Stripe",
    ],
    githubUrl: "https://github.com/nk18chi/stripe-payment-app",
  },
  {
    id: 3,
    serviceName: "Leetcode - Python",
    serviceDescription: "This is the repository where I have solved over 400 questions by Python, and each solution comes along with unit testing.",
    tools: ["Python", "Unitest"],
    githubUrl: "https://github.com/nk18chi/leetcode-python",
  },
  {
    id: 4,
    serviceName: "Ideapool",
    serviceDescription:
      "Ideapool is a brainstorming tool to generate new business ideas by showing websites and words at random and to pool your ideas in the app.",
    tools: ["React", "Typescript", "Firebase", "SASS"],
    website: "https://ideapool-app.web.app",
    githubUrl: "https://github.com/nk18chi/ideapool",
  },
  {
    id: 5,
    serviceName: "Web Director Blog",
    serviceDescription: "Web Director Blog is my blog site for my output of what I leanred.",
    tools: ["Python", "Django", "MySQL"],
    website: "https://webdirector-blog.com/en/",
    githubUrl: "https://github.com/nk18chi/webdirector-blog",
  },
  {
    id: 6,
    serviceName: "Portfolio",
    serviceDescription: "This is my profile site to get to know about my career and skills, which is the website you are currently browsing.",
    tools: ["React", "Typescript", "SASS"],
    website: "https://nk18chi.github.io",
    githubUrl: "https://github.com/nk18chi/privateProject",
  },
];
