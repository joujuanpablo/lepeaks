import React from 'react';

class EventLink extends React.Component {
    render() {
        const { date, venue, city, eventUrl, tickets, image, locationUrl } = this.props
        return (
            <div className="event-summary">
                <div className="event-image">{image}</div>
                <div className="date">{date}</div>
                <a className="venue" href={locationUrl}>{venue}</a>
                <div className="city">{city}</div>
                <a href={eventUrl} className="event-link">Details</a>
                <div className="button-box">
                    {
                        tickets === "" ? <div className="free">Free</div>
                            : <a href={tickets} className="tickets">Tickets</a>

                    }
                </div>
            </div>
        )
    }
}

export default EventLink