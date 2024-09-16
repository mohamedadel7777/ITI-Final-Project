import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import AllCategoriesPage from "./Pages/AllCategories/AllCategoriesPage";
import AllBrandsPage from "./Pages/AllCategories/AllBrandsPage";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import NavBarSignedIn from "./Components/Utility/NavBarSignedIn";
import Footer from "./Components/Utility/Footer";
import Register from "./Pages/Authentication/Register";
import ReAuthenticate from "./Pages/Authentication/ReAuthenticate";
import { useSelector } from "react-redux";
import ProductDetails from "./Components/Products/ProductDetails";
import Cart from "./Components/Products/Cart";
import AllProductsPage from "./Pages/AllCategories/AllProductsPage";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="font">
      {isLoggedIn ? <NavBarSignedIn /> : <NavBarLogin />}
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AllCatagoriesPage" element={<AllCategoriesPage />} />
          <Route path="/AllBrandsPage" element={<AllBrandsPage />} />
          <Route path="/AllProductsPage" element={<AllProductsPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ReAuthenticate" element={<ReAuthenticate />} />
          <Route
            path="/ProductDetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
