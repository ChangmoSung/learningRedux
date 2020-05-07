import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
// import store from './components/redux-101';
import expensesStore from './components/redux-expensify.js';

class App extends Component {
  state = { 

  }

  render() { 
    return ( 
      <Router>
        <Route>
          <div>
            This is from my dashboard component
          </div>
        </Route>


      </Router>
     );
  }
}
 
export default App;
