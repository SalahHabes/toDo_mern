import React from 'react'
import { useState } from 'react'
import axios from 'axios'

// contexts
import { useTaskContext } from '../hooks/useTaskContext'

const TaskForm = () => {
    const { dispatch } = useTaskContext()
    
    const [taskname, setTaskname] = useState('')
    const [completed, setCompleted] = useState(false)
    const [favorited, setFavorited] = useState(false)
    const [deadline, setDeadline] = useState('')
    const [note, setNote] = useState('')
    //const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const task = {name:taskname, done:completed, favorited, deadline, note}
        
        await axios.post('/api/tasks', task)
            .then((r)=>{
                setTaskname('')
                setCompleted(false)
                setFavorited(false)
                setDeadline(undefined)
                setNote('')
                //setError(null)
                dispatch({type: 'CREATE_TASK', payload: task})
            })
            .catch(e => {
                console.log(e.toJSON())
            })
    }

  return (
    <form className='taskForm' onSubmit={handleSubmit}>
        <input
            type="text"
            onChange={(e)=>setTaskname(e.target.value)} 
            name="taskname" 
            value={taskname}
            placeholder="Add a task"
            required/>
        <label htmlFor="completed">mark as completed</label>
        <input
            type="checkbox"
            onChange={()=>setCompleted(p=>!p)} 
            name="completed" 
            defaultChecked={completed}
            />
        <label htmlFor="favorited">favorite the task</label>
        <input
            type="checkbox"
            onChange={()=>setFavorited(p=>!p)} 
            name="favorited" 
            defaultChecked={favorited}
            />
        <label htmlFor="deadline">Add a deadline: </label>
        <input 
            type="date" 
            onChange={(e)=>setDeadline(e.target.value)}
            name="deadline" 
            value={deadline}
            />
        <input
            type="bigtext"
            onChange={(e)=>setNote(e.target.value)} 
            name="note" 
            value={note}
            placeholder="Add note"
            />
        <button>ye</button>
    </form>
  )
}

export default TaskForm