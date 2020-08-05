import React from 'react';
import classes from './_Button.scss';
class Button extends Component {
    render() {
        return (
            <button type="button"
                disabled={props.disabled}
                className={[classes.Button, classes[props.btnType]].join(' ')}
                onClick={props.clicked}>{props.children}</button>
         );
    }
}

export default Button;
