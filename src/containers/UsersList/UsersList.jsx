import React from "react";

import User from "../../components/User";
import Loading from "../../components/Loading";

import "./UsersList.scss";

const UersList = ({ users }) => {
  return (
    <section className="users-list" data-testid="user-list">
      <article className="post">
        <header className="post__header">
          <User showUsername={true} />
        </header>
      </article>
    </section>
  );
};

export default UersList;
