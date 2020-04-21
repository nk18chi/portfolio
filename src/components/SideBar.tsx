import React from "react";
import "./SideBar.scss";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description";
import Profile from "./profile/Profile";
import SocialLink from "./socialLink/SocialLink";
import HeadLine from "./headline/HeadLine";
import Divider from "@material-ui/core/Divider";

const SideBar: React.FC = () => {
  return (
    <div className='side-bar'>
      <Profile />
      <SocialLink />
      <Button className='view-resume-btn' variant='contained' size='large' startIcon={<DescriptionIcon />}>
        View Resume
      </Button>
      <Divider className='divider' />
      <HeadLine />
    </div>
  );
};

export default SideBar;
