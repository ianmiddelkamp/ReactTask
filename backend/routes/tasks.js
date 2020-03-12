const router = require('express').Router();
let Task = require('../model/task.model');

router.route('/').get((req,res) => {
     Task.find()
     .then(tasks=>res.json(tasks))
     .catch(err=> res.status(400).json('Error: ' + err))

})
router.route('/add').post((req, res)=>{
     let body = req.body;
     const Title = body.Title;
     const Notes = body.Notes;
     const DueDate = Date.parse(body.DueDate);
     const Priority = Number(body.Priority)
     const Location = body.Location;
     const Status = body.Status

     const newTask = new Task({
          Title, Notes, DueDate, Priority, Location, Status
     });

     newTask.save().then(()=>res.json('Success'))
     .catch(err=> res.status(400).json('Error: ' + err))

})

router.route('/:id').get((req,res) => {
     Task.findById(req.params.id)
     .then(task=> {     
          res.json(task)
     })
     .catch(err=> res.status(400).json('Error: ' + err))

})

router.route('/:id').delete((req,res) => {
     Task.findByIdAndDelete(req.params.id)
     .then(()=>res.json("deleted"))
     .catch(err=> res.status(400).json('Error: ' + err))

})

router.route('/update/:id').post((req,res) => {
     Task.findById(req.params.id)
          .then((exercise)=>{
               let body = req.body;
               exercise.Title = body.Title;
               exercise.Notes = body.Notes;
               exercise.DueDate = Date.parse(body.DueDate);
               exercise.Priority = Number(body.Priority)
               exercise.Location = body.Location;
               exercise.Status = body.Status
               exercise.save().then(()=>res.json('Update Success'))
               .catch(err=> res.status(400).json('Error: ' + err))
          })
          .catch(err=> res.status(400).json('Error: ' + err))

})

module.exports = router