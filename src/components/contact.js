import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        const {
            // adate,
            // cdate,
            // created_utc_timestamp,
            // deleted,
            // deleted_at,
            email,
            // email_domain,
            // email_local,
            firstName,
            // gravatar,
            // hash,
            id,
            // ip,
            lastName,
            // links,
            // organization,
            // orgid,
            phone,
            // rating_tstamp,
            // scoreValues,
            // segmentio_id,
            // sentcnt,
            // socialdata_lastcheck,
            // ua,
            // udate,
            // updated_utc_timestamp
        } = this.props.contactInfo;

        return (
            <div>
                <div key={id} className="Contact">
                    <p className='contactName'>{firstName} {lastName}</p>
                    {email && <a className='contactEmail' href={`mailto:${email}`}>{email}</a>}
                    {phone && <a className='contactPhone' href={`tel:${phone}`}>{phone}</a>}
                </div>
                <hr className='contactRule'/>
            </div>
        );
    }
}
