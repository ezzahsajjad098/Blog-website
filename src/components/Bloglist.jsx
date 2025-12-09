import React from "react";
import { Link } from "react-router-dom";
import "../styling/bloglist.css";

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <h2>{title}</h2>

      <div className="blog-list">
        {blogs.map((b) => (
          <div key={b.id} className="blog-card">
            <h3>{b.title}</h3>
            <p>{b.body}</p>

            <Link to={`/blog/${b.id}`}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
