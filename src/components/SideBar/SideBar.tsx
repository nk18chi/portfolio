import React from "react";
import "./SideBar.scss";
import { List } from "@material-ui/core/";
import { Person, FolderSpecial, Assessment, LaptopMac } from "@material-ui/icons/";
import MenuListItem from "./MenuListItem";

const SideBar: React.FC = () => {
  const menuList = [
    { text: "About Me", icon: <Person />, anchor: "about-me" },
    { text: "Skill Sets", icon: <FolderSpecial />, anchor: "skill-sets" },
    { text: "My Values", icon: <Assessment />, anchor: "my-values" },
    { text: "Portfolios", icon: <LaptopMac />, anchor: "portfolios" },
  ];

  return (
    <aside className='side-bar'>
      <div className='headline'>
        <List component='nav'>
          {menuList.length > 0 &&
            menuList.map((list: any, index: number) => <MenuListItem key={index} text={list.text} icon={list.icon} anchor={list.anchor} />)}
        </List>
      </div>
    </aside>
  );
};

export default SideBar;
