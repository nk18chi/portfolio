import React from "react";
import "./PortfolioPage.scss";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useLocation } from "react-router-dom";
import { portfolioData } from "../../data/portfolio";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const PortfolioPage: React.FC = (props: any) => {
  const portfolioId = props.match.params.portfolio_id;
  const data: any = portfolioData.find((data: any) => data.id === Number(portfolioId))!;

  return (
    <article className='main-column'>
      <ScrollToTop />
      <section className='portfolio-summary block'>
        <div className='summary-description'>
          <h1>{data.serviceName}</h1>
          <p>{data.serviceDescription}</p>
          <p className='font-little-bold'>Applications</p>
          <ul className='icon'>
            {data.appIcons.length > 0 &&
              data.appIcons.map((icon: any, index: number) => (
                <li key={index}>
                  <img className='app-icon' src={icon} alt='' />
                </li>
              ))}
          </ul>
        </div>
        <div className='summary-image'>
          <img className='main-thumnail' src={data.serviceThumbnail} alt='' />
        </div>
      </section>

      {data.usages && (
        <section className='portfolio-detail block'>
          <h2>How to use</h2>
          {data.usages.length > 0 &&
            data.usages.map((usage: any, index: number) => (
              <div key={index} className='portfolio--detail-container block'>
                <h3 className='font-little-bold'>{usage.headline}</h3>
                {usage.image && <img className='portfolio-detail-image' src={usage.image} alt='' />}
                <p>{usage.description}</p>
                <ul></ul>
              </div>
            ))}
        </section>
      )}

      {data.features && (
        <section className='portfolio-detail block'>
          <h2>Feature points</h2>
          {data.features.length > 0 &&
            data.features.map((feature: any, index: number) => (
              <div key={index} className='portfolio--detail-container block'>
                <h3 className='font-little-bold'>{feature.headline}</h3>
                {feature.image && <img className='portfolio-detail-image' src={feature.image} alt='' />}
                <p>{feature.description}</p>
                <ul></ul>
              </div>
            ))}
        </section>
      )}

      <section className='portfolio-links block'>
        <h2>Go to my app</h2>
        <ul>
          {data.webUrl && (
            <li>
              <Button href={data.webUrl} className='black-btn link-badge' variant='contained' size='large' startIcon={<LinkIcon />}>
                Visit webpage
              </Button>
            </li>
          )}
          {data.githubUrl && (
            <li>
              <Button href={data.githubUrl} className='black-btn link-badge' variant='contained' size='large' startIcon={<GitHubIcon />}>
                See on GitHub
              </Button>
            </li>
          )}
          {data.appstoreUrl && (
            <li>
              <div>
                <Link href={data.appstoreUrl}>
                  <img className='app-store-badge' src='/portfolio/img/app-store-badge.svg' alt='' />
                </Link>
              </div>
            </li>
          )}
          {data.googleplayUrl && (
            <li>
              <div>
                <Link href={data.googleplayUrl}>
                  <img className='google-play-badge link-badge' src='/portfolio/img/google-play-badge.png' alt='' />
                </Link>
              </div>
            </li>
          )}
        </ul>
        {data.memo && <p>※{data.memo}</p>}
      </section>
    </article>
  );
};

export default PortfolioPage;
