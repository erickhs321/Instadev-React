import React from "react";

import Post from "../../components/Post";

const Posts = ({ posts = [1, 2, 3], getUserHandler }) => (
  <div className="container" data-testid="posts">
    <section className="feed">
      <Post />
    </section>
  </div>
);

export default Posts;
