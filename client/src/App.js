import React, { Component } from 'react';
import{
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Main {...props} /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
