import React from "react";

import { Link } from "react-router-dom";

const User = ({ infoUser }) => {
  const { avatar, name, username } = infoUser || "";

  return (
    <article className="post">
      <header class="post__header">
        <Link class="user" to="/users/blackpanther">
          <div class="user__thumb">
            <img
              src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg"
              alt="T'Challa"
            />
          </div>
          <div class="user__name">T'Challa</div>
        </Link>
      </header>
    </article>
  );
};

export default User;
