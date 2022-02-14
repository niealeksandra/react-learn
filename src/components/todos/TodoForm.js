import Modal from "../ui/Modal";
import classes from "./TodoForm.module.css";
import { useRef } from 'react';

const TodoForm = (props) => {

    const taskInputRef = useRef()
    const dayInputRef = useRef()
    const priorityInputRef = useRef()

    const submitForm = (e) => {
        e.preventDefault();
        const enteredTaskRef = taskInputRef.current.value
        const enteredDayRef = dayInputRef.current.value
        const enteredPriorityRef = priorityInputRef.current.checked

        const taskData = {
            task: enteredTaskRef,
            day: enteredDayRef,
            priority: enteredPriorityRef
        }

        props.onClose();
        props.onAddTask(taskData)
    }

    return (
        <div>
            <Modal>
                <form className={classes.form} onSubmit={submitForm}>
                    <div className={classes.formContainer}>
                        <div className={classes.control}>
                            <label>Task:</label>
                            <input type="text" required placeholder="Add Task" ref={taskInputRef}/>
                        </div>
                        <div className={classes.control}>
                            <label>Day:</label>
                            <input type="text" required placeholder="Add Day" ref={dayInputRef}/>
                        </div>
                        <div className={classes.control}>
                            <label>Set Priority</label>
                            <input type="checkbox" placeholder="Set Priority" ref={priorityInputRef} />
                        </div>
                    </div>
                    <input className="btn" type="submit" value="Save Task" />

                </form>

                <button className="btn btn-light" onClick={props.onClose}>Close</button>
            </Modal>
        </div>
    )
  }

  export default TodoForm