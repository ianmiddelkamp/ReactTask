import React from 'react';

import TaskListItem from './taskListItem'


import taskService from '../service/taskService'
class Home extends React.Component {

     constructor(){
          super()
          this.state = {
               tasklist:[]
          }
          this.setTasks = (tasks) => {
               this.setState({
                    tasklist:tasks
               })
          }
          taskService.getTasks().then(res => {
               let tasks = []
               if(res.status === 200){
                    tasks = res.data.length ? res.data : []
                   
               }
               this.setTasks(tasks);
            
          });
     }


     render() {

          let tasklist = [];
         
          
          return (
              
                         <div className='col-sm'>
                              <div className='card task-card'>
                                   <h4 className='card-header'>My Task List</h4>
                                   <ul className='list-group list-group-flush '>
                                        <li className="list-group-item list-group-item-dark task-list-item">

                                             <div className='task-list-column'>
                                                 Task Id
                                             </div>

                                             <div className='task-list-column flex-grow-1' >
                                                Title
                                             </div>

                                             <div className='task-list-column text-left ' >
                                                Due Date
                                             </div>
                                             <div className='task-list-column text-right ' >
                                                Status
                                             </div>


                                        </li>
                                        {this.state.tasklist.map(function (task, index) {
                                             return <TaskListItem key={task._id} task={task} />
                                        })}

                                   </ul>
                              </div>
                         </div>

          )
     }



}

export default Home;
