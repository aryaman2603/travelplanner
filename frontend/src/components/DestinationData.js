import { Component } from "react";
import { Link } from "react-router-dom";
import "./DestinationStyles.css";

class DestinationData extends Component {
    render() {
        return (
            <div className="destination">
                <div className={this.props.className}>
                    <div className="des-text">
                        <h2>{this.props.heading}</h2>
                        <h3>{this.props.bestTime}</h3>
                        <p>{this.props.text || "Default text: Something is missing!"}</p>

                        <Link to={`/destination/${this.props.city}`}>
                <button className="explore-button">Explore More</button>
            </Link>
                    </div>
                    <div className="image">
                    <img alt="img" src={`${process.env.REACT_APP_BACKEND_URL}/assets/${this.props.img1}`} />
                    <img alt="img" src={`${process.env.REACT_APP_BACKEND_URL}/assets/${this.props.img2}`} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DestinationData;
