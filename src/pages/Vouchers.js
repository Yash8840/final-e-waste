import React, { useContext, useEffect, useState } from 'react'
import classes from './Vouchers.module.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import VoucherSwiper from '../components/VoucherSwiper';
import AuthContext from '../Context/AuthContext';
import { doc, onSnapshot, updateDoc, decrement, increment } from 'firebase/firestore';
import { db } from '../firebase';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Vouchers = () => {
  const authCtx = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [userSelectedPoints, setUserSelectedPoints] = useState(0);
  const [points, setPoints] = useState(0);
  const navigate = useNavigate();

  const showToastMessage = () => {
    toast.success(`${userSelectedPoints} points redeemed successfully!`, {
        position: toast.POSITION.TOP_RIGHT
    });
};

  useEffect(() => {
    // we'll use realtime updation using "useSnapshot"
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "verification", authCtx.currentUser.uid),
        (doc) => {
          console.log("Current data: ", doc.data());
          setData(doc.data());
          
        }
      );
      return () => {
        unsub();
      };
    };

    authCtx.currentUser.uid && getChats(); // call this function only if a user is present
  }, [authCtx.currentUser.uid]);

  const selectedPointsHandler = (points)=>{
    setUserSelectedPoints(points);
  }

  const redeemVoucher = async()=>{
    if(userSelectedPoints >= data.credits){
      toast.error("Oops! You don't have enough credits! Recycle Now to get some !", {
        position: toast.POSITION.TOP_CENTER
    });
    return;
    }
    const docRef = doc(db, 'verification', authCtx.currentUser.uid)
    await updateDoc(docRef, {
      credits: increment(+userSelectedPoints * -1),
  });
  setPoints(0);
  showToastMessage();
  }

  return (
    <div className={classes.voucherContainer}>
      <div className={classes.topBar}>
        <div><span style={{cursor:'pointer'}} onClick={() => navigate(-1)}><KeyboardBackspaceIcon sx={{marginRight:'15px', color:'black'}}/></span>Welcome {authCtx.currentUser.displayName}</div>
        <div><NavLink to='/cart'><span style={{marginRight:'17px', color:'lightBlue'}}><AddShoppingCartIcon/></span></NavLink>Your Credit - {data && data.credits ? data.credits : 0}</div>
      </div>
      <div className={classes.displayVouchers}>
        <span>Vouchers available</span>
        <div className={classes.voucherSwiper}>
          <VoucherSwiper selectedPoints={selectedPointsHandler}/>
        </div>
        <div className={classes.redeemBox}>
          <span style={{color:'#868686', fontWeight:'300'}}>Amount of Points to redeem - {userSelectedPoints}</span>
          <button onClick={redeemVoucher}>Redeem Now!</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Vouchers;