import Box from "../ui/Box";
import classes from './UserItem.module.css'
import { FaUser, FaEnvelope } from 'react-icons/fa'

const UserItem = (props) => {

    return (
        <div>
            <Box>
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
            </Box>
        </div>
    )
  }

  export default UserItem