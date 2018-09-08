import React from 'react';
import testImage from '../../images/venues/test-throne.jpg'

class EventLink extends React.Component {
    render() {
        const { date, venue, city, blurb, eventUrl, tickets, locationUrl } = this.props

        return (
            <div className="event-summary">
                <div className="wrapper">
                    <div className="date col-md-2">
                        <div className="day">{date.day}</div>
                        <div className="month">{date.month}</div>
                        <div className="year">{date.year}</div>
                    </div>
                    <div className="details-box col-md-7">
                        <a className="venue" href={locationUrl}>{venue}, {city}</a>
                        <div className="time">@ {date.time}</div>
                        <div className="blurb">{blurb}</div>
                    </div>
                    <div className="buttons-box col-md-3">
                        <a href={eventUrl} className="details button">Details</a>
                        {
                            tickets === "" ? <div className="free button">Free</div>
                            : <a href={tickets} className="tickets button">Tickets</a>
                            
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default EventLink