import React, { Component } from 'react';
import classes from './_Button.scss';
class Button extends Component {
    render() {
        return (
            <button type="button"
                disabled={this.props.disabled}
                className={[classes.Button, classes[this.props.type]].join(' ')}
                onClick={this.props.clicked}>{this.props.children}</button>
         );
    }
}

export default Button;
