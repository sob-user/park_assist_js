import React, { Component } from 'react';
import { Provider } from 'react-redux';
import  store from './component/store';
import Switchman from './component/SwitchMan'
import './App.css';

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <Switchman />
        </div>
      </Provider>
    )
  }
}

export default App;
