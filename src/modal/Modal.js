import React, { Fragment, useContext } from "react";
import classes from "./Modal.module.css";
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  // if we didn't use portal, we'd do it like below:----------------------------------
  // return <Fragment>
  //   <Backdrop/>
  //   <ModalOverlay>{props.children}</ModalOverlay>
  // </Fragment>
  // ---------------------------------------------------------------------------------

  // USING pORTALS(to make sure our modal html code is not in between or all over the place)

  return <Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('overlays'))}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> ,document.getElementById('overlays') )}
  </Fragment>
};
export default Modal;
