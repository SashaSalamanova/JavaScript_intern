import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {connect} from 'react-redux'

import {contactsApp} from './contactsReduser.js';

import {ShowContactsContainer} from './showContacts.js';
import {AddContactContainer} from './addContact.js'
import {DeleteContactContainer} from './deleteContact.js'

let store = createStore(contactsApp);


let ContactList = () => (
<div>
<ShowContactsContainer/>
<AddContactContainer/>
<DeleteContactContainer/>
</div>
)


ReactDOM.render(
    <Provider store={store}>
    <ContactList/>
    </Provider>,
    document.getElementById('root')
   )
/*  
 ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={ContactList}>
      <Route path='/add' component={AddContactContainer} />
      </Route>
    </Router>
    </Provider>,
    document.getElementById('root')
  )
  */