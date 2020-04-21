import React from "react";
import "./HeadLine.scss";
import List from "@material-ui/core/List";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core/";
import { Person, Stars, LaptopMac, MailOutline } from "@material-ui/icons/";
const HeadLine: React.FC = () => {
  return (
    <div className='headline'>
      <List component='nav'>
        <ListItem button className='headline-list-item'>
          <ListItemIcon>
            <Person className='headline-icon' />
          </ListItemIcon>
          <ListItemText className='headline-text' primary='About Me' />
        </ListItem>
        <ListItem button className='headline-list-item'>
          <ListItemIcon>
            <Stars className='headline-icon' />
          </ListItemIcon>
          <ListItemText className='headline-text' primary='Skills' />
        </ListItem>
        <ListItem button className='headline-list-item'>
          <ListItemIcon>
            <LaptopMac className='headline-icon' />
          </ListItemIcon>
          <ListItemText className='headline-text' primary='Portfolio' />
        </ListItem>
        <ListItem button className='headline-list-item'>
          <ListItemIcon>
            <MailOutline className='headline-icon' />
          </ListItemIcon>
          <ListItemText className='headline-text' primary='Contact' />
        </ListItem>
      </List>
    </div>
  );
};

export default HeadLine;
