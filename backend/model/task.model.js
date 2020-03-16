const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  
     Title:{
          type: String,
          require:true,         
          trim:true
     },
     Notes:{
          type: String,
          require:false,          
          trim:true
     },
     DueDate:{
          type:Date,
          require:false,
     },
     Priority:{
          type:String,
          require:true
     },
     Location:{
          type: String,
          require:false,          
          trim:true
     },
     Status:{
          type: String,
          require:true    
          
     }
   
},{
    timestamps:true 
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;