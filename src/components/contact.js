import React, { Component } from 'react';
import '../styles/Contact.css';

export default class Contact extends Component {
    render() {
        const {
            email,
            firstName,
            id,
            lastName,
            phone,
        } = this.props.contactInfo;

        return (
            <div>
                <div key={id} className='Contact'>
                    <p className='contactName'>{firstName} {lastName}</p>
                    {email && <a className='contactEmail' href={`mailto:${email}`}>{email}</a>}
                    {phone && <a className='contactPhone' href={`tel:${phone}`}>{phone}</a>}
                </div>
                <hr className='contactRule'/>
            </div>
        );
    }
}
