export function showContact(contact) {
    return {
    type: 'SHOW_CONTACT',
    contact
    }
   };

let nextId = 10; 
export function addContact(contact) {
    return {
    type: 'ADD_CONTACT',
    id: nextId++,
    contact
    }
   };

export function deleteContact(contact) {
    return {
    type: 'DELETE_CONTACT',
    contact
    }
   };

export function editContact(contact) {
    return {
    type: 'EDIT_CONTACT',
    contact
    }
   };

export function fetchContacts() {
    return function (dispatch) {
        dispatch(requestContacts())
    return fetch('http://localhost:3000/contacts ')
        .then(response => response.json())
        .then(json =>
        dispatch(receiveContacts(json))
    )
    }
    }