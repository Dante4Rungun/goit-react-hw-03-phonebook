//import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import React, { Component } from "react";
import styled from "./ContactList.module.css"
import PropTypes, { object } from 'prop-types';

export class ContactList extends Component {
    render() {
        return (
            <ul id="filter-list" className={styled.filterList}>
                {this.props.contacts.filter(contact => contact.name.toLowerCase().includes(this.props.filter.toLowerCase())).map(contact => (
                    <li key={contact.id} className={styled.filterList__item}>
                        <ContactListItem id={contact.id} name={contact.name} number={contact.number} removeFromContacts={this.props.removeFromContacts} />
                    </li>                   
                ))}
            </ul>   
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(object),
    filter: PropTypes.string,
    removeFromContacts: PropTypes.func    
}