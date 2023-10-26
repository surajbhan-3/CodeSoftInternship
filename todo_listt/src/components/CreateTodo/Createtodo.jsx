import React, { useState } from 'react'
import "./Createtodo.css"

function Createtodo() {

  const [task, setTask ] = useState("")
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('high')

  const handlesubmit = ()=>{
    setTask("hello world")
        
  }
  return (
    <div className='create_todo'>

                <div className="create_todo_wrapper">

                    <form action="" id='add-form' onSubmit={handlesubmit}>
                        <label htmlFor="task">Task Name</label>
                        <input type="text" placeholder='write here.........' value={task} />
                        <label htmlFor="">Description</label>
                         <input type="text" placeholder='bit of description' />
                        <label htmlFor="">DeadLine</label>
                        <input type="date" name="complete-date" id="" />
                        <label htmlFor="">Priority</label>
                         <select name="" id="priority">
                            <option value="high">High</option>
                            <option value="Medium">Medium</option>
                            <option value="low">Low</option>

                         </select>
                         <input type="submit" value="Add Task" />
                    </form>
                     
                </div>

    </div>
  )
}


export default Createtodo