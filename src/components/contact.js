import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                {this.props.contactInfo}
            </div>
        );
    }
}

