import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import AuthContext from "./AuthContext";
import ModalContext from "./ModalContext";

const ModalProvider = (props)=>{

  const [isOpen , setIsOpen] = useState(false);
  
  const openModalHandler = ()=>{
   setIsOpen(true);
  }
  const closeModalHandler = ()=>{
   setIsOpen(false);
  }
  

  return <ModalContext.Provider value={{isOpen: isOpen, openModal: openModalHandler, closeModal: closeModalHandler}}>
   {props.children}
  </ModalContext.Provider>
}
export default ModalProvider