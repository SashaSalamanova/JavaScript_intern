import {connect} from 'react-redux'
import React from 'react';
import {addContact} from './actions.js';


const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (contact) => {
             dispatch(addContact(contact))
        }
    }
}


class AddContact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name: '', phone: ''};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }

    handleNameChange( event){
        this.setState({name: event.target.value});
    }
 
    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }
    handleClick(){
        let newContact =  {name: this.state.name, phone: this.state.phone}
        this.props.handleSubmit(newContact);
        //console.log(newContact);
 }
      render() {
        return <form>
            <h2>Добавить контакт</h2>
            <div>
            <label>Имя</label>
                <div>
                <input value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                </div>
                <div>
                <label>Телефон</label>
                 <div>
                     <input value={this.state.phone} onChange={this.handlePhoneChange}/>
                     </div>
                    </div>
                <div>
                     <input type="reset" value="Добавить" onClick={this.handleClick}/>
                </div>
        </form>
      }
    }
export const AddContactContainer = connect(0, mapDispatchToProps)(AddContact)