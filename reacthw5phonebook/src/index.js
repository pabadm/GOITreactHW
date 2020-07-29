import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux';

import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';

import './index.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="Phonebook">
        <h1 className="Phonebook-title">Phonebook</h1>
        <ContactForm />
        <Filter />
        <ContactsList />
      </div>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
