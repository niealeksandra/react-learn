import TodoForm from '../components/todos/TodoForm'
import TodoList from '../components/todos/TodoList'
import { useState, useEffect } from "react";


const Todos = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const deleteTask = (id) => {
        setTask(allTasks.filter((task) => task.id !== id))
    }
    const [allTasks, setTask] = useState([
        {
            id: 1,
            task: 'Beer with my homies from work', 
            day: 'Friday, 8:00 PM',
            priority: true 
        },
        {
            id: 2,
            task: 'Test task', 
            day: 'Monday, 8:00 AM',
            priority: false 
        },
        {
            id: 3,
            task: 'Clean the kitchen', 
            day: 'Saturday, 11:00 AM',
            priority: false 
        }])


    const addTask = (data) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...data}
        setTask([...allTasks, newTask])
    }

    return (
        <div className='container'>
            {modalOpen ? (<TodoForm onAddTask={addTask} onClose={() => setModalOpen(false)}/>) : null}
            <TodoList tasks={allTasks} openModal={() => setModalOpen(true)} onDelete={deleteTask}> 
            </TodoList>
        </div>
    )
  }

  
  export default Todos