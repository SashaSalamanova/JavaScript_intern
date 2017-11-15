const initialState = {
    contacts: [
        { name: 'Anna', lastName: 'Ivanova', phone: 89995615165 , email: 'anna@mail.ru',  id: 0},
        { name: 'Margarita', lastName: 'Petrova', phone: 89341002241, email: 'rita@mail.ru',  id: 1},
        { name: 'Valeriy', lastName: 'Sidorov', phone: 89999551134, email: 'valera@mail.ru',  id: 2 },
        { name:'Aleksandra', lastName: 'Salamanova', phone: 891367891254 , email: 'sasha@mail.ru', id: 3},
    ]
   }

export function contactsApp(state = initialState, action) {
    switch (action.type) {     
        case 'ADD_CONTACT':
            action.contact.id = action.id;
            return Object.assign({}, state, {contacts: [...state.contacts, action.contact]});
        case 'DELETE_CONTACT':
            const contactName = action.contact.name;
            if (confirm('Удалить контакт?\n' + action.contact.name + ' ' + action.contact.phone)){
                return Object.assign({}, state, {contacts: state.contacts.filter(contacts => contacts.name !== contactName)});
            }
    default:
    return state
    }
   }

