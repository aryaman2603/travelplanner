import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DestinationDetailStyles.css"; // Import new CSS file

export default function DestinationDetail() {
    const { city } = useParams();
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/destinations/${city}`)

            .then(response => response.json())
            .then(data => setDestination(data))
            .catch(error => console.error("Error fetching data:", error));
    }, [city]);

    if (!destination) return <p>Loading...</p>;

    return (
        <div className="destination-detail">
            <i className="fa-solid fa-house home-icon" onClick={() => navigate("/")}></i>
            <h1>{destination.city}, {destination.country}</h1>
            <p>{destination.description}</p>

            <div className="detail-container">
                <div className="detail-text">
                    <h2>Best Time to Visit</h2>
                    <p>{destination.best_months}</p>
                    <h2>About</h2>
                    <p>{destination.brief_description}</p>
                </div>

                <div className="detail-images">
                <img src={`/assets/${destination.image_url}`} alt={destination.city} />
                <img src={`/assets/${destination.image_url2}`} alt={destination.city} />

                </div>
            </div>

            <div className="detail-list">
                <h2>Top Hotels</h2>
                <ul>
                    <li>{destination.hotel1}</li>
                    <li>{destination.hotel2}</li>
                    <li>{destination.hotel3}</li>
                    <li>{destination.hotel4}</li>
                </ul>

                <h2>Things to Do</h2>
                <ul>
                    <li>{destination.thing_to_do1}</li>
                    <li>{destination.thing_to_do2}</li>
                    <li>{destination.thing_to_do3}</li>
                    <li>{destination.thing_to_do4}</li>
                    <li>{destination.thing_to_do5}</li>
                </ul>
            </div>
        </div>
    );
}


