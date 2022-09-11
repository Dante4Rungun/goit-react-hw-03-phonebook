import React, { Component } from "react";
import styled from "./ContactListItem.module.css"
import PropTypes from 'prop-types';

export class ContactListItem extends Component {
    render() {
        return (
            <div className={styled.item__container}>
                <span>{this.props.name}: {this.props.number}</span>
                <button className={styled.filterList__btn} data-delete={this.props.id} onClick={this.props.removeFromContacts}>Delete</button>
            </div>        
        )
    }
}

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    removeFromContacts: PropTypes.func
}