import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/AuthSlice";
import { Button } from "react-bootstrap";

const reauthSchema = z.object({
  Email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email" }),
  Password: z.string().min(1, { message: "Password is required" }),
});

const ReAuthenticate = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(reauthSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); 
  

  const onSubmit = (data) => {
    
     if (user && user.Email === data.Email && user.Password === data.Password) {
      navigate("/Login");
      dispatch(logout());

       }else {
      alert("Invalid credentials!");
    }

    
  };

  return (
    <div className="container mt-5" style={{minHeight: "670px"}}>
      <h2>Re Enter your Email and Password to Log Out</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            {...register("Email")}
          />
          {errors.Email && <p className="text-danger">{errors.Email.message}</p>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            {...register("Password")}
          />
          {errors.Password && <p className="text-danger">{errors.Password.message}</p>}
        </div>
        <button type="submit" 
        style={{backgroundColor: "#ff0000",
         color:"white",
          border:"2px solid #ff0000",
          borderRadius:"20px",
           width:"100px", height: "50px"}}  >Logout</button>
      </form>
    </div>
  );
};

export default ReAuthenticate;
