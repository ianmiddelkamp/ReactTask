import axios from 'axios'


const tasksService =  {
     
     getTasks:() => {
          return axios.get('http://localhost:5000/tasks/')
     },
     getTask:(TaskId) =>{
          return axios.get(`http://localhost:5000/tasks/${TaskId}`)
     } ,
     saveTask:(Task) => {
          return axios.post(`http://localhost:5000/tasks/update/${Task._id}`, Task)
     },
     addTask:(Task) => {
          return axios.post("http://localhost:5000/tasks/add/", Task)
     },
     deleteTask:(TaskId) =>{
          return axios.delete(`http://localhost:5000/tasks/${TaskId}`)
     } ,
     getTaskStatuses:()=>{
          return ['NEW', 'STARTED', 'COMPLETED', 'CLOSED']
     },
     getTaskPriorities:()=>{
          return ['LOW', 'MEDIUM','HIGH' ]
     }
        
}

export default tasksService

