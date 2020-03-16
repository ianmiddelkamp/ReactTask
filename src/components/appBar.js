import React from 'react';
import { useLocation, useHistory } from  'react-router-dom';


const AppBar = () => {

  
     const location = useLocation();
     const history = useHistory();
     const notHome = location.pathname != "/" 
     const atHome = location.pathname == "/"
     console.log(location)
     function goToRoute(event){
          let route = event.target.attributes.route.value
          history.push(route)
     }
     return (
          <div className='m-2 flex align-items-center justify-content-center'>
               {notHome? <button type='button' onClick={goToRoute} route='/' className='btn btn-secondary'>Home</button>:"" }
               {atHome?   <button type='button' onClick={goToRoute} route='/Create/' className='btn btn-secondary'>Create New Task</button>:"" }
             
          </div>
     )


}

export default AppBar;