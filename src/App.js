import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch> 
          <Route  exact path="/" component={Dashboard} />
          <Route  path="/login" component={Login} />
          <Route  path="/dashboard" component={Dashboard} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
