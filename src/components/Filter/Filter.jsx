import React, { Component } from "react";
import styled from "./Filter.module.css"
import PropTypes from 'prop-types';

export class Filter extends Component {
    render() {
        return (
                <input type="text" id="contact-search" className={styled.filter__search} onChange={this.props.setFilter} placeholder="find contacts by name..."/>
        )
    }
}

Filter.propTypes = {
    setFilter: PropTypes.func
}