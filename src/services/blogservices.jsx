const base_url = "http://localhost:8000/Blogs";

export const getAllBlogs = async () => {
  return fetch(base_url).then((response) => {
    if (!response.ok) throw new Error("Failed to fetch blogs");
    return response.json();
  });
};

export const getBlogById = async (id) => {
  return fetch(`${base_url}/${id}`).then((response) => {
    if (!response.ok) throw new Error("Blog not found");
    return response.json();
  });
};

export const createBlog = async (blog) => {
  return fetch(base_url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  }).then((response) => {
    if (!response.ok) throw new Error("Failed to create blog");
    return response.json();
  });
};

export const updateBlog = async (id, blog) => {
  return fetch(`${base_url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  }).then((response) => {
    if (!response.ok) throw new Error("Failed to update blog");
    return response.json();
  });
};

export const deleteBlog = async (id) => {
  return fetch(`${base_url}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) throw new Error("Failed to delete blog");

    // Some servers return no JSON for DELETE
    return response.text().then((text) => (text ? JSON.parse(text) : {}));
  });
};
