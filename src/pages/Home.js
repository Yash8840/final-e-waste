import React, { useContext, useEffect, useState } from 'react'
import Firstpage from './Firstpage'
import Aboutus from './Aboutus'
import Awareness from '../components/Awareness'
import Credit from './Credit'
import Map from './Map'
import Footer from './Footer'
import ModalContext from '../Context/ModalContext'
import Login from '../components/Login'
import AuthContext from '../Context/AuthContext'
import Register from '../components/Register'

const Home = () => {
  const modalCtx = useContext(ModalContext);
  console.log(modalCtx);
  const authCtx = useContext(AuthContext);
  console.log(authCtx.currentUser);
  const [registerOpen, setIsRegisterOpen] = useState(false)
  const [LoginOpen, setIsLoginOpen] = useState(false);
  const [loading, setLoading] = useState(true)


  const openRegisterModalHandler = ()=>{
   setIsRegisterOpen(true);
   setIsLoginOpen(false)
  }
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  const openLoginModalHandler = ()=>{
    setIsLoginOpen(true);
    setIsRegisterOpen(false)
  }

  return (
    <>
    {modalCtx.isOpen && !registerOpen && <Login openRegisterModal = {openRegisterModalHandler}/>}
    {modalCtx.isOpen && registerOpen && <Register openLoginModal = {openLoginModalHandler}/>}
    <Firstpage/>
    <Aboutus/>
    <Awareness/>
    <Map/>
    <Credit/>
    <Footer/>
    </>
  )
}

export default Home