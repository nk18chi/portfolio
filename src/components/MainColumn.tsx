import React from "react";
import "./MainColumn.scss";

const MainColumn: React.FC = () => {
  return (
    <article className='main-column'>
      <section className='about-me block'>
        <div className='about-me-description'>
          <h1>Naoki Mita (美田 直毅)</h1>
          <h2>Software Developer / Data Analyst</h2>
          <p>
            I am a software developer specialised in frontend and backend development for web apps. Also, I have experimence of being a data analyst.
            I believe I can help you to grow up your products in every aspects. Check out my portfolio and online resume.
          </p>
        </div>
        <div className='about-me-image'>
          <img src='/portfolio/img/about_me.jpg' alt='' />
        </div>
      </section>
    </article>
  );
};

export default MainColumn;
