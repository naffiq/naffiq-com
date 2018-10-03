import * as React from "react";
import { Link } from "react-router-dom";

interface Post {
  id: String;
  slug: String;
  title: String;
  body: String;
  image: String;
  isActive: boolean;
  createdAt: String;
  updatedAt: String;
}

interface Props {
  post: Post;
}

export default ({ post }: Props) => {
  return (
    <article>
      <h1>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h1>

      <p>{post.body}</p>
    </article>
  );
};
