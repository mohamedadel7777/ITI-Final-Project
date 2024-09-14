import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import AllCategoriesPage from "./Pages/AllCategories/AllCategoriesPage";
import AllBrandsPage from "./Pages/AllCategories/AllBrandsPage";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import Footer from "./Components/Utility/Footer";
import Register from "./Pages/Authentication/Register"




function App() {
  return (
    <div className="font">    
      <NavBarLogin/>
      <BrowserRouter>
       <Routes>
        <Route index element = {<HomePage/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/AllCatagoriesPage" element = {<AllCategoriesPage/>}/>
        <Route path = "/AllBrandsPage" element = {<AllBrandsPage/>}/>
        <Route path = "/Register" element = {<Register/>}/>

       </Routes>
      </BrowserRouter>
      <Footer/>
   </div>
  );
}

export default App;
