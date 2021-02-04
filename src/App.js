import React from 'react';
import "./scss/app.scss"
import { BrowserRouter} from "react-router-dom";
import { HashRouter} from "react-router-dom";
import Routes from './router'



function App() {
 
  return (
    // <HashRouter basename='/'>
      <BrowserRouter> 
    <div className="App">
      <Routes></Routes>  
    </div>
  </BrowserRouter> 
    // {/* </HashRouter> */}

  );
}

export default App;
