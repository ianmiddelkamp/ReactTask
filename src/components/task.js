import React from 'react';


const Task = (props) => {

     const task = props.task;
  

     return (
          <div className="">
               <div className=''>
                    <span>{task.id}</span>
               </div>
               <div >
                    <span>{task.AssignedTo}</span>
               </div>
               <div >
                    <span>{task.Title}</span>
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
     )


}

export default Task;