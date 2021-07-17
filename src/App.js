import React from 'react';
import "./scss/app.scss"
import { BrowserRouter} from "react-router-dom";
import Routes from './router'
import history from "./utils/historyApp";


function App() {
 
  return (
      <BrowserRouter> 
    <div className="App">
      <Routes  history={history}></Routes>  
    </div>
  </BrowserRouter> 

  );
}

export default App;
