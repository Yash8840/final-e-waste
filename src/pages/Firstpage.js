import React, { useContext } from "react";
import search from "./search.png";
import user from "./user.png";
import cycle from "./cycle.png";
import ModalContext from "../Context/ModalContext";
import AuthContext from "../Context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo-black.png';
function Firstpage() {
  const modalCtx = useContext(ModalContext);
  const openHandler = () => {
    modalCtx.openModal();
    console.log("opened");
  };
  
  const logOutHandler = () => {
    signOut(auth);
  };
  const redeemHandler = ()=>{
    if(!authCtx.currentUser){
      openHandler();
    }
  }
  const authCtx = useContext(AuthContext);
  return (
    <div className="bg-[#1B5F3A] shadow-4xl shadow-black h-[100vh]">
      <div className="text-[#E1E1E1]  flex justify-between gap-[4px] mx-auto w-[95%] py-[1rem] text-center items-center">
        <img src={logo} style={{height:'74px'}}  className=" font-[Merriweather]"/>
        <div className="flex justify-between text-center items-center text-[#ACACAC] gap-[5rem] ">
          <p className="text-[1.1rem]">Home</p>
          <NavLink className="text-[1.1rem]" to="/redeemVouchers">
            <span onClick={redeemHandler}>Redeem Vouchers</span>
          </NavLink>
          <NavLink className="text-[1.1rem]" to="/verify">
            <span onClick={redeemHandler}>Add Receipt</span>
          </NavLink>
          {!authCtx.currentUser && (
            <p className="text-[1.1rem]" onClick={openHandler} style={{cursor:'pointer'}}>
              Login / Sign Up
            </p>
          )}
          {authCtx.currentUser && (
            <p className="text-[1.1rem]" onClick={logOutHandler} style={{cursor:'pointer'}}>
              Logout
            </p>
          )}
        </div>
        <div className="flex justify-between gap-[14px] ">
          <img src={search} alt="" className="w-[1.5rem] h-[1.5rem]" />
          <img src={user} alt="" className="w-[1.5rem] h-[1.5rem]" />
        </div>
      </div>

      <div className="flex">
        <div className="w-[60%] px-[3rem] py-[8rem]">
          <p className="text-[4rem] text-[white]">
            <span className=" text-[red]">Don't trash it</span>, recycle your
            e-waste and make a difference.
          </p>
        </div>
        <div className="py-[4rem]">
          <img src={cycle} alt="" className="w-[28rem] h-[28rem]" />
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
