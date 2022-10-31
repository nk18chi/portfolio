import React from "react";
import "./MenuListItem.scss";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core/";
import { HashLink } from "react-router-hash-link";

const MenuListItem: React.FC<any | null> = ({ text, icon, anchor, children }) => {
  return (
    <HashLink className='headline-link' to={`#${anchor}`}>
      <ListItem button className='headline-list-item'>
        {icon && <ListItemIcon className='headline-icon'>{icon}</ListItemIcon>}
        <ListItemText className='headline-text' primary={`- ${text}`} />
      </ListItem>
    </HashLink>
  );
};

export default MenuListItem;
