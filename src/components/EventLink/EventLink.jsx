import React from 'react';

class EventLink extends React.Component {
    render() {
        const { date, venue, city, eventUrl, entryType } = this.props
        return (
            <div className="event-summary">
                <div className="date">{date}</div>
                <div className="venue">{venue}</div>
                <div className="city">{city}</div>
                <a href={eventUrl} className="event-link">{entryType}</a>
            </div>
        )
    }
}

export default EventLink