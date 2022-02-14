import Box from "../ui/Box"
import UserModal from "../users/UserModal"
import { FaTimes } from "react-icons/fa"
import classes from "./TodoItem.module.css"

const TodoItem = (props) => {

    return (
        <div>
            <UserModal />
            <Box>
                <div className={props.taskItem.priority ? classes.priority : classes.taskContainer}>
                  <p className={classes.task}>{props.taskItem.task}</p>
                  <p className={classes.day}>{props.taskItem.day}</p>
                </div>
                <FaTimes onClick={() => props.onDelete(props.taskItem.id)} />
            </Box>
        </div>
    )
  }

  export default TodoItem