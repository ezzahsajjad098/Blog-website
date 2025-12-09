import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, deleteBlog } from "../services/blogservices";
import "../styling/blogdetails.css";

const Blogdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    getBlogById(id)
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    setDeleting(true);
    deleteBlog(id)
      .then(() => {
        alert("Blog deleted successfully!");
        navigate("/");
      })
      .catch((err) => {
        alert("Error deleting blog: " + err.message);
        setDeleting(false);
      });
  };

  const handleUpdate = () => {
    navigate(`/update/${id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>

      <button onClick={handleDelete} disabled={deleting} className="btn btn-delete">
        {deleting ? "Deleting..." : "Delete"}
      </button>

      <button onClick={handleUpdate} className="btn btn-update">
        Update
      </button>
    </div>
  );
};

export default Blogdetails;
