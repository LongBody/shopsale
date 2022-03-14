import history from 'helpers/historyApp';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'scss/app.scss';
import Routes from './router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes history={history}></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
