import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BlogList from "./components/BlogList";
import BlogStats from "./components/BlogStats";

import useFilteredBlogs from "./hooks/useFilteredBlogs";
import { loadBlogs } from "./redux/blogSlice";

function App() {
  const dispatch = useDispatch();

  const {
    blogs,
    searchText,
    selectedCategory,
    loading,
    error,
  } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(loadBlogs());
  }, [dispatch]);

  const filteredBlogs = useFilteredBlogs(
    blogs,
    searchText,
    selectedCategory
  );

  return (
    <div className="app">
      <Header />

      <main className="container">
        <SearchBar />

        <BlogStats blogs={filteredBlogs} />

        {loading && (
          <div className="loading">
            Loading blogs...
          </div>
        )}

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {!loading && !error && (
          <BlogList blogs={filteredBlogs} />
        )}
      </main>
    </div>
  );
}

export default App;