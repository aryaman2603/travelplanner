import { useEffect, useState } from "react";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/destinations") // Change URL if needed
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
                    img1={destination.image_url} 
                    img2={destination.image_url2} 
                />
            ))}
        </div>
    );
};

export default Destination;
