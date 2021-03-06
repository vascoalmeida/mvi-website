import React, {Component} from "react";
import "./landingSection.css";

class LandingSection extends Component {
    render() {
        return(
            <div id="landing-section-container">
                <div id="landing-section-content">
                    <div id="image-container">
                        <img src={process.env.PUBLIC_URL + this.props.image} alt="welcome banner" />
                    </div>

                    <div id="landing-info">
                        <h1 className="title">{this.props.title}</h1>
                        <p className="text">{this.props.text}</p>
                    </div>

                    <div id="scroll-line"></div>
                </div>
            </div>
        );
    }
}

export default LandingSection;
