import { useCallback } from "react";
import { useDispatch } from "react-redux";
import BlogCard from "./BlogCard";

import {
  deleteBlog,
  toggleFeatured,
} from "../redux/blogSlice";

function BlogList({ blogs }) {
  const dispatch = useDispatch();

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteBlog(id));
    },
    [dispatch]
  );

  const handleToggleFeatured = useCallback(
    (id) => {
      dispatch(toggleFeatured(id));
    },
    [dispatch]
  );

  if (blogs.length === 0) {
    return (
      <div className="no-results">
        No blogs found.
      </div>
    );
  }

  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onDelete={handleDelete}
          onToggleFeatured={handleToggleFeatured}
        />
      ))}
    </div>
  );
}

export default BlogList;