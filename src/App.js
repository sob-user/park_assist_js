import React, { Component } from 'react';
import { Provider } from 'react-redux';
import  store from './component/store';
import SwitchMAn from './component/SwitchMan'
import './App.css';

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <SwitchMAn />
        </div>
      </Provider>
    )
  }
}

export default App;
