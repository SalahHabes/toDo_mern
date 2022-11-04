import React, { useEffect} from 'react'

// components
import TaskDetails from '../components/TaskDetails'
import TaskForm from '../components/TaskForm'

// contexts
import { useTaskContext } from '../hooks/useTaskContext'

const Home = () => {
  const {tasks, dispatch} = useTaskContext()

  useEffect(() => {
    const fetchTasks = async() => {
        const response = await fetch('http://localhost:4000/api/tasks')
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'SET_TASKS', payload: json})
        }
    }  

    fetchTasks()
  }, [dispatch])

  return (
    <main className='home'>
        <div className='tasks'>
            {tasks && tasks.map((task) => (
                <TaskDetails key={task.id} task={task}/>
            ))}
        </div>
        <TaskForm/>
    </main>
  )
}

export default Home