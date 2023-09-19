import React, { useContext, useRef, useState } from 'react'
import Modal from '../modal/Modal';
import classes from './Register.module.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import ModalContext from '../Context/ModalContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
import { ref } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

const Register = (props) => {
  const modalCtx = useContext(ModalContext);
  const [error, setError] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const nameRef = useRef();
  const mailRef = useRef();
  const passRef = useRef();

  const closeHandler = ()=>{
    modalCtx.closeModal();
  }

  const submitHandler = async()=>{
    const name = nameRef.current.value;
    const mail = mailRef.current.value;
    const pass = passRef.current.value;

    console.log(name,mail,pass);

    try {
      setIsLoading(true)
      const res = await createUserWithEmailAndPassword(auth, mail, pass);
      console.log(res);
      if (!name) {
        console.error("Invalid displayName:", name);
        setError(true);
        return;
      }

      await setDoc(doc(db, "verification", res.user.uid), {
        uid: res.user.uid,
        displayName: name,
        email: mail,
        receiptURL: '',
        credits:0,
        Items:[],
        isVerified: false,
        
      });
      await updateProfile(res.user, {
        displayName: name,
      });

      
    } catch (error) {
      console.log(error.message);
      setError(true);
      setIsLoading(false)
    }
    modalCtx.closeModal();
  }
  return (
    <div>
      <Modal onClose={closeHandler}>
        <div className={classes.login}>
          <div className={classes.closeIcon}><CloseIcon/></div>
          <div><h1 style={{fontSize:'30px', color:'#C2C2C2'}}>Register</h1></div>
          <div className={classes.userName}>
             <PersonIcon/>
             <input ref={nameRef} type='text' className={classes.userNameInput} placeholder='Enter your name'/>
          </div>
          <div className={classes.mail}>
             <EmailIcon/>
             <input ref={mailRef} type='email' className={classes.mailInput} placeholder='Enter e-mail'/>
          </div>
          <div className={classes.password}>
            <LockIcon/>
            <input ref={passRef} type='password' className={classes.passInput} placeholder='Enter password'/>
          </div>
          <div className={classes.loginBtn}>
            <button onClick={submitHandler}>{loading ? 'Please Wait...' : 'Register'}</button>
          </div>
          <div><a href='#' style={{textDecoration:'underline'}} onClick={props.openLoginModal}>Already Signed In? Login here</a></div>
        </div>
    </Modal>
    </div>
  )
}

export default Register;