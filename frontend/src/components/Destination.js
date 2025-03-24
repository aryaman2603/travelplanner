import { useEffect, useState } from "react";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/destinations`)
            .then((res) => res.json())
            .then((data) => setDestinations(data))
            .catch((err) => console.error("Error fetching destinations:", err));
    }, []);

    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Nothing more fulfilling than a well-planned trip!</p>
            {destinations.map((destination, index) => (
                <DestinationData
                    key={destination.id}
                    className={index % 2 === 0 ? "first-des" : "first-des-reverse"}
                    heading={destination.city + ", " + destination.country}
                    city={destination.city}
                    bestTime={`Best Time to Visit: ${destination.best_months}`}
                    text={destination.description}
                    img1={`/assets/${destination.image_url}`} // Updated Image Path
                    img2={`/assets/${destination.image_url2}`} // Updated Image Path
                />
            ))}
        </div>
    );
};

export default Destination;
