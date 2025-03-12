import { useParams } from "react-router-dom";

function Explore() {
    const { city } = useParams();

    return (
        <div className="explore-page">
            <h1>Explore {city.replace("-", " ")}</h1>
            <p>Here are some great hotels and things to do in {city.replace("-", " ")}.</p>
            {/* Add hotel and activity details here */}
        </div>
    );
}

export default Explore;
