import React from "react";
import CategoryPage from "../../components/sharedComponents/categoryPage/CategoryPage";

function Woman() {
  return (
    <div>
      <h1
        style={{
          textTransform: "uppercase",
          marginBottom: "36px",
          letterSpacing: "4px",
          fontStyle: "italic",
          backgroundColor: "#224abe",
          width: "100%",
          color: "#fff",
          padding: "12px 24px",
          display: "inline-block",
          boxShadow: "0 4px 12px rgba(34, 74, 190, 0.4)",
          textAlign: "center",
        }}
      >
        Women’s Collection
      </h1>
      <CategoryPage category="Woman" layout="grid" />
    </div>
  );
}

export default Woman;
