import React from "react";

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((b) => (
        <div key={b.id}>
          <h3>{b.title}</h3>
          <p>{b.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;






