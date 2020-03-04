import React from 'react';
import { useHistory } from "react-router-dom";


const TaskListItem = (props) => {

     const task = props.task;
     const history = useHistory();

     const loadTask = () => {
          history.push("/Task/" + task.TaskId)
     }
     return (
          <li className="list-group-item list-group-item-action task-list-item" onClick={loadTask}> 
          
                    <div className='task-list-column'>
                         <span>{task.TaskId}</span>
                    </div>
               
                    <div className='task-list-column flex-grow-1' >
                         <span>{task.Title}</span>
                    </div>
               
                    <div className='task-list-column text-left' >
                         <span>{task.DueDate}</span>
                    </div>
                    <div className='task-list-column text-right' >
                         <span>{task.Status}</span>
                    </div>
         

          </li>
     )


}

export default TaskListItem;