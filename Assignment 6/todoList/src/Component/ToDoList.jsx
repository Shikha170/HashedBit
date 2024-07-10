import React, { useState } from 'react'
import './ToDoList.css';

const ToDoList = () => {
    const [tasks,setTask]=useState([]);
      const [newTask,setNewTask]=useState('');

      const AddTask=()=>{
        if(newTask.trim()!=''){
            setTask(prevTask=>[...prevTask,newTask.trim()].sort());
            setNewTask('');
        }
      };
      const RemoveTask=(taskToRemove)=>{
        setTask(prevTask=>prevTask.filter(task=>task!=(taskToRemove)));
      };

  return (
 
    <div className='todo-container'>

      <h2>To DO List</h2>
      <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder='Enter a new Task'/>
      <button onClick={AddTask}>Add Task</button>
      
   
    
        <ul>
        {tasks.map((task,index)=>(
        <li key={index}>{task}
            <button onClick={()=>RemoveTask(task)}>Delete Task</button>
        </li>
        ))}
      </ul>
 
  </div>
  )
}

export default ToDoList;
