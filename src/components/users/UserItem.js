import Box from "../ui/Box";
import classes from "./UserItem.module.css"
import { FaUser, FaEnvelope } from "react-icons/fa"
import UserModal from "./UserModal"
import { useState } from "react";

const UserItem = (props) => {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div>
            <UserModal 
                key={props.user.id} 
                user={props.user} 
                onClose={() => setModalOpen(false)}
                open={modalOpen} />
            <Box>
                <div onClick={() => setModalOpen(true)} className={classes.userDataContainer}>
                    <div className={classes.userDataItem}>
                        <FaUser className={classes.icons} />
                        <p className={classes.name}>{props.user.name}</p>
                    </div>
                    <div className={classes.userDataItem}>
                    <FaEnvelope className={classes.icons} />
                    <p className={classes.email}>{props.user.email}</p>
                    </div>
                    <div className={classes.address}>
                        <p className={classes.addressCity}>{props.user.address.city}</p>
                        <div className={classes.addressStreet}>
                            <p>{props.user.address.street},</p>
                            <p>{props.user.address.suite}</p>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
  }

  export default UserItem