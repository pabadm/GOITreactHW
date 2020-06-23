import React from 'react';
// import ReactDOM from 'react-dom';
import styles from './Phonebook.module.css';
// import shortid from 'shortid';

const Contact = ({name}) =>{
    return(
        <li className={styles.Contact}>
            <span class={styles.contactName}>{name}</span>
        </li>
    )
}

class ContactAdder extends React.Component{

    // contactId = shortid.generate();

    state={
        name = '',
    }
    handleChange = () => this.setState({name=value})

    // render(){
    //     return(
    //         <form className={styles.ContactAdder}>
    //             <input className={styles.nameInput}
    //             name='contact'
    //             type="checkbox"
    //             onChange={this.handleChange}></input>
    //         </form>
    //     )
    // }
}