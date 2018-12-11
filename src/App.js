import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getData} from './services/data';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    }
  }

  componentDidMount() {
    getData.then(response => {
      this.setState({contacts: response.contacts});
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            {/* {this.state.contacts} */}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
