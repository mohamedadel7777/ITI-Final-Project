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
import { useSelector } from 'react-redux';
import ProductDetails from "./Components/Products/ProductDetails";
import Cart from "./Components/Products/Cart";
import AllProductsPage from "./Pages/AllCategories/AllProductsPage";
import AdminPage from "./Pages/Home/AdminPage";
import BuyNowPage from "./Components/Products/BuyNowPage";


function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.IsAdmin);
  return (
    <div className="font">
      
   {!isAdmin ? (
    isLoggedIn ? (
    <NavBarSignedIn />
    ) : (
    <NavBarLogin />
    )
     ) : null}
    

    
      <BrowserRouter>
       <Routes>
        <Route index element = {<HomePage/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/AllCatagoriesPage" element = {<AllCategoriesPage/>}/>
        <Route path = "/AllBrandsPage" element = {<AllBrandsPage/>}/>
        <Route path = "/Register" element = {<Register/>}/>
        <Route path="/ReAuthenticate" element={<ReAuthenticate/>} />
        <Route path="/AllProductsPage" element={<AllProductsPage />} />
        <Route path = "/ProductDetails/:productId" element = {<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/Admin" element={<AdminPage/>}/>
        <Route path="/buynow" element={<BuyNowPage />} />
       </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
