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
<<<<<<< HEAD
import { useSelector } from "react-redux";
import ProductDetails from "./Components/Products/ProductDetails";
import Cart from "./Components/Products/Cart";
import AllProductsPage from "./Pages/AllCategories/AllProductsPage";
=======
import { useSelector } from 'react-redux';
import ProductDetails from "./Components/Products/ProductDetails"
import Cart from "./Components/Products/Cart"



>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="font">
      {isLoggedIn ? <NavBarSignedIn /> : <NavBarLogin />}
      <BrowserRouter>
<<<<<<< HEAD
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
=======
       <Routes>
        <Route index element = {<HomePage/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/AllCatagoriesPage" element = {<AllCategoriesPage/>}/>
        <Route path = "/AllBrandsPage" element = {<AllBrandsPage/>}/>
        <Route path = "/Register" element = {<Register/>}/>
        <Route path="/ReAuthenticate" element={<ReAuthenticate/>} />
        <Route path = "/ProductDetails/:productId" element = {<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>} />

       </Routes>
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
