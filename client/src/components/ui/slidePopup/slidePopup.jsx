import React, {Component} from "react";
import "./slidePopup.css";

class SlidePopup extends Component {
    render() {
        console.log(this.props);
        return (
            <div id="slide-popup-container">
                <div id="slide-popup">
                    <div id="slide-popup-cross-container">
                        <img src={window.location.origin + "/img/black_cross.png"} onClick={this.props.closePopup} alt="Closing cross" />
                    </div>
                    <div id="slide-popup-img-container">
                        <img src={window.location.origin + "/img/" + this.props.image} alt="Chinese writting" />
                        <img src={window.location.origin + "/img/" + this.props.image} alt="Chinese writting" />
                    </div>
                    <div className="title">{this.props.title}</div>
                    {
                        this.props.text.map(paragraph => (
                            <p className="text">{paragraph}</p>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default SlidePopup;