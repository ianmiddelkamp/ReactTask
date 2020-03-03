import React from 'react';
import logo from './logo.svg';
import TaskListItem from './components/taskListItem'
import './App.css';
import { render } from '@testing-library/react';

import taskService from './service/taskService'
class App extends React.Component {


     render() {

          const tasklist = taskService.getTasks();

          return (
               <div className="App container">
                    <div className='row flex-grow-1'></div>
                    <div className='row flex-grow-1'>
                         <div className='col-sm'>
                              <div class='card task-card'>
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
                                        {tasklist.map(function (task, index) {
                                             return <TaskListItem key={task.id} task={task} />
                                        })}

                                   </ul>
                              </div>
                         </div>

                    </div>
                    <div className='row flex-grow-1'></div>

               </div>
          )
     }



}

export default App;
