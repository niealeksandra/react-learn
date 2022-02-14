import TodoItem from "./TodoItem";


const TodoList = (props) => {


    return (
        <div>
            <button className="btn" onClick={props.openModal}>Add new Todo!</button>
            {props.tasks.map(task => (
                <TodoItem key={task.id} taskItem={task} onDelete={props.onDelete}/>
            ))}
        </div>
    )
  }

  export default TodoList