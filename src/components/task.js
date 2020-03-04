import React from 'react';
import taskService from '../service/taskService'
import {withRouter} from 'react-router'
const Task = ({match}) => {
    // console.log(match)
     const TaskId = match.params.TaskId
     const task = taskService.getTask(TaskId)
   //  console.log(task)
     return (
          <div className="card">
               <div className="card-header">
                    <span>{task.Title}</span>
               </div>
               <div class='card-body'>
               <div >
                    <span>{task.AssignedTo}</span>
               </div>
            
               <div >
                    <span>{task.Notes}</span>
               </div>
               <div >
                    <span>{task.DueDate}</span>
               </div>
               <div >
                    <span>{task.Status}</span>
               </div>
               <div >
                    <span>{task.CreationDate}</span>
               </div>
               <div >
                    <span>{task.CompletionDate}</span>
               </div>
               <div >
                    <span>{task.Priority}</span>
               </div>
               <div >
                    <span>{task.Location}</span>
               </div>
               </div>
              
           

          </div>
     )


}

export default withRouter(Task);