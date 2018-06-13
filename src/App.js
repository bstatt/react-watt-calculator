import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Calculator from './components/Calculator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/calculator'>Which Inverter Do I Need?</Link>
          </nav>
          <h1>Watt Calculator</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/calculator" component={Calculator} />
        </main>
      </div>
    );
  }
}

export default App;
