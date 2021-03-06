import React from "react";
import "./TopPage.scss";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { Favorite, FindReplace, Group } from "@material-ui/icons";
import { portfolioData } from "../../data/portfolio";

const TopPage: React.FC = () => {
  document.title = "Naoki Mita - portfolio, online resume";
  const skillSets = [
    {
      title: "Typescript & React",
      description:
        "I have experience in building a React app with Firebase. I am familiar with React Hooks. I can program by Javascript but I prefer typescript to javascript. It helps me to make apps safe and find the bug easily.",
      icons: ["/portfolio/img/icon/typescript.svg", "/portfolio/img/icon/react.svg"],
    },
    {
      title: "Python & Django",
      description:
        "I have experience in publishing some apps that are developed by Django and MySQL. Also, I can make use of Rest API to handle data from the database and write test cases by fixtures and factory-boy.",
      icons: ["/portfolio/img/icon/python.svg", "/portfolio/img/icon/django.svg"],
    },
    {
      title: "Data Analysis",
      description:
        "I know how to get data from google analytics by Python(via API) or BigQuery and data from the database by SQL. I can analyze how users use your product by investigating those data and come up with a new strategy.",
      icons: ["/portfolio/img/icon/google-analytics.svg", "/portfolio/img/icon/google-big-query.png", "/portfolio/img/icon/sql.svg"],
    },
    {
      title: "Mobile Apps",
      description:
        "The experience in building web apps is bigger than one in mobile apps but I have knowledge of mobile apps as well and I am able to simple apps in iOS(Swift) and Android(Kotlin).",
      icons: ["/portfolio/img/icon/apple.svg", "/portfolio/img/icon/android.svg"],
    },
  ];

  const myValues = [
    {
      icon: <Favorite />,
      title: "Passion for building apps",
      description: "I love building apps and thinking about how make users comfortable. I never stop learning and building the app even free time.",
    },
    {
      icon: <FindReplace />,
      title: "Think efficiently",
      description: "I always keep looking for the way to reduce time. I love automation and effective-algorithm.",
    },
    {
      icon: <Group />,
      title: "Work together well",
      description:
        "I can smoothly work with a team from other departments because I have knowledge of not only building apps but also analysis and marketing, design etc.",
    },
  ];

  return (
    <article className='main-column'>
      <section id='about-me' className='about-me block'>
        <div className='summary-description'>
          <h1>Naoki Mita</h1>
          <h3>Software Developer / Data Analyst</h3>
          <p>
            I am a software developer specialized in frontend and backend development for web apps. Also, I have experience of being a data analyst. I
            believe I can help you to grow up your products in every aspect. Check out my portfolio and online resume.
          </p>
        </div>
        <div className='summary-image'>
          <img className='main-thumnail' src='/portfolio/img/about_me.jpg' alt='' />
        </div>
      </section>

      <section id='skill-sets' className='skill-sets block'>
        <h2>Skill sets</h2>
        <p>
          I have experience as a software developer and a data analyst for clients in Japan. Below is a quick overview of my technical skillsets and
          technologies I use. Check out my portfolio as well.
        </p>
        <ul>
          {skillSets.length > 0 &&
            skillSets.map((skill: any, index: number) => (
              <li key={index} className='four-elements'>
                <div>
                  <ul className='icon'>
                    {skill.icons.length > 0 &&
                      skill.icons.map((icon: any, index: number) => (
                        <li key={index}>
                          <img className='app-icon' src={icon} alt='' />
                        </li>
                      ))}
                  </ul>
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </li>
            ))}
        </ul>
      </section>

      <section id='my-values' className='block'>
        <h2>My Values</h2>
        <ul>
          {myValues.length > 0 &&
            myValues.map((value: any, index: number) => (
              <li key={index} className='three-elements'>
                <p className='center app-big-icon'>{value.icon}</p>
                <h3 className='center'>{value.title}</h3>
                <p>{value.description}</p>
              </li>
            ))}
        </ul>
      </section>

      <section id='portfolios' className='portfolios block'>
        <h2>PortFolios</h2>
        <ul>
          {portfolioData.length > 0 &&
            portfolioData.map((portfolio: any) => (
              <li key={portfolio.id} className='three-elements card'>
                <img className='portfolio-thumbnail' src={portfolio.serviceThumbnail} alt='' />
                <div className='portfolio-description'>
                  <h3>{portfolio.serviceName}</h3>
                  <p>{portfolio.serviceDescription}</p>
                  <p className='font-little-bold'>Applications</p>
                  <ul className='icons-ul'>
                    {portfolio.appIcons.length > 0 &&
                      portfolio.appIcons.map((icon: any, index: number) => (
                        <li key={index}>
                          <img className='app-icon' src={icon} alt='' />
                        </li>
                      ))}
                  </ul>
                  <div className='view-more'>
                    <Link component={RouterLink} to={`/portfolio/p_${portfolio.id}/`}>
                      view more
                    </Link>
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
