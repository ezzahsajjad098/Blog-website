import api from "./api";

export const getAllBlogs = async () => {
  const response = await api.get("/Blogs");
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await api.get(`/Blogs/${id}`);
  return response.data;
};

export const createBlog = async (blog) => {
  const response = await api.post("/Blogs", blog);
  return response.data;
};

export const updateBlog = async (id, updatedBlog) => {
  const response = await api.put(`/Blogs/${id}`, updatedBlog);
  return response.data;
};

export const deleteBlog = async (id) => {
  const response = await api.delete(`/Blogs/${id}`);
  return response.data;
};

