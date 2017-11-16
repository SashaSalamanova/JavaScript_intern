import {connect} from 'react-redux'
import React from 'react';


const mapStateToProps = (state) => {
    return {
   contacts: state.contacts
    }
}

let ShowContacts= ({contacts}) => (
    <div id = 'contactList'> 
        <h2>Список контактов</h2>
        <ul> 
            {contacts.map(function(c){
                return <li>{c.name}: {c.phone}</li>
            }) }
        </ul>
    </div>)

export const ShowContactsContainer = connect(mapStateToProps)(ShowContacts)