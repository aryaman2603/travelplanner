import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
    return (
        <div className="trip">
            <h1>Best Places to Visit Right Now</h1>
            <p>Seasonal Recommendations Based on the Destination's Climate</p>
            <div className="tripcard">
                <TripData
                    image={"/assets/cape-town.jpg"}
                    heading="Cape Town, South Africa"
                    text="Cape Town is a breathtaking coastal city in South Africa, known for its diverse culture, stunning landscapes, and vibrant atmosphere. Dominated by the iconic Table Mountain, the city offers spectacular views, golden beaches, and historical sites like Robben Island. Adventure seekers can hike up Lion’s Head, take scenic drives along Chapman’s Peak, or visit the lush Cape Winelands. The bustling V&A Waterfront, colorful Bo-Kaap neighborhood, and abundant wildlife make Cape Town a dynamic and unforgettable travel destination."
                />
                <TripData
                    image={"/assets/reykjavik.jpg"}
                    heading="Reykjavik, Iceland"
                    text="Reykjavik, the capital of Iceland, is a gateway to the country’s breathtaking landscapes. This charming city is known for its colorful houses, lively arts scene, and proximity to natural wonders. Visitors can soak in the Blue Lagoon, explore the Golden Circle, or witness the Northern Lights. Reykjavik also boasts a rich Viking history, delicious Nordic cuisine, and a warm, welcoming atmosphere, making it an ideal starting point for Icelandic adventures."
                />
                <TripData
                    image={"/assets/paris2.jpg"}
                    heading="Paris, France"
                    text="Paris, the enchanting capital of France, is a city of romance, art, and history. Known for its iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral, the city offers endless experiences. Visitors can stroll along the Seine, enjoy world-class cuisine in charming cafés, and explore artistic treasures. With its timeless architecture, vibrant culture, and elegant ambiance, Paris remains one of the most sought-after destinations in the world."
                />
            </div>
        </div>
    );
}

export default Trip;
