import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../services/blogservices";
import "../styling/Create.css";

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog({ title, body })
      .then(() => {
        alert("Blog created successfully!");
        navigate("/");
      })
      .catch((err) => alert("Error: " + err.message));
  };

  return (
    <div className="create-container">
      <h2>Create New Blog</h2>

      <form className="create" onSubmit={handleSubmit}>
        
        <div className="form-block">
          <h3>Title</h3>
          <input 
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required 
          />
        </div>

        <div className="form-block">
          <h3>Body</h3>
          <textarea 
            placeholder="Write your blog here..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default Create;
