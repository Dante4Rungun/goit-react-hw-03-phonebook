import React, { Component } from "react";
import styled from "./ContactForm.module.css"
import PropTypes from 'prop-types';

export class ContactForm extends Component {
    render() {
        return (
            <div className={styled.ContactForm}>
                <div className={styled.ContactForm__ins}>
                    <p className={styled.ContactForm__names}>Name</p>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </div>
                <div className={styled.ContactForm__ins}>
                    <p className={styled.ContactForm__names}>Number</p>
                    <input
                        id="number"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </div>
                <button className={styled.ContactForm__submit} onClick={this.props.addContact}>Add Contact</button>
            </div>
        )
    }
}

ContactForm.propTypes = {
    addContact: PropTypes.func
}