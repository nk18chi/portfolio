import React from "react";
import "./SideBar.scss";
import { Button, List, Divider } from "@material-ui/core/";
import { GitHub, LinkedIn, Twitter, Person, FolderSpecial, Assessment, LaptopMac, Description } from "@material-ui/icons/";
import IconButtonLink from "./IconButtonLink";
import MenuListItem from "./MenuListItem";

const SideBar: React.FC = () => {
  const iconData = [
    { url: "https://github.com/nk18chi", element: <GitHub /> },
    { url: "https://www.linkedin.com/in/naoki-mita-ab186839/", element: <LinkedIn /> },
    { url: "https://twitter.com/naokien1", element: <Twitter /> },
    { url: "https://leetcode.com/nk18chi/", element: <img src='/portfolio/img/icon/leetcode.svg' alt='' /> },
  ];

  const menuList = [
    { text: "About Me", icon: <Person />, anchor: "about-me" },
    { text: "Skill Sets", icon: <FolderSpecial />, anchor: "skill-sets" },
    { text: "My Values", icon: <Assessment />, anchor: "my-values" },
    { text: "Portfolios", icon: <LaptopMac />, anchor: "portfolios" },
  ];

  return (
    <div className='side-bar'>
      <div className='profile'>
        <h2>Naoki Mita</h2>
        <img src='/portfolio/img/main.jpg' alt='' />
        <p>Hello, my name is Naoki Mita. I am a software developer. Take a look at my personal page!</p>
      </div>

      <div className='social-link'>
        <ul>{iconData.length > 0 && iconData.map((i: any, index: number) => <IconButtonLink key={index} url={i.url} icon={i.element} />)}</ul>
      </div>

      <Button
        href='https://docs.google.com/document/d/1GVcJ-RGKe2-6iPmtFZniVHD4ZNM1zV9tcE2bVAeZGpU/edit'
        className='black-btn'
        variant='contained'
        size='large'
        startIcon={<Description />}
      >
        View Resume
      </Button>
      <Divider className='divider' />

      <div className='headline'>
        <List component='nav'>
          {menuList.length > 0 &&
            menuList.map((list: any, index: number) => <MenuListItem key={index} text={list.text} icon={list.icon} anchor={list.anchor} />)}
        </List>
      </div>
    </div>
  );
};

export default SideBar;
