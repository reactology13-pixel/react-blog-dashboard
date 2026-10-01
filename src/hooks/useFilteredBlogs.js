import { useMemo } from "react";

function useFilteredBlogs(
  blogs,
  searchText,
  selectedCategory
) {
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const search = searchText.toLowerCase();

      const matchesSearch =
        blog.title.toLowerCase().includes(search) ||
        blog.author.toLowerCase().includes(search);

      const matchesCategory =
        selectedCategory === "All" ||
        blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchText, selectedCategory]);

  return filteredBlogs;
}

export default useFilteredBlogs;