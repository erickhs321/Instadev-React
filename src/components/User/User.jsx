import React from "react";

import { Link } from "react-router-dom";

const User = ({ userInfo }) => {
  const { avatar, name, username, showUsername } = userInfo || "";

  return (
    <Link className="user" to="/users/blackpanther">
      <div className="user__thumb">
        <img
          src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg"
          alt="T'Challa"
        />
      </div>
      <p className="user__name">
        T'Challa
        {showUsername && <span>@{username}</span>}
      </p>
    </Link>
  );
};

export default User;
