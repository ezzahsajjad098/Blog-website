import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, deleteBlog } from "../services/blogservices";

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
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <button
        onClick={handleDelete}
        disabled={deleting}
        style={{
          padding: "8px 16px",
          backgroundColor: deleting ? "#ccc" : "#c42d5d",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: deleting ? "not-allowed" : "pointer",
        }}
      >
        {deleting ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default Blogdetails;


