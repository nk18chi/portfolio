import React from "react";
import "./TopPage.scss";
import { Button } from "@material-ui/core";
import { Build, Group, GitHub, LinkedIn, Twitter, Description, RateReview, DoneAll } from "@material-ui/icons";
import LinkIcon from "@material-ui/icons/Link";
import { privateProjectData } from "../../data/privateProject";
import IconButtonLink from "./IconButtonLink";
import { EXPERIENCES } from "../../data/experiences";
import { calcDiffDate, formatDate } from "../../utils/common";
const iconData = [
  { url: "https://github.com/nk18chi", element: <GitHub /> },
  { url: "https://www.linkedin.com/in/naoki-mita-ab186839/", element: <LinkedIn /> },
  { url: "https://twitter.com/naokien1", element: <Twitter /> },
  { url: "https://leetcode.com/nk18chi/", element: <img src='/portfolio/img/icon/leetcode.svg' alt='' /> },
];

type TSkillset = {
  label: string;
  icon: string;
};
const skillSets: TSkillset[] = [
  { label: "Javascript", icon: "/portfolio/img/icon/javascript.svg" },
  { label: "Typescript", icon: "/portfolio/img/icon/typescript.svg" },
  { label: "Python", icon: "/portfolio/img/icon/python.svg" },
  { label: "React", icon: "/portfolio/img/icon/react.svg" },
  { label: "Node", icon: "/portfolio/img/icon/node.svg" },
  { label: "Express", icon: "/portfolio/img/icon/express.svg" },
  { label: "Mongo DB", icon: "/portfolio/img/icon/mongodb.svg" },
  { label: "Next.js", icon: "/portfolio/img/icon/nextjs.svg" },
  { label: "ElasticSearch", icon: "/portfolio/img/icon/elasticsearch.svg" },
  { label: "Firebase", icon: "/portfolio/img/icon/firebase.svg" },
  { label: "AWS", icon: "/portfolio/img/icon/aws.svg" },
  { label: "Django", icon: "/portfolio/img/icon/django.svg" },
  { label: "MySQL", icon: "/portfolio/img/icon/mysql.svg" },
  { label: "WordPress", icon: "/portfolio/img/icon/wordpress.svg" },
  { label: "Docker", icon: "/portfolio/img/icon/docker.svg" },
  { label: "HTML", icon: "/portfolio/img/icon/html.svg" },
  { label: "CSS", icon: "/portfolio/img/icon/css.svg" },
  { label: "SASS", icon: "/portfolio/img/icon/sass.svg" },
  { label: "GitHub Actions", icon: "/portfolio/img/icon/github.svg" },
  { label: "Circle CI", icon: "/portfolio/img/icon/circle-ci.svg" },
  { label: "Jest", icon: "/portfolio/img/icon/jest.svg" },
  { label: "React Testing Library", icon: "/portfolio/img/icon/rtl.svg" },
  { label: "Cypress", icon: "/portfolio/img/icon/cypress.svg" },
  { label: "StoryBook", icon: "/portfolio/img/icon/storybook.svg" },
  { label: "Stripe API", icon: "/portfolio/img/icon/stripe.svg" },
  { label: "Salesforce Commerce API", icon: "/portfolio/img/icon/salesforce.svg" },
];

type TFavarites = {
  title: string;
  description: string[];
  link: string;
};
const favorites: TFavarites[] = [
  {
    title: "A Philosophy of Software Design",
    description: [
      "Cause of complexity is two. Dependencies and obscurity",
      "The ideal design tends to emerge in bits and pieces. Thus, the best approach is to make lots of small investments on continues basis",
      "Interfaces should be desinged to make the common case as simple as possible. Interface should be less and implementation should be bigger.",
    ],
    link: "https://www.amazon.ca/Philosophy-Software-Design-John-Ousterhout/dp/1732102201",
  },
  {
    title: "Clean Code",
    description: [
      "It is a myth that we can get systems “right the first time.” Instead, we should implement only today’s stories, then refactor and expand the system to implement new stories tomorrow. This is the essence of iterative and incremental agility. Test-driven development, refactoring, and the clean code they produce make this work at the code level.",
      "Systems must be clean too.An invasive architecture overwhelms the domain logic and impacts agility.When the domain logic is obscured, quality suffers because bugs find it easier to hide and stories become harder to implement.If agility is compromised, productivity suffers and the benefits of TDD are lost.",
      "Remarkably, following a simple and obvious rule that says we need to have tests and run them continuously impacts our system’s adherence to the primary OO goals of low coupling and high cohesion. Writing tests leads to better designs.",
      "All too often we get our code working and then move on to the next problem without giving sufficient thought to making that code easy for the next person to read. Remember, the most likely next person to read the code will be you. So take a little pride in your workmanship. Spend a little time with each of your functions and classes. Choose better names, split large functions into smaller functions, and generally just take care of what you’ve created. Care is a precious resource.",
    ],
    link: "https://www.amazon.ca/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/",
  },
  {
    title: "Small Functions considered Harmful",
    description: [
      "“duplication is far cheaper than the wrong abstraction”, and thus to “prefer duplication over the wrong abstraction”.",
      "The problem with “small functions” though, is that the quest for small functions ends up begetting even more small functions, all of which tend to be given extremely verbose names in the spirit of making code self documenting and eschewing comments.",
      "Hard to Read: This has already been stated before but it bears reiterating — an explosion of small functions, especially one line functions, makes the codebase inordinately harder to read. This especially hurts those for whom the code should’ve been optimized for in the first place — newcomers.",
    ],
    link: "https://copyconstruct.medium.com/small-functions-considered-harmful-91035d316c29",
  },
  {
    title: "Write Code Every Day",
    description: [
      "Writing code every day makes lots of benefits as a developer.",
      "Code as habit. This is about a change that you’re making in your life for yourself not a change that you’re making to satisfy someone else’s perception of your work.",
      "Background processing. Your current task is frequently running in the back of your mind when I go for a walk, or take a shower, or any of the other non-brain-using activities I participate in.",
    ],
    link: "https://johnresig.com/blog/write-code-every-day",
  },
];

const myValues = [
  {
    icon: <Build className='color-gray' />,
    title: "Passion for making code clean",
    description:
      "As a developer, you must spend much more time to read code than write it. So, I believe it is more important to think of how other developers will understand my code than how I like to construct it.",
  },
  {
    icon: <DoneAll className='color-green' />,
    title: "Test believer",
    description:
      "Having test code makes the code understandable, and other developers are not afraid of changing your code without breaking existing functionalities.",
  },
  {
    icon: <RateReview className='color-lightblue' />,
    title: "Love to review code and be reviewed",
    description:
      "I would like to know how other developers think of my code and how they write code. It is a great chance of learning new from others!",
  },
  {
    icon: <Group className='color-lightseagreen' />,
    title: "Working as team takes you go further",
    description:
      "I believe you can achieve more and get your goal faster than you do alone. The great communication is built by the atmosphere that everyone can feel free to ask anything with good manners.",
  },
];

const TopPage: React.FC = () => {
  document.title = "Naoki Mita - privateProject, online resume";
  return (
    <article className='main-column'>
      <section id='about-me' className='about-me block'>
        <div className='summary-description'>
          <h1>Naoki Mita</h1>
          <h3>Software Developer / Data Analyst</h3>
          <p>
            I am a software developer specialized in frontend and backend development for web apps. Also, I have experience of being a data analyst. I
            believe I can help you to grow up your products in every aspect. Check out my privateProject and online resume.
          </p>
          <div id='externalLinks'>
            <Button
              href='https://docs.google.com/document/d/1GVcJ-RGKe2-6iPmtFZniVHD4ZNM1zV9tcE2bVAeZGpU/edit'
              className='black-btn'
              variant='contained'
              size='large'
              startIcon={<Description />}
            >
              View Resume
            </Button>
            <div className='social-link'>
              <ul>{iconData.length > 0 && iconData.map((i: any, index: number) => <IconButtonLink key={index} url={i.url} icon={i.element} />)}</ul>
            </div>
          </div>
        </div>
        <div className='summary-image'>
          <img className='main-thumnail' src='/portfolio/img/about_me.jpg' alt='' />
        </div>
      </section>

      <section id='experiences-container' className='block'>
        <h2>Experiences</h2>
        {EXPERIENCES.map((exp) => {
          const diff = calcDiffDate(exp.startDate, exp.endDate || new Date());
          return (
            <div key={exp.id} className='experience'>
              <div className='experience-headline'>
                <h3>{exp.job.title}</h3>
                <p>
                  {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"} /{" "}
                  {diff.year === 0 ? "" : diff.year > 1 ? `${diff.year} years` : `${diff.year} year`}{" "}
                  {diff.month === 0 ? "" : diff.month > 1 ? `${diff.month} months` : `${diff.month} month`}
                </p>
              </div>
              <p className='company-name'>{exp.company.name}</p>
              <p>{exp.company.description}</p>
              <ul className='list'>
                {exp.job.contents.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p>Tech Stack: {exp.tools.map((tool) => tool).join(", ")}</p>
            </div>
          );
        })}
      </section>

      <section id='skill-sets' className='skill-sets block'>
        <h2>Skill Sets</h2>
        <div id='skill-set-conainer'>
          {skillSets.length > 0 &&
            skillSets.map((skill, index: number) => (
              <div key={index} className='skill-set'>
                <img className='app-icon' src={skill.icon} alt='' />
                {skill.label}
              </div>
            ))}
        </div>
      </section>

      <section id='my-values' className='block'>
        <h2>My Values</h2>
        <div className='stack'>
          {myValues.length > 0 &&
            myValues.map((value: any, index: number) => (
              <div key={index} className='vstack w-50'>
                <div className='hstack'>
                  <span>{value.icon}</span>
                  <h3>{value.title}</h3>
                </div>
                <p>{value.description}</p>
              </div>
            ))}
        </div>
      </section>

      <section id='my-favorites' className='block'>
        <h2>Faves</h2>
        <div id='my-favorites-container'>
          {favorites.length > 0 &&
            favorites.map((favorite, i: number) => (
              <div key={i} className='my-favorite'>
                <h3>
                  <a href={favorite.link} target='_blank_'>
                    {favorite.title}
                  </a>
                </h3>
                <ul className='list'>
                  {favorite.description.map((desc, j) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </section>

      <section id='privateProjects' className='privateProjects block'>
        <h2>Private Projects</h2>
        <ul>
          {privateProjectData.length > 0 &&
            privateProjectData.map((privateProject) => (
              <li key={privateProject.id} className='privateProject-container'>
                <div className='privateProject-description'>
                  <h3>{privateProject.serviceName}</h3>
                  <p>{privateProject.serviceDescription}</p>
                  <p className='tool-list'>Tools: {privateProject.tools.length > 0 && privateProject.tools.map((tool) => tool).join(", ")}</p>
                  <div className='icon'>
                    {privateProject.githubUrl && <IconButtonLink url={privateProject.githubUrl} icon={<GitHub />} />}
                    {privateProject.website && <IconButtonLink url={privateProject.website} icon={<LinkIcon />} />}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </article>
  );
};

export default TopPage;
