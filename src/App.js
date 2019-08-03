import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () =>{

  const APP_ID = 'b1dd83d8';
  const APP_KEY = '9370911ad5539152241fd2ef6ed82745';
  const exampleReq = 'https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}'
 
return(
<div className="App">
   <form className="search-form">
<input className="search-bar" type="text"></input>
<button className="search-button" type="submit">Search</button>


   </form>
</div>

);
}

export default App;
