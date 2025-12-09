import { useState, useEffect } from "react";
import Bloglist from "../components/Bloglist.jsx";
import { getAllBlogs } from "../services/blogservices";
import "../styling/Home.css";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllBlogs()
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="home-loading">Loading blogs...</div>;
  if (error) return <div className="home-error">{error}</div>;

  return <Bloglist blogs={blogs} title="All Blogs" />;
}

export default Home;