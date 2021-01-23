import React from "react";
import { NavBar } from "./NavBar";
import image from "./images/Team/banana.jpeg";

function Profile() {
  return (
    <div className="main">
      <NavBar />
      <div className="profile-items">
        <div className="row">
          <div className="column">
            <div className="c-image">
              <img src={image}></img>
            </div>
            <button className="button">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
