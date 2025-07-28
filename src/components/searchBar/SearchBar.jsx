import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setSearchQuery,
  selectFilteredProducts,
} from "../../features/search/searchSlice";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => state.search.query);
  const filteredProducts = useSelector(selectFilteredProducts);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setSearchQuery(inputValue));
    }, 300);

    return () => clearTimeout(handler);
  }, [inputValue, dispatch]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSelectProduct = (productId) => {
    navigate(`/product/${productId}`);
    dispatch(setSearchQuery(""));
  };

  return (
    <div style={{ position: "relative" }}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleChange}
          aria-label="Search products"
        />
        <button
          type="submit"
          className={styles.searchButton}
          aria-label="Search"
        >
          🔍
        </button>
      </form>

      {searchTerm && filteredProducts.length > 0 && (
        <div className={styles.searchDropdown}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={styles.searchDropdownItem}
              onClick={() => {
                if (onSearch) {
                  onSearch(product);
                } else {
                  handleSelectProduct(product.id);
                }
              }}
            >
              <div className={styles.searchResult}>
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "3px",
                  }}
                />

                {product.title}
              </div>

              <div style={{ color: "#007b5e", fontWeight: "600" }}>
                $ {product.price}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
