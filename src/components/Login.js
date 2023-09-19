import React, { useContext, useRef, useState } from 'react'
import Modal from '../modal/Modal';
import classes from './Login.module.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import ModalContext from '../Context/ModalContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = (props) => {
  const modalCtx = useContext(ModalContext);
  const [error , setError] = useState(false);
  const [loading, setIsLoading] = useState(false)

  const mailRef = useRef();
  const passwordRef = useRef();

  const closeHandler = ()=>{
    modalCtx.closeModal();
  }

  const loginHandler = async()=>{
    const email = mailRef.current.value;
    const password = passwordRef.current.value;
 
    try{
     await signInWithEmailAndPassword(auth, email, password) // sign in using firebase
    //  navigate('/')
 
    }catch(error){
     console.log('bhaari error hogayi..');
     setError(error.message);
    }
    modalCtx.closeModal();
  }
  return (
    <div>
      <Modal onClose={closeHandler}>
        <div className={classes.login}>
          <div className={classes.closeIcon} onClick={closeHandler}><CloseIcon/></div>
          <div><h1 style={{fontSize:'30px', color:'#C2C2C2'}}>Login</h1></div>
          <div className={classes.mail}>
             <EmailIcon/>
             <input ref={mailRef} type='email' className={classes.mailInput} placeholder='Enter e-mail'/>
          </div>
          <div className={classes.password}>
            <LockIcon/>
            <input ref={passwordRef} type='password' className={classes.passInput} placeholder='Enter password'/>
          </div>
          <div className={classes.loginBtn}>
            <button onClick={loginHandler}>Login</button>
          </div>
          <div><a href='#' style={{textDecoration:'underline'}} onClick={props.openRegisterModal}>Sign up/create Account</a></div>
        </div>
    </Modal>
    </div>
  )
}

export default Login