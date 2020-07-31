import React, {Component} from "react";
import styles from "./ModeChangerButton.module.scss";

export default class ModeChangerButton extends Component {

    handleChange = () => {
        this.props.modeChanger(this.props.type)
    };

    bodyRender = () => {
        if (this.props.type === 'month') {
            return (<p>
                This Month
            </p>)
        } else {
            return (<p>
                This Week
            </p>)
        }
    };

    render() {
        return (
            <div
                className={this.props.isOpen
                    ? styles.modeChangerOpen
                    : styles.modeChangerClosed}

                onClick={this.handleChange}
            >
                {this.bodyRender()}
            </div>
        );
    }
}