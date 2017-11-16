import {connect} from 'react-redux';
import React from 'react';
import {deleteContact} from './actions.js';

const mapStateToProps = (state) => {
    return {
        contactList: state.contacts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (contact) => {
             dispatch(deleteContact(contact))
        }
    }
}

class DeleteContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', contacts: ''};
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleSearchChange(event){
        this.setState({name: event.target.value});
        let element = event.target.value;
        let contactsToDelete = [];
        let reg = new RegExp(String(element), 'i');
        this.props.contactList.forEach(function(value, i, arr){
            if (reg.test(String(arr[i].name))){
                contactsToDelete.push(arr[i]);
                }
            }
            )     
        console.log('contactsToDelete:', contactsToDelete) ; 
        this.setState({contacts: contactsToDelete});
    };

    handleClick(){
        if (this.state.contacts.length == 0){alert('Нет элементов, удовлетворяющих условиям поиска');}
        else{ 
            for (let i = 0; i < this.state.contacts.length; i++){
                this.props.handleSubmit(this.state.contacts[i])
            }
            
        }
    };
    render() {
        return(
            <form>
            <h2>Удалить контакт</h2>
            <div>
                <label>Поиск по имени</label>
                <div>
            <input value={this.state.name} class="textbox"  onChange={this.handleSearchChange}/><br />
            </div>
                </div>
                <div>
            <input type="reset" class="button" value="Удалить" onClick={this.handleClick}/>
            </div>
            </form>
        )
    }
};

export const DeleteContactContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteContact)