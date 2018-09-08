import React from 'react';
import testImage from '../../images/venues/test-throne.jpg'

class EventLink extends React.Component {
    render() {
        const { date, venue, city, eventUrl, tickets, imageUrl, locationUrl } = this.props

        const style = {
            // background: "url("+imageUrl+")",
            background: "url("+testImage+")",
            backgroundSize: "cover",
            backgroundPosition: "center",
        };
        return (
            <div className="event-summary container">
                <div className="wrapper">
                    <a className="event-image" style={style} />
                    <div className="date">{date.day}/{date.month}/{date.year}</div>
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
            </div>
        )
    }
}

export default EventLink