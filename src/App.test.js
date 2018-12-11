import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should load more when button is clicked', () => { // TODO: resolve node error, add enzyme, write test
  // let initialContacts = this.state.contacts;
  // find and click button
  // expect this.state.contacts === initialContacts + 20
});