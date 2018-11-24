import React, { Component } from 'react';

import Header from './components/header';

import contentContainer from './components/contentcontainer';

import floatingButton from './components/floatingbutton';

class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <Header/>
        <contentContainer />
        <floatingButton/>
      </div>
    );
  }
}

export default App;
