import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hover from "./Hover";
import { CompTemp } from "./CompTemp";
export const InfoTile = (props) => {
  const handleClick = (bizID) => {
  };
  const [isShown, setIsShown] = useState(false);
  const bizID = props.ID;
  return (
    <div className="c-image">
      <Link
        to={{
          pathname: "/comptemp",
          state: { bizID: bizID }
        }}
      >
        <img
          className="mouse-action"
          onMouseOver={() => setIsShown(true)}
          onMouseOut={() => setIsShown(false)}
          src={props.image}
        />
        <div className="box-text" onClick={handleClick(props.ID)}>
          {props.BizName}:{props.Options}
        </div>
      </Link>
    </div>
  );
};
