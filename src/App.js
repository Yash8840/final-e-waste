import React, { useContext } from 'react'
import Credit from './pages/Credit';
import FirstPage from './pages/Firstpage'
import Aboutus from './pages/Aboutus';
import Footer from './pages/Footer';
import Map from './pages/Map';
import Awareness from './components/Awareness';
import Login from './components/Login';
import Vouchers from './pages/Vouchers';
import Receipt from './pages/Receipt';
import ReceiptPage from './pages/ReceiptPage';
import Register from './components/Register';
import Home from './pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AuthContext from './Context/AuthContext';
import Cart from './pages/Cart';
import Certificate from './pages/Certificate';

function App() {

  
  const authCtx = useContext(AuthContext);
  console.log(authCtx.currentUser);
  
  const ProtectedRoute = ({children})=>{
    if(!authCtx.currentUser){
      return <Navigate to='/'/> // changes the current location when it is rendered
    }
    return children;
  }
  return (
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path="login" element = {<Login/>} />
      <Route path="register" element={<Register/>}/> */}
      {/* <Route path="image/:id" element={<ImgProvider><Image/></ImgProvider>}/> */}
      <Route path="verify" element = {<ProtectedRoute><ReceiptPage/></ProtectedRoute>} />
      <Route path="cart" element={<Cart/>}/>
      <Route path='certification' element={<ProtectedRoute><Certificate/></ProtectedRoute>}/>
      <Route path='redeemVouchers' element={<ProtectedRoute><Vouchers/></ProtectedRoute>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App