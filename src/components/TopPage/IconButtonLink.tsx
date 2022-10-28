import React from "react";
import "./IconButtonLink.scss";
import { IconButton } from "@material-ui/core/";

const IconButtonLink: React.FC<any | null> = ({ url, icon }) => {
  return (
    <IconButton className='icon-button' size='medium' href={url}>
      {icon}
    </IconButton>
  );
};

export default IconButtonLink;
