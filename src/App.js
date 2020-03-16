import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/home'
import Task from './components/task'
import AppBar from './components/appBar'

class App extends React.Component {

   
     render() {

          
          return (
               <div className="App container align-items-center">
                       <Router>
                     
                    <div id='header' className='row'>
                        <AppBar></AppBar>
                    </div>
                    <div className='row flex-grow-1'>
                      
                              <Route path ="/" component={Home} exact /> 
                              <Route path ="/Create/" component={Task} exact/>                             
                              <Route path ="/Task/:TaskId" component={Task}  />
                        
                         

                    </div>
                    <div id='footer' className='row'></div>
                    </Router>
               </div>
          )
     }



}

export default App;
