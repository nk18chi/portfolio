import React from "react";
import "./SideBar.scss";
import { Button, List, Divider } from "@material-ui/core/";
import { GitHub, LinkedIn, Twitter, Person, Stars, LaptopMac, MailOutline, Description } from "@material-ui/icons/";
import IconButtonLink from "./IconButtonLink";
import MenuListItem from "./MenuListItem";

const SideBar: React.FC = () => {
  const iconData = [
    { url: "https://github.com/nk18chi", element: <GitHub /> },
    { url: "", element: <LinkedIn /> },
    { url: "", element: <Twitter /> },
    { url: "https://leetcode.com/nk18chi/", element: <img src='/portfolio/img/leetcode.svg' alt='' /> },
  ];

  const menuList = [
    { text: "Person", icon: <Person /> },
    { text: "Skill Sets", icon: <Stars /> },
    { text: "Portfolio", icon: <LaptopMac /> },
    { text: "Contact", icon: <MailOutline /> },
  ];

  return (
    <div className='side-bar'>
      <div className='profile'>
        <h2>Naoki Mita</h2>
        <img src='/portfolio/img/main.jpg' alt='' />
        <p>Hello, my name is Naoki Mita. I am a software developer. Take a look at my personal page!</p>
      </div>

      <div className='social-link'>
        <ul>{iconData.length > 0 && iconData.map((i: any) => <IconButtonLink url={i.url} icon={i.element} />)}</ul>
      </div>

      <Button className='view-resume-btn' variant='contained' size='large' startIcon={<Description />}>
        View Resume
      </Button>
      <Divider className='divider' />

      <div className='headline'>
        <List component='nav'>{menuList.length > 0 && menuList.map((list: any) => <MenuListItem text={list.text} icon={list.icon} />)}</List>
      </div>
    </div>
  );
};

export default SideBar;
