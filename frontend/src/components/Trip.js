import "./TripStyles.css"
import TripData from "./TripData"
import trip1 from "../assets/paris.jpg"
import trip2 from "../assets/paris.jpg"
import trip3 from "../assets/paris.jpg"
function Trip(){
    return(
        <div className="trip">
            <h1>Best Places to Visit Right Now</h1>
            <p>Seasonal Recommendations Based on the Destination's Climate</p>
            <div className="tripcard">
                <TripData
                image={trip1}
                heading="Bali, Indonesia"
                text="Bali, known as the 'Island of the Gods,' is a tropical paradise in Indonesia famous for its stunning beaches, lush rice terraces, and vibrant culture. The island offers a unique blend of natural beauty and rich traditions, with ancient temples, traditional dance performances, and bustling markets. Visitors can explore Ubud's serene landscapes, surf in Kuta, or relax in the luxurious resorts of Seminyak."
                />
                <TripData
                image={trip2}
                heading="Kuala Lumpur, Malaysia"
                text="Bali, known as the 'Island of the Gods,' is a tropical paradise in Indonesia famous for its stunning beaches, lush rice terraces, and vibrant culture. The island offers a unique blend of natural beauty and rich traditions, with ancient temples, traditional dance performances, and bustling markets. Visitors can explore Ubud's serene landscapes, surf in Kuta, or relax in the luxurious resorts of Seminyak."
                />
                <TripData
                image={trip3}
                heading="Paris, France"
                text="Bali, known as the 'Island of the Gods,' is a tropical paradise in Indonesia famous for its stunning beaches, lush rice terraces, and vibrant culture. The island offers a unique blend of natural beauty and rich traditions, with ancient temples, traditional dance performances, and bustling markets. Visitors can explore Ubud's serene landscapes, surf in Kuta, or relax in the luxurious resorts of Seminyak."
                />
            </div>
        </div>
    )
}

export default Trip