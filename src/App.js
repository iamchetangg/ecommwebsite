import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'; 
import {Route,Routes, useMatch,} from 'react-router-dom';

export const HatsPage = (props) =>{
  console.log(props);
 return( <div><h1>HATS PAGE</h1></div>);
}


function App(props) {

  return (
    <div>
<Routes>
  <Route exact path='/' element={<HomePage  props={props}/>}  />   
  <Route  path='/hats' element={<HatsPage/>} />  
  </Routes>
 
  
    </div>
  );
}

export default App;
