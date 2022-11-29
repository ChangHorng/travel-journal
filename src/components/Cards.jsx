import React from "react"

export default function Cards(props) {
    return (
        <div className="cards">
            <div className="cards-row">
                <img src={`/images/${props.card.imageUrl}`} className="cards-image" />
                <div className="cards-text-column">
                    <div className="cards-places">
                        <img src="/images/location.png" className="cards-location-logo" />
                        <span className="cards-location">
                            {props.card.location.toUpperCase()}
                        </span>
                        <span className="cards-location-url">
                            <a href={props.card.googleMapsUrl}>View on Google Maps</a>
                        </span>
                    </div>
                    <h2 className="cards-title">
                        {props.card.title}
                    </h2>
                    <h3 className="cards-date">
                        {props.card.startDate} - {props.card.endDate}
                    </h3>
                    <p className="cards-details">
                        {props.card.description}
                    </p>
                </div>
            </div>
            {props.card.id !== props.length && <hr></hr>}
        </div>
    )
}