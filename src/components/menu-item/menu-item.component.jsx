import React from "react";
import "./menu-item.styles.scss";
import { useNavigate, useMatch } from "react-router-dom";

const MenuItem = ({
  title,
  subtitle,
  imageUrl,
  size,

  linkUrl,
}) => {
  let navigate = useNavigate();
  let match = useMatch("/");
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`${match.pathnameBase}${linkUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default MenuItem;
