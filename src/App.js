import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/home'
import Task from './components/task'
class App extends React.Component {


     render() {

      

          return (
               <div className="App container">
                    <div className='row flex-grow-1'>
                         <a href='/' >Home</a>
                    </div>
                    <div className='row flex-grow-1'>
                         <Router>
                              <Route path ="/" component={Home} exact />                              
                              <Route path ="/Task/:TaskId" component={Task} />
                         </Router>
                         

                    </div>
                    <div className='row flex-grow-1'></div>

               </div>
          )
     }



}

export default App;
