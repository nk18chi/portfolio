type TExperience = {
  id: number;
  job: {
    title: string;
    contents: string[];
  };
  company: {
    name: string;
    description: string;
    location: string;
  };
  startDate: Date;
  endDate?: Date;
  tools: string[];
};

export const EXPERIENCES: TExperience[] = [
  {
    id: 0,
    job: {
      title: "Full Stack Developer",
      contents: [
        "Design and develop the C2C marketplaces which are built by MERN stack with ElasticSearch",
        "Built a payment/subscription management system with Stripe from scratch",
        "Develop the E-Commerce application to interact with Salesforce Commerce API and GraphQL",
        "Introduce TDD culture with mocha/chai/sinon to the dev team",
        "Enhance deployment frequency by using Jenkins and TDD",
      ],
    },
    company: {
      name: "IdyaFlow Inc",
      description:
        "Idyaflow provides a C2C marketplace software to help business owners build and scale their online businesses. The product enables them to open their own marketplace right away. The marketplace is customizable depending on their business needs and it can be like Amazon and Airbnb, Uber.",
      location: "Vancouver, Canada",
    },
    startDate: new Date("2020-08-01"),
    tools: [
      "Javascript",
      "React",
      "Mongo",
      "Express",
      "Node",
      "Redux",
      "React Native",
      "ElasticSearch",
      "GraphQL",
      "Stripe",
      "Salesforce Commerce API",
      "Cypress",
      "Mocha",
      "Chai",
      "Sinon",
      "Jenkins",
      "Docker",
      "Ansible",
      "Socket.io",
      "CSS-in-JS",
      "AWS",
    ],
  },
  {
    id: 1,
    job: {
      title: "Software Developer",
      contents: [
        "Built a meeting room booking system from scratch by using Typescript and React, Firebase.",
        "Built a real estate app, in which users find properties for sale or rent, from scratch by using Python and Django, MySQL.",
        "Designed test cases by using Unit testing/Factory Boy, and built a development environment to deploy smoothly.",
      ],
    },
    company: {
      name: "Alliance Communication",
      description:
        "Alliance Communications is an office-space leasing company that offers flexible workspaces including physical and virtual shared spaces like WeWork.",
      location: "Tokyo, Japan",
    },
    startDate: new Date("2019-04-01"),
    endDate: new Date("2020-07-31"),
    tools: ["Typescript", "React", "Firebase", "SASS"],
  },
  {
    id: 2,
    job: {
      title: "Product Manager/Data Analyst Manager",
      contents: [
        "Built, hired, and trained a team of 5 to handle marketing and analysis for all products.",
        "Analyzed data with Python and BigQuery, and planned strategies for products and marketing.",
        "Implemented AB test using Javascript and accomplished an increase of 20% in sales of paid subscriptions",
        "Introduced data-visualized dashboards for departments by using Redash, AppScript and Pandas",
        "Developed a marketing tool to analyze SEO/ Adwords / GoogleAd data by using each APIs",
      ],
    },
    company: {
      name: "Bengo4.com Inc",
      description:
        "Bengo4.com is a platform for connecting users to professionals such as lawyers and accountants. They offer legal consulting services and a cloud-based contract completion service like Docusign.",
      location: "Tokyo, Japan",
    },
    startDate: new Date("2014-10-01"),
    endDate: new Date("2018-10-31"),
    tools: ["Python", "BigQuery", "Javascript", "SQL", "pandas", "App Scripts", "Google Analytics API", "Google Adwords API", "SEO", "Adwords"],
  },
  {
    id: 3,
    job: {
      title: "Product Manager",
      contents: [
        "Drew product requirements for the price-comparison app for auction with user story, roadmap, and wireframes by using Sketch.",
        "Planned and got approved with Auto-renewable subscriptions in iTunes, Google Play.",
      ],
    },
    company: {
      name: "Aucfan Co., Ltd",
      description: "Aucfan provides market price quotations for online shopping and auctions, as well as a statistical price comparison service.",
      location: "Tokyo, Japan",
    },
    startDate: new Date("2013-04-01"),
    endDate: new Date("2014-09-30"),
    tools: ["Sketch"],
  },
];
