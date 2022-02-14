import classes from './Modal.module.css'


const Modal = (props) => {

    return (
        <div>
            <div className={classes.overlay}></div>
            <div className={classes.modal}>{props.children}</div>
        </div>
    )
  }

  
  export default Modal