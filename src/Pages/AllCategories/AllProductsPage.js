import React from "react";
import ProductContainer from "../../Components/Products/ProductContainer";

function AllProducts() {
  return (
    <div style={{ minHeight: "670px" }}>
      <div className="admin-content-text-products mt-3">All Products</div>
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
    </div>
  );
}

export default AllProducts;
