function BlogStats({ blogs }) {
  const totalBlogs = blogs.length;

  const featuredBlogs = blogs.filter(
    (blog) => blog.featured
  ).length;

  const totalReadingTime = blogs.reduce(
    (total, blog) => total + blog.readingTime,
    0
  );

  return (
    <div className="stats">
      <div className="stat-card">
        <h3>Total Blogs</h3>
        <strong>{totalBlogs}</strong>
      </div>

      <div className="stat-card">
        <h3>Featured</h3>
        <strong>{featuredBlogs}</strong>
      </div>

      <div className="stat-card">
        <h3>Total Reading</h3>
        <strong>{totalReadingTime} min</strong>
      </div>
    </div>
  );
}

export default BlogStats;