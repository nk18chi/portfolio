import React from "react";
import "./SocialLink.scss";
import { GitHub, LinkedIn, Twitter } from "@material-ui/icons/";
import IconButton from "@material-ui/core/IconButton";

const SocialLink: React.FC = () => {
  return (
    <div className='social-link'>
      <ul>
        <IconButton className='icon-button' size='medium' href='https://github.com/nk18chi'>
          <GitHub />
        </IconButton>
        <IconButton className='icon-button' size='medium'>
          <LinkedIn />
        </IconButton>
        <IconButton className='icon-button' size='medium'>
          <Twitter />
        </IconButton>
        <IconButton className='icon-button' size='medium' href='https://leetcode.com/nk18chi/'>
          <img src='/portfolio/img/leetcode.svg' alt='' />
        </IconButton>
      </ul>
    </div>
  );
};

export default SocialLink;
