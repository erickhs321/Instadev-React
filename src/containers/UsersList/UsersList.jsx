import React from "react";

import User from "../../components/User";
import Loading from "../../components/Loading";

import "./UsersList.scss";

const UersList = ({ users }) => {
  return (
    <section className="users-list">
      <article className="post" data-testid="user">
        <header class="post__header">
          <User showUsername={true} />
        </header>
      </article>
    </section>
  );
};

export default UersList;
