import axios from 'axios'


const tasksService =  {
     
     getTasks:() => {
          return axios.get('http://localhost:5000/tasks/')
     },
     getTask:(TaskId) =>{
          return axios.get('http://localhost:5000/tasks/' + TaskId)
     } ,
     getTaskStatuses:()=>{
          return ['NEW', 'STARTED', 'COMPLETED', 'CLOSED']
     },
     getTaskPriorities:()=>{
          return ['HIGH', 'MEDIUM', 'LOW']
     }
        
}

export default tasksService

