import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, updateBlog } from "../services/blogservices";
import "../styling/Update.css";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    getBlogById(id).then((blog) => {
      setTitle(blog.title);
      setBody(blog.body);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(id, { title, body })
      .then(() => {
        alert("Blog updated successfully!");
        navigate(`/blogs/${id}`);
      })
      .catch((err) => alert("Error: " + err.message));
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <h2>Update Blog</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} required />
      <button type="submit" className="btn btn-submit">Update</button>
    </form>
  );
};

export default Update;
