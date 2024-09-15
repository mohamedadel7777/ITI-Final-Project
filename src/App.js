import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import AllCategoriesPage from "./Pages/AllCategories/AllCategoriesPage";
import AllBrandsPage from "./Pages/AllCategories/AllBrandsPage";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import NavBarSignedIn from "./Components/Utility/NavBarSignedIn";
import Footer from "./Components/Utility/Footer";
import Register from "./Pages/Authentication/Register"
import ReAuthenticate from "./Pages/Authentication/ReAuthenticate";
import { useSelector } from 'react-redux';




function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); 
  return (
     
    <div className="font">    
      {isLoggedIn ? <NavBarSignedIn/> : <NavBarLogin/> } 
      <BrowserRouter>
       <Routes>
        <Route index element = {<HomePage/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/AllCatagoriesPage" element = {<AllCategoriesPage/>}/>
        <Route path = "/AllBrandsPage" element = {<AllBrandsPage/>}/>
        <Route path = "/Register" element = {<Register/>}/>
        <Route path="/ReAuthenticate" element={<ReAuthenticate/>} />

       </Routes>
      </BrowserRouter>
      <Footer/>
   </div>
  );
}

export default App;
