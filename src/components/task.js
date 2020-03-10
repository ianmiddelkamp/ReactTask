import React from 'react';
import taskService from '../service/taskService'
import { withRouter } from 'react-router'
import DatePicker from "react-datepicker";
import _ from 'lodash'
import moment from 'moment'

class Task extends React.Component {

     constructor(props) {
          super(props);
       
          let match = props.match
          this.TaskId = match.params.TaskId;
          let task = taskService.getTask(this.TaskId);
          let taskBackup = _.clone(task)
          this.state = {
               task:task,
               isSaved:true
          }
          this.Statuses = taskService.getTaskStatuses();
          this.Priorities = taskService.getTaskPriorities();
          this.onChangeInput = (event) => {
               let taskCopy = this.state.task
               taskCopy[event.target.name] = event.target.value
               this.setState({
                    task:taskCopy,
                    isSaved:false
               })
          }
        
          this.setDueDate = (date) => {
               let mt = moment(date)
               let taskCopy = this.state.task;
               taskCopy.DueDate = mt.toDate();
             
               this.setState({      
                    task:taskCopy,                  
                    isSaved:false
               })
          }
          this.getReadonly = () =>{
               if(this.state.task.Status == "CLOSED" || this.state.task.Status == "COMPLETED"){
                    return true
               }else{ 
                    return false;
               }
          }
          this.revert = () => {  
               this.setState({
                    task:_.clone(taskBackup),
                    isSaved:true
               })
          }
          this.saveTask = () => {
               task = this.state.task;
               taskBackup = _.clone(task)
               this.setState({
                    isSaved:true
               })
          }
          //  console.log(task)
     }
     // console.log(match)


     render() {
          let DueDateField = ""
          if(this.getReadonly()){
               DueDateField =   <input className="form-control" name='DueDate' value={this.state.task.DueDate} readOnly/>
          }else{
               DueDateField = <div><DatePicker
               className="form-control"
                    selected={this.state.task.DueDate}
                    onChange={date => this.setDueDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="yyyy-MM-dd HH:mm:ss"
               /></div>
          }

          return (
               <form >
                    <div className="card">
                         <div className="card-header">
                              <input className="form-control" 
                              name='Title' 
                              type='text' 
                              value={this.state.task.Title}
                              onChange={this.onChangeInput}
                              readOnly={this.getReadonly()}/>
                         </div>
                         <div className='card-body'>

                              <div className="form-group">
                                   <label>Notes</label>
                                   <textarea 
                                   className="form-control"
                                   name='Notes' 
                                   value={this.state.task.Notes} 
                                   onChange={this.onChangeInput}
                                   readOnly={this.getReadonly()}>

                                   </textarea>
                              </div>
                              <div className="form-group">
                                   <label>Due Date</label>
                                   {DueDateField}
                                  
                                                                      
                              </div>
                              <div className="form-group">
                                   <label>Status</label>
                                   <select className="form-control" name='Status' value={this.state.task.Status} 
                                      onChange={this.onChangeInput}>
                                        {this.Statuses.map(X =>
                                             <option  key={X}  name={X} value={X}>{X}</option>
                                        )}
                                   </select>
                              </div>
                              <div className="form-group" >
                                   <label>CreationDate</label>
                                   <input className="form-control" 
                                   name='CreationDate'
                                   value={this.state.task.CreationDate} 
                                   readOnly/>

                              </div>
                              <div className="form-group">
                                   <label>CompletionDate</label>
                                   <input className="form-control" 
                                   name='CompletionDate' 
                                   value={this.state.task.CompletionDate}
                                   readOnly/>

                              </div>
                              <div className="form-group">
                                   <label>Priority</label>
                                   <select className="form-control"  
                                        name='Priority' 
                                        value={this.state.task.Priority} 
                                        readOnly={this.getReadonly()}
                                        onChange={this.onChangeInput}>
                                        {this.Priorities.map(X =>
                                             <option key={X} name={X} value={X}>{X}</option>
                                        )}
                                   </select>

                              </div>
                              <div className="form-group">
                                   <label>Location</label>
                                   <input className="form-control" 
                                   name='Location' 
                                   value={this.state.task.Location} 
                                   readOnly={this.getReadonly()}
                                   onChange={this.onChangeInput}/>

                              </div>
                         </div>
                         <div className='card-footer'>
                              <button type='button' className='m-1 btn btn-success' disabled={this.state.isSaved} onClick={this.saveTask}>Save</button>
                              <button type='button' className='m-1 btn btn-success' disabled={this.state.isSaved} onClick={this.revert}>Undo</button>
                         </div>



                    </div>
               </form>
          )
     }


}

export default withRouter(Task);