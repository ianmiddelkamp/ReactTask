import React from 'react';
import taskService from '../service/taskService'
import { withRouter } from 'react-router'
import DatePicker from "react-datepicker";


class Task extends React.Component {

     constructor(props) {
          super(props);
          let match = props.match
          this.TaskId = match.params.TaskId;
          this.task = taskService.getTask(this.TaskId);
          this.Statuses = taskService.getTaskStatuses();
          this.Priorities = taskService.getTaskPriorities();
          this.handleSubmit = () => {

          }
          this.setDueDate = (date) => {

          }
          this.getReadonly = () =>{
               if(this.task.Status == "CLOSED" || this.task.Status == "COMPLETED"){
                    return true
               }else{ 
                    return false;
               }
          }
          //  console.log(task)
     }
     // console.log(match)


     render() {
          let DueDateField = ""
          if(this.getReadonly()){
               DueDateField =   <input className="form-control" name='DueDate' value={this.task.DueDate} readOnly/>
          }else{
               DueDateField = <DatePicker
               className="form-control"
                    selected={this.task.DueDate}
                    onChange={date => this.setDueDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="YYYY-MM-DD HH:mm:ss"
               />
          }

          return (
               <form onSubmit={this.handleSubmit}>
                    <div className="card">
                         <div className="card-header">
                              <input className="form-control" 
                              name='Title' 
                              type='text' 
                              value={this.task.Title}
                              readOnly={this.getReadonly()}/>
                         </div>
                         <div className='card-body'>

                              <div className="form-group">
                                   <label>Notes</label>
                                   <textarea 
                                   className="form-control"
                                   name='Notes' 
                                   value={this.task.Notes} 
                                   readOnly={this.getReadonly()}>

                                   </textarea>
                              </div>
                              <div className="form-group">
                                   <label>Due Date</label>
                                   {DueDateField}
                                  
                                                                      
                              </div>
                              <div className="form-group">
                                   <select className="form-control" name='Status' value={this.task.Status} >
                                        {this.Statuses.map(X =>
                                             <option  key={X}  name={X} value={X}>{X}</option>
                                        )}
                                   </select>
                              </div>
                              <div className="form-group" >
                                   <label>CreationDate</label>
                                   <input className="form-control" 
                                   name='CreationDate'
                                   value={this.task.CreationDate} 
                                   readOnly/>

                              </div>
                              <div className="form-group">
                                   <label>CompletionDate</label>
                                   <input className="form-control" 
                                   name='CompletionDate' 
                                   value={this.task.CompletionDate}
                                   readOnly/>

                              </div>
                              <div className="form-group">
                                   <label>Priority</label>
                                   <select className="form-control"  name='Priority' value={this.task.Priority} readOnly={this.getReadonly()}>
                                        {this.Priorities.map(X =>
                                             <option key={X} name={X} value={X}>{X}</option>
                                        )}
                                   </select>

                              </div>
                              <div className="form-group">
                                   <label>Location</label>
                                   <input className="form-control" 
                                   name='Location' 
                                   value={this.task.Location} 
                                   readOnly={this.getReadonly()}/>

                              </div>
                         </div>



                    </div>
               </form>
          )
     }


}

export default withRouter(Task);