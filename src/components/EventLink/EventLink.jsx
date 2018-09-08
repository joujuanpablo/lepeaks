import React from 'react';

class EventLink extends React.Component {
    render() {
        const { date, venue, city, blurb, eventUrl, tickets, locationUrl } = this.props

        return (
            <div className="event-summary">
                <div className="wrapper row">
                    <div className="date col-2">
                        <div className="day">{date.day}</div>
                        <div className="month">{date.month}</div>
                        <div className="year">{date.year}</div>
                    </div>
                    <div className="info col-10">
                        <div className="row">
                            <div className="details-box col-12 col-sm-12 col-md-8 col-lg-9">
                                <a className="venue" href={locationUrl}>{venue}, {city}</a>
                                <div className="time">@ {date.time}</div>
                                <div className="blurb">{blurb}</div>
                            </div>
                            <div className="buttons-box col-12 col-sm-12 col-md-4 col-lg-3">
                                <a href={eventUrl} className="details button">Details</a>
                                {
                                    tickets === "" ? <div className="free button">Free</div>
                                        : <a href={tickets} className="tickets button">Tickets</a>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventLink