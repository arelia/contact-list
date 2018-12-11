import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        const {
            adate,
            cdate,
            created_utc_timestamp,
            deleted,
            deleted_at,
            email_domain,
            email_local,
            firstName,
            gravatar,
            hash,
            id,
            ip,
            lastName,
            links,
            organization,
            orgid,
            phone,
            rating_tstamp,
            scoreValues,
            segmentio_id,
            sentcnt,
            socialdata_lastcheck,
            ua,
            udate,
            updated_utc_timestamp
        } = this.props.contactInfo;

        return (
            <div key={id} className="Contact">
                adate: {adate}
                cdate: {cdate}
                created_utc_timestamp: {created_utc_timestamp}
                deleted: {deleted}
                deleted_at: {deleted_at}
                email_domain: {email_domain}
                email_local: {email_local}
                firstName: {firstName}
                gravatar: {gravatar}
                hash: {hash}
                ip: {ip}
                lastName: {lastName}
                {/* links: {links} */}
                organization: {organization}
                orgid: {orgid}
                phone: {phone}
                rating_tstamp: {rating_tstamp}
                {/* scoreValues: {scoreValues} */}
                segmentio_id: {segmentio_id}
                sentcnt: {sentcnt}
                socialdata_lastcheck: {socialdata_lastcheck}
                ua: {ua}
                udate: {udate}
                updated_utc_timestamp: {updated_utc_timestamp}
            </div>
        );
    }
}
