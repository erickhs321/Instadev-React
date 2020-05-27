import React, { useState } from "react";
import { Link } from "react-router-dom";
import User from "../User";

import "./Post.scss";

const Post = ({ postInfo, userInfo, showOnlyFigure }) => {
  return (
    <article className="post" data-testid="post">
      {!showOnlyFigure && (
        <header className="post__header">
          <User />
          <button className="post__context">
            <span className="follow-btn">Seguir</span>
          </button>
        </header>
      )}
      <figure className="post__figure">
        <img
          src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-1.jpg"
          alt=""
        />
      </figure>
      {!showOnlyFigure && (
        <nav className="post__controls">
          <button className="post__control">
            <i className="far fa-heart"></i>
          </button>
          <div className="post__status">
            <div className="user">
              <span>
                curtido por <Link to="/">Santino Rowe</Link> e outra{" "}
                <Link to="/">1 pessoa.</Link>
              </span>
            </div>
          </div>
        </nav>
      )}
    </article>
  );
};

export default Post;
