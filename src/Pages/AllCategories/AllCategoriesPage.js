import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";

const AllCategoriesPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <div className="admin-content-text-products mt-3">All Categories</div>
      <CategoryContainer />
    </div>
  );
};

export default AllCategoriesPage;
