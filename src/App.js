import React from 'react';
import './css/App.css'
import { Route } from 'react-router-dom';
import Panel from './pages/Panel';

function App() {
  return (
    <div className="App">
      <Route path = "/" component = {Panel}/>
    </div>
  );
}

export default App;
