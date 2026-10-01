import { memo } from "react";

function BlogCard({
  blog,
  onDelete,
  onToggleFeatured,
}) {
  return (
    <article className="blog-card">
      <div className="card-top">
        <span className="category">
          {blog.category}
        </span>

        {blog.featured && (
          <span className="featured">
            ★ Featured
          </span>
        )}
      </div>

      <h2>{blog.title}</h2>

      <p className="author">
        Author: {blog.author}
      </p>

      <p className="reading">
        Reading Time: {blog.readingTime} minutes
      </p>

      <div className="card-buttons">
        <button
          onClick={() => onToggleFeatured(blog.id)}
        >
          {blog.featured
            ? "Remove Featured"
            : "Make Featured"}
        </button>

        <button
          className="delete"
          onClick={() => onDelete(blog.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default memo(BlogCard);