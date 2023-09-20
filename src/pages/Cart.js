import React, { useContext, useState } from 'react'
import './Cart.css'
import logo from '../assets/logo.png'
import search from './search.png'
 import user from './user.png'
 import image1 from '../assets/five.jpg'
 import image2 from '../assets/eight.jpg'
 import image3 from '../assets/four.jpg'
import VoucherContext from '../Context/VoucherContext'
import { NavLink, useNavigate } from 'react-router-dom'
function Cart() {
    const voucherCtx = useContext(VoucherContext);
    console.log(voucherCtx);
    const navigate = useNavigate();
    const [claimed, setIsClaimed] = useState(false);
    
  return (
    <div className='cartContainer'>
    <div className="bgBig">


        <div>
            <img src={logo} className="image"/>
            <ul className="list">
                <li>
                    <NavLink to="/" className="l1">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/redeemVouchers" className="l1">Add Vouchers</NavLink>
                </li>
                <li>
                    <a href="#" className="l1">Contact Us</a>
                </li>
                <li>
                    <a href="#" className="l1">LogIn/SignUp</a>
                </li>
                <li>
                <div className='flex gap-[0.6rem] pr-[2rem]'>
    <img src={search} alt=""  className='w-[1.5rem] h-[1.5rem]'/>
    <img src={user} alt="" className='w-[1.5rem] h-[1.5rem]' />
    </div>
                </li>
            </ul>
        </div><br/>
        <div className='tableback'>
        <div>
            <h1 className="rec">
                Your Cart
            </h1>
        </div>
        <div className='tabfirst'>
            <div >
            <table className="tab  shadow-xl shadow-black">
                <tr>
                    <th style={{padding:'20px'}}>
                        Sl No.
                    </th>
                    <th>
                        Vouchers
                    </th>
                    <th>
                        Points
                    </th>
                    <th>
                        Expires On 
                    </th>
                    <th>
                        Claim
                    </th>
                </tr>
                {voucherCtx.redeemedVouchers && voucherCtx.redeemedVouchers.length !==0 ? (voucherCtx.redeemedVouchers.map((item,idx)=>{
                    return (
                        <tr>
                    <td>
                        {idx+1}
                    </td>
                    <td>
                        <div className="item flex justify-center">
                            <img src={item.imgUrl} alt="" className='w-[40%] h-[20%] my-[0.3rem]' />
                        </div>
                    </td>
                    <td>
                        <div className="receipt">
                        {item.points}
                            
                        </div>
                    </td>
                    <td>
                        <div className="verified">
                        28/05/2023
                        </div>
                    </td>
                    <td >
                        <div className="add">
                        <span>Claim</span>
                        </div>
                    </td>
                </tr>
                    )})): (
                        <tr>
                        <td>
                            {1}
                        </td>
                        <td>
                            <div className="item flex justify-center">
                                {/* <img src={} alt="" className='w-[40%] h-[20%] my-[0.3rem]' /> */}
                                <NavLink onClick={() => navigate(-1)} style={{color:'blue', textDecoration:'underline', cursor:'pointer'}}>Add Vouchers Now!</NavLink>
                            </div>
                        </td>
                        <td>
                            <div className="receipt">
                            ----
                                
                            </div>
                        </td>
                        <td>
                            <div className="verified">
                            ----
                            </div>
                        </td>
                        <td >
                            <div className="add">
                            ----
                            </div>
                        </td>
                    </tr>
                    )}
                
                
                
            </table>
            </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Cart;