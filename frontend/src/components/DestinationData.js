import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
    render() {
        return (
            <div className="destination">
                <div className={this.props.className}>
                    <div className="des-text">
                        <h2>{this.props.heading}</h2>
                        <h3>{this.props.bestTime}</h3>
                        <p>{this.props.text}</p>
                    </div>
                    <div className="image">
                        <img alt="img" src={require(`../assets/${this.props.img1}`)} />
                        <img alt="img" src={require(`../assets/${this.props.img2}`)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DestinationData;
