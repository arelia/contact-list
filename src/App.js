import React, { Component } from 'react';
import './styles/App.css';
import {getData, getMoreData} from './services/data';

import Contact from './components/contact'


class App extends Component {

  state = {
    contacts: [],
    page: 0,
  };

  componentDidMount() {
    getData.then(response => {
      this.setState({contacts: response.contacts});
    });
  }

 contactItems = contactsList => {
    return contactsList.map(contact => {
      return <Contact key={contact.id} contactInfo={contact} />
    });
  }

  loadContacts = () => {
    let currentPage = this.state.page;
    currentPage++;

    getMoreData(currentPage).then(response => {
      this.setState({
        contacts: [...this.state.contacts, ...response.contacts],
        page: currentPage,
      });
    })
  }

  render() {
    return (
      <div className="App">
        {this.contactItems(this.state.contacts)}
        <button onClick={this.loadContacts}>Load More</button>
      </div>
    );
  }
}

export default App;
