import React from "react";
import "./MenuListItem.scss";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core/";

const MenuListItem: React.FC<any | null> = ({ text, icon }) => {
  return (
    <ListItem button className='headline-list-item'>
      <ListItemIcon className='headline-icon'>{icon}</ListItemIcon>
      <ListItemText className='headline-text' primary={text} />
    </ListItem>
  );
};

export default MenuListItem;
