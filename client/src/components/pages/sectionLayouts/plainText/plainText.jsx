import React, {Component} from "react";
import "./plainText.css";

class PlainText extends Component {

    constructor() {
        super();

        this.plainTextRef = React.createRef();
    }

    componentDidMount() {
        const links = this.plainTextRef.current.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", this.props.openPopup);
        }
    }

    componentWillUnmount() {
        const links = this.plainTextRef.current.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].removeEventListener("click", this.props.openPopup);
        }
    }
    
    render() {
        return(
            <div id="plain-text-container" ref={this.plainTextRef}>
                <p className="text" dangerouslySetInnerHTML={{__html: this.props.text[0]}}></p>
                <p className="text" dangerouslySetInnerHTML={{__html: this.props.text[1]}}></p>
            </div>
        );
    }
}

export default PlainText;