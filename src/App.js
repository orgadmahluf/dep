import React from 'react';
import {HashRouter as Router,Switch,Route,Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Link to='/'>HomePage</Link>
        <Link to='/page2'>2</Link>

        <Switch>
          <Route exact path='/' component={()=>{return <h1>HomePage</h1>}} />
          <Route exact path='/page2' component={()=>{return <h1>page2</h1>}} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
