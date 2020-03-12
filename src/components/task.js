import React from 'react';
import taskService from '../service/taskService'
import { withRouter } from 'react-router'
import DatePicker from "react-datepicker";
import _ from 'lodash'
import moment from 'moment'
import loader from '../image/loader4.gif'

class Task extends React.Component {

     constructor(props) {
          super(props);
       
          let match = props.match
          this.TaskId = match.params.TaskId;
          this.task = null;         
          this.state = {
               task:this.task,
               isLoading:true,
               isSaved:true
          }
          this.taskBackup = _.clone(this.task)
         
          

          //initializers
          this.Statuses = taskService.getTaskStatuses();
          this.Priorities = taskService.getTaskPriorities();

          //event binders
          this.onChangeInput = this.onChangeInput.bind(this);
          this.setDueDate = this.setDueDate.bind(this);
          this.getReadonly = this.getReadonly.bind(this);
          this.revert = this.revert.bind(this);
          this.saveTask = this.saveTask.bind(this);
    

          //load task
          taskService.getTask(this.TaskId).then(res => {
            
               if(res.status === 200){
                    let task = res.data ? res.data : null
                    task.DueDate = moment(task.DueDate).toDate()
                    task.createdAt = moment(task.createdAt).format("YYYY-MM-DD HH:mm:ss")
                    task.updatedAt = moment(task.updatedAt).format("YYYY-MM-DD HH:mm:ss")
                    this.setState({
                         task:task,
                         isLoading:false
                    })
               }
     
            
          });
     }
     // console.log(match)
     onChangeInput = (event) => {
          let taskCopy = this.state.task
          taskCopy[event.target.name] = event.target.value
          this.setState({
               task:taskCopy,
               isSaved:false
          })
     }
   
     setDueDate = (date) => {
          let mt = moment(date)
          let taskCopy = this.state.task;
          taskCopy.DueDate = mt.toDate();
        
          this.setState({      
               task:taskCopy,                  
               isSaved:false
          })
     }
     getReadonly = () =>{
          if(this.state.task.Status == "CLOSED" || this.state.task.Status == "COMPLETED"){
               return true
          }else{ 
               return false;
          }
     }
     revert = () => {  
          this.setState({
               task:_.clone(this.taskBackup),
               isSaved:true
          })
     }
     saveTask = () => {
          this.task = this.state.task;
          this.taskBackup = _.clone(this.task)
          this.setState({
               isSaved:true
          })
     }

     render() {
         
          if(this.state.isLoading){
               return (
                    <div>
                         <img src={loader} width='50px' height='50px'/>
                    </div>
               )

          }else{
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
                                        <label>Creation Date</label>
                                        <input className="form-control" 
                                        name='CreationDate'
                                        value={this.state.task.createdAt} 
                                        readOnly/>
     
                                   </div>
                                   <div className="form-group">
                                        <label>Last Modified</label>
                                        <input className="form-control" 
                                        name='CompletionDate' 
                                        value={this.state.task.updatedAt}
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


}

export default withRouter(Task);