import React, { Component } from 'react';
import './App.css';
import {getData} from './services/data';

import Contact from './components/contact'


class App extends Component {

  state = {
    contacts: [],
  };

  componentDidMount() {
    getData.then(response => {
      this.setState({contacts: response.contacts});
    });
  }

 contactItems = contactsList => {
    return contactsList.map(contact => {
      return <Contact contactInfo={contact} />
    });
  }

  render() {
    return (
      <div className="App">
        {this.contactItems(this.state.contacts)}
      </div>
    );
  }
}

export default App;
