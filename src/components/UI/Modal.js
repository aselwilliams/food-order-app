import React, {Fragment} from 'react';
import classes from './Modal.module.css';
import reactDOM from 'react-dom'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.hideCartHandler}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <Fragment>
        {reactDOM.createPortal(<Backdrop hideCartHandler={props.hideCartHandler} />, portalElement)}
        {reactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal