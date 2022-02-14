import Modal from "../ui/Modal"
import classes from "./UserModal.module.css"

const UserModal = (props) => {

    if (!props.open) return null
    return (
        <div>
            <Modal>
                <p className={classes.modalName}>{props.user.name}</p>
                <p>phone: {props.user.phone}</p>
                <div className={classes.modalDataCompany}>
                    <p>{props.user.company.name}</p>
                    <p>{props.user.company.catchPhrase}</p>
                    <p>{props.user.company.bs}</p>
                </div>
                <button className="btn" onClick={props.onClose}>Close</button>
            </Modal>
        </div>
    )
  }

  
  export default UserModal