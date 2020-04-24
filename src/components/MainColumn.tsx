import React from "react";
import "./MainColumn.scss";

const MainColumn: React.FC = () => {
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

  return (
    <article className='main-column'>
      <section className='about-me block'>
        <div className='about-me-description'>
          <h1>Naoki Mita (美田 直毅)</h1>
          <h3>Software Developer / Data Analyst</h3>
          <p>
            I am a software developer specialised in frontend and backend development for web apps. Also, I have experimence of being a data analyst.
            I believe I can help you to grow up your products in every aspects. Check out my portfolio and online resume.
          </p>
        </div>
        <div className='about-me-image'>
          <img src='/portfolio/img/about_me.jpg' alt='' />
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
              <li className='skill-each-set'>
                <div className='icon'>
                  <ul>
                    {skill.icons.length > 0 &&
                      skill.icons.map((icon: any) => (
                        <li>
                          <img src={icon} alt='' />
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
              <li>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </li>
            ))}
        </ul>
      </section>
    </article>
  );
};

export default MainColumn;
