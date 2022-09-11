import React, { Component } from "react";
import styled from "./Phonebook.module.css"
import { ContactForm } from "components/ContactForm/ContactForm";
import { nanoid } from 'nanoid'
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import Notiflix from "notiflix";

export class Phonebook extends Component {
    state = {
        contacts: [],
        name: ''
    }
    
    addContact = () => {
        const name = document.getElementById('name').value
        const number = document.getElementById('number').value
        const id = nanoid()
        if (name === "" || number === "") {
            Notiflix.Notify.warning("Please fill all contact data")
        }
        else {
            this.setState(state => ({
                contacts: [...state.contacts, ...[{ id, name, number }]]
            }))
            this.addToLocalStorage([...this.state.contacts, ...[{ id, name, number }]]) //
            console.log(JSON.parse(localStorage.getItem('contacts')))
        }
    }

    setFilter = (event) => {
        this.setState({
            name: document.getElementById('contact-search').value
        })
    }

    search = (event) => {
        this.setFilter(document.getElementById('contact-search').value)
    }

    addToLocalStorage = (stateContacts) => {
        localStorage.setItem('contacts',JSON.stringify(stateContacts))
    }
    
    addContactWithCheck = (event) => {
        const name = document.getElementById('name').value
        if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) === undefined) {
            this.addContact()
        }
        else {
            alert(`${name} is already in contacts`)
        }
        //console.log(this.state.contacts)
    }

    removeFromContacts = (event) => {  
        const changed = this.state.contacts
        console.log(this.state.contacts.findIndex(contact => contact.id === event.target.getAttribute("data-delete")))
        changed.splice(this.state.contacts.findIndex(contact => contact.id === event.target.getAttribute("data-delete")), 1)
        //save to local Storage
        this.addToLocalStorage(changed)
        this.setState(state => ({
            contacts: changed
        }))
        console.log(JSON.parse(localStorage.getItem('contacts')))
    }

    async componentDidMount() {
        const dataLocalStorage = JSON.parse(localStorage.getItem('contacts'))
        if (dataLocalStorage != null) 
            this.setState({ contacts: dataLocalStorage});           
    }

    render() {
        const {contacts,name} = this.state
        return (
            <div className={styled.phonebook}>
                <h1 className={styled.phonebook__title}>Phonebook</h1 >
                <ContactForm addContact={this.addContactWithCheck} />
                <h2 className={styled.phonebook__contacts}>Contacts</h2>
                <Filter setFilter={this.setFilter} />
                <ContactList contacts={contacts} filter={name} removeFromContacts={this.removeFromContacts} />
            </div>
        )
    }
}