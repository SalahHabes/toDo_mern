import React from 'react'

//context
import  { useTaskContext } from '../hooks/useTaskContext'

const TaskDetails = ({task}) => {

  const { dispatch } = useTaskContext()
  const handleClick = async () => {

    const respose = await fetch ('api/tasks/' + task._id, {
      method: 'DELETE'
    })

    const json = await respose.json()
    if(respose.ok){
      dispatch({type: 'DELETE_TASK', payload: json})
    }
  }

  return (
    <div className='taskCard'>
      <h1 className='title'>{task.name}</h1>
      <div className='cardDetails'>
      {task.favorited ? <p>&#9733;</p> : <p>&#9734;</p>}
      {task.done ? <p>completed!</p> : <p>pending...</p>}
        <p>{task.favorited}</p>
        <p>{task.deadline}</p>
      </div>
      <p>{task.note}</p>
      <span onClick={handleClick} style={{color: 'red', cursor: 'pointer'}}>delete</span>
    </div>
  )
}

export default TaskDetails