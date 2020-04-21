import React from "react";
import "./Profile.scss";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <h1>Naoki Mita</h1>
      <img src='/portfolio/img/main.jpg' alt='' />
      <p>Hello, my name is Naoki Mita. I am a software developer. Take a look at my personal page!</p>
    </div>
  );
};

export default Profile;
