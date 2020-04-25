import React from "react";
import "./PortfolioPage.scss";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";

const PortfolioPage: React.FC = () => {
  const data = {
    id: 1,
    serviceName: "My Portfolio",
    serviceThumbnail: "/portfolio/img/sample.jpg",
    serviceDescription: "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language.",
    appIcons: ["/portfolio/img/typescript.svg", "/portfolio/img/react.svg", "/portfolio/img/firebase.svg"],
    usages: [
      {
        headline: "test",
        description:
          "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate the growth of a diverse and international community of Python programmers.",
        image: "/portfolio/img/sample.jpg",
      },
      {
        headline: "test",
        description:
          "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate the growth of a diverse and international community of Python programmers.",
        image: "/portfolio/img/sample.jpg",
      },
      {
        headline: "test",
        description:
          "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate the growth of a diverse and international community of Python programmers.",
        image: "/portfolio/img/sample.jpg",
      },
      {
        headline: "test",
        description:
          "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate the growth of a diverse and international community of Python programmers.",
        image: "/portfolio/img/sample.jpg",
      },
    ],
    features: [
      {
        headline: "features",
        description:
          "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate the growth of a diverse and international community of Python programmers.",
        image: "/portfolio/img/sample.jpg",
      },
      {
        headline: "features",
        description:
          "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate the growth of a diverse and international community of Python programmers.",
      },
    ],
    webUrl: "https://github.com/nk18chi/",
    githubUrl: "https://github.com/nk18chi/",
    memo: "memo",
  };
  return (
    <article className='main-column'>
      <section className='portfolio-summary block'>
        <div className='summary-description'>
          <h1>{data.serviceName}</h1>
          <p>{data.serviceDescription}</p>
          <p className='font-little-bold'>Applications</p>
          <ul className='icon'>
            {data.appIcons.length > 0 &&
              data.appIcons.map((icon: any) => (
                <li>
                  <img className='app-icon' src={icon} alt='' />
                </li>
              ))}
          </ul>
        </div>
        <div className='summary-image'>
          <img className='main-thumnail' src={data.serviceThumbnail} alt='' />
        </div>
      </section>

      <section className='portfolio-detail block'>
        <h2>How to use</h2>
        {data.usages.length > 0 &&
          data.usages.map((usage: any) => (
            <div className='portfolio--detail-container block'>
              <h3 className='font-little-bold'>{usage.headline}</h3>
              {usage.image && <img className='portfolio-detail-image' src={usage.image} alt='' />}
              <p>{usage.description}</p>
              <ul></ul>
            </div>
          ))}
      </section>

      <section className='portfolio-detail block'>
        <h2>Feature points</h2>
        {data.features.length > 0 &&
          data.features.map((feature: any) => (
            <div className='portfolio--detail-container block'>
              <h3 className='font-little-bold'>{feature.headline}</h3>
              {feature.image && <img className='portfolio-detail-image' src={feature.image} alt='' />}
              <p>{feature.description}</p>
              <ul></ul>
            </div>
          ))}
      </section>

      <section className='portfolio-links block'>
        <h2>Go to my app</h2>
        <ul>
          <li>
            <Button className='black-btn link-badge' variant='contained' size='large' startIcon={<LinkIcon />}>
              Visit webpage
            </Button>
          </li>
          <li>
            <Button className='black-btn link-badge' variant='contained' size='large' startIcon={<GitHubIcon />}>
              See on GitHub
            </Button>
          </li>
          <li>
            <div>
              <Link href=''>
                <img className='app-store-badge' src='/portfolio/img/app-store-badge.svg' alt='' />
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link href=''>
                <img className='google-play-badge link-badge' src='/portfolio/img/google-play-badge.png' alt='' />
              </Link>
            </div>
          </li>
        </ul>
        {data.memo && <p>※{data.memo}</p>}
      </section>
    </article>
  );
};

export default PortfolioPage;
