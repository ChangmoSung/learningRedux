import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill' }));
store.dispatch(addExpense({ description: 'gas bill' }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses)


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
