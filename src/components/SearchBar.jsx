import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setSearchText,
} from "../redux/blogSlice";

function SearchBar() {
  const searchRef = useRef(null);

  const dispatch = useDispatch();

  const searchText = useSelector(
    (state) => state.blogs.searchText
  );

  const selectedCategory = useSelector(
    (state) => state.blogs.selectedCategory
  );

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div className="search-area">
      <input
        ref={searchRef}
        type="text"
        placeholder="Search blogs..."
        value={searchText}
        onChange={(e) =>
          dispatch(setSearchText(e.target.value))
        }
      />

      <select
        value={selectedCategory}
        onChange={(e) =>
          dispatch(setCategory(e.target.value))
        }
      >
        <option value="All">All Categories</option>
        <option value="React">React</option>
        <option value="Redux">Redux</option>
        <option value="Node">Node</option>
      </select>
    </div>
  );
}

export default SearchBar;