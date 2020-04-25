import React from "react";
import "./TopPage.scss";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const TopPage: React.FC = () => {
  const skillSets = [
    {
      title: "Typescript & React",
      description:
        "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate the growth of a diverse and international community of Python programmers.",
      icons: ["/portfolio/img/typescript.svg", "/portfolio/img/react.svg"],
    },
    {
      title: "Python & Django",
      description:
        "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate the growth of a diverse and international community of Python programmers.",
      icons: ["/portfolio/img/python.svg", "/portfolio/img/django.svg"],
    },
    {
      title: "Data Analysis",
      description:
        "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate the growth of a diverse and international community of Python programmers.",
      icons: ["/portfolio/img/google-analytics.svg", "/portfolio/img/google-big-query.png", "/portfolio/img/sql.svg"],
    },
    {
      title: "Mobile Apps",
      description:
        "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate the growth of a diverse and international community of Python programmers.",
      icons: ["/portfolio/img/apple.svg", "/portfolio/img/android.svg"],
    },
  ];

  const myValues = [
    {
      title: "Stay Curious",
      description: "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language.",
    },
    {
      title: "Stay Curious",
      description: "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language.",
    },
    {
      title: "Stay Curious",
      description: "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language.",
    },
  ];

  const portFolios = [
    {
      id: 1,
      image: "/portfolio/img/sample.jpg",
      serviceName: "My Portfolio",
      description: "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language.",
      icons: ["/portfolio/img/typescript.svg", "/portfolio/img/react.svg", "/portfolio/img/firebase.svg"],
    },
    {
      id: 2,
      image: "/portfolio/img/sample.jpg",
      serviceName: "My Portfolio",
      description: "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language.",
      icons: ["/portfolio/img/python.svg", "/portfolio/img/django.svg", "/portfolio/img/mysql.svg", "/portfolio/img/centos.svg"],
    },
    {
      id: 3,
      image: "/portfolio/img/sample.jpg",
      serviceName: "My Portfolio",
      description: "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language.",
      icons: ["/portfolio/img/typescript.svg", "/portfolio/img/react.svg"],
    },
    {
      id: 4,
      image: "/portfolio/img/sample.jpg",
      serviceName: "My Portfolio",
      description: "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language.",
      icons: ["/portfolio/img/typescript.svg", "/portfolio/img/react.svg"],
    },
    {
      id: 5,
      image: "/portfolio/img/sample.jpg",
      serviceName: "My Portfolio",
      description: "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language.",
      icons: ["/portfolio/img/typescript.svg", "/portfolio/img/react.svg"],
    },
  ];

  return (
    <article className='main-column'>
      <section className='about-me block'>
        <div className='summary-description'>
          <h1>Naoki Mita</h1>
          <h3>Software Developer / Data Analyst</h3>
          <p>
            I am a software developer specialised in frontend and backend development for web apps. Also, I have experimence of being a data analyst.
            I believe I can help you to grow up your products in every aspects. Check out my portfolio and online resume.
          </p>
        </div>
        <div className='summary-image'>
          <img className='main-thumnail' src='/portfolio/img/about_me.jpg' alt='' />
        </div>
      </section>

      <section className='skill-sets block'>
        <h2>What I do</h2>
        <p>
          I have experiance as a software developer and a data analyst for clients in Japan. Below is a quick overview of my technical skill sets and
          technologies I use. Check out my portfolio as well.
        </p>
        <ul>
          {skillSets.length > 0 &&
            skillSets.map((skill: any) => (
              <li className='four-elements'>
                <div>
                  <ul className='icon'>
                    {skill.icons.length > 0 &&
                      skill.icons.map((icon: any) => (
                        <li>
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

      <section className='my-values block'>
        <h2>My Values</h2>
        <ul>
          {myValues.length > 0 &&
            myValues.map((value: any) => (
              <li className='three-elements'>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </li>
            ))}
        </ul>
      </section>

      <section className='portfolios block'>
        <h2>PortFolios</h2>
        <ul>
          {portFolios.length > 0 &&
            portFolios.map((portfolio: any) => (
              <li className='three-elements card'>
                <img className='portfolio-thumbnail' src={portfolio.image} alt='' />
                <div className='portfolio-description'>
                  <h3>{portfolio.serviceName}</h3>
                  <p>{portfolio.description}</p>
                  <p className='font-little-bold'>Applications</p>
                  <ul className='icons-ul'>
                    {portfolio.icons.length > 0 &&
                      portfolio.icons.map((path: any) => (
                        <li>
                          <img className='app-icon' src={path} alt='' />
                        </li>
                      ))}
                  </ul>
                  <div className='view-more'>
                    <Link component={RouterLink} to={`/portfolio/p_${portfolio.id}/`}></Link>
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
