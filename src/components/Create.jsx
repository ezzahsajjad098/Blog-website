import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../services/blogservices";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    createBlog({ title, body, author })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div
      style={{
        width: "450px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2
        style={{
          color: "#c42d5d",
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "24px",
        }}
      >
        Create New Blog
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter Title"
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          placeholder="Enter Body"
          style={{
            padding: "10px",
            fontSize: "16px",
            height: "120px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        >
          <option value="mario">mario</option>
          <option value="yungi">yungi</option>
        </select>

        <button
          disabled={loading}
          style={{
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
            background: "#c42d5d",
            color: "white",
            border: "none",
            borderRadius: "6px",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Adding..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default Create;






