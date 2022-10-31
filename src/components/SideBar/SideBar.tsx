import React from "react";
import "./SideBar.scss";
import { List } from "@material-ui/core/";
import { Person, FolderSpecial, Assessment, LaptopMac } from "@material-ui/icons/";
import MenuListItem from "./MenuListItem";
import { EXPERIENCES } from "../../data/experiences";
import { PRIVATE_PROJECTS } from "../../data/privateProject";
import BaseTimeline from "./BaseTimeline";

const SideBar: React.FC = () => {
  const menuList = [
    {
      text: "About Me",
      icon: <Person />,
      anchor: "about-me",
    },
    {
      text: "Experiences",
      icon: <Person />,
      anchor: "experiences-container",
      timeline: EXPERIENCES.map((exp) => ({
        id: exp.id,
        label: exp.company.name,
        anchor: `#experience-${exp.id}`,
      })),
    },
    { text: "Skill Sets", icon: <FolderSpecial />, anchor: "skill-sets" },
    { text: "My Values", icon: <Assessment />, anchor: "my-values" },
    { text: "Favorites", icon: <Assessment />, anchor: "my-favorites" },
    {
      text: "Private Projects",
      icon: <LaptopMac />,
      anchor: "privateProjects",
      timeline: PRIVATE_PROJECTS.map((project) => ({
        id: project.id,
        label: project.serviceName,
        anchor: `#privateProject-${project.id}`,
      })),
    },
  ];

  return (
    <aside className='side-bar'>
      <div className='headline'>
        <List component='nav'>
          {menuList.length > 0 &&
            menuList.map((list: any, index: number) => (
              <>
                <MenuListItem key={index} text={list.text} anchor={list.anchor} />
                <BaseTimeline lines={list.timeline} />
              </>
            ))}
        </List>
      </div>
    </aside>
  );
};

export default SideBar;
