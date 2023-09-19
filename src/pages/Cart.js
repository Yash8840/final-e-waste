import React from 'react'
import './Cart.css'
import logo from '../assets/logo.png'
import search from './search.png'
 import user from './user.png'
 import image1 from '../assets/five.jpg'
 import image2 from '../assets/eight.jpg'
 import image3 from '../assets/four.jpg'
function Cart() {
  return (
    <div className="bg">


        <div>
            <img src={logo} className="image"/>
            <ul className="list">
                <li>
                    <a href="#" className="l1">Home</a>
                </li>
                <li>
                    <a href="#" className="l1">About Us</a>
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
                <tr>
                    <td>
                        1.
                    </td>
                    <td>
                        <div className="item flex justify-center">
                            <img src={image1} alt="" className='w-[40%] h-[20%] my-[0.3rem]' />
                        </div>
                    </td>
                    <td>
                        <div className="receipt">
                        2000 points
                            
                        </div>
                    </td>
                    <td>
                        <div className="verified">
                        28/05/2023
                        </div>
                    </td>
                    <td >
                        <div className="add">
                        Claim
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        2.
                    </td>
                    <td>
                        <div className="item flex justify-center ">
                           <img src={image2} alt="" className='w-[40%] h-[20%] my-[0.3rem]' />
                        </div>
                    </td>
                    <td>
                        <div className="receipt">
                        5000 points
                          
                        </div>
                    </td>
                    <td>
                        <div className="verified">
                        06/09/2023
                        </div>
                    </td>
                    <td>
                        <div className="add">
                            Claim
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        3.
                    </td>
                    <td>
                        <div className="item flex justify-center">
                           <img src={image3} alt="" className='w-[40%] h-[20%] my-[0.3rem] '/>
                        </div>
                    </td>
                    <td>
                        <div className="receipt">
                        6000 points
                           
                        </div>
                    </td>
                    <td>
                        <div className="verified">
                        08/11/2023
                        </div>
                    </td>
                    <td>
                        <div className="add">
                          Claim
                        </div>
                    </td>
                </tr>
                
            </table>
        </div>
        </div>
        </div>
  )
}

export default Cart;