import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';
import cx from 'classnames';
class Button extends Component {

    static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.node,
        variant: PropTypes.string,
        className: PropTypes.string,
        label: PropTypes.string,
        size: PropTypes.string,
        disabledClassName: PropTypes.string,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        className: "",
        label: "",
        size: "",
        variant: "",
        disabled: false,
        disabledClassName: ""
    };

    handleClick = event => {
        const { onClick, disabled } = this.props;

        if (disabled) return;

        onClick && onClick({ event });
    }

    renderChildren = () => {
        const { label, children } = this.props;

        if (label) { return label; }
        if (children) { return children; }

        return "Button";
    }

    render() {
        const {
            className,
            size,
            variant,
            disabled,
            disabledClassName
          } = this.props;

          const _classnames = cx(
            className,
            styles[size],
            styles[variant],
            styles.Button,
            {
              [disabledClassName]: disabled
            }
        );

        console.log(styles);


        return (
            <button type="button"
                disabled={this.props.disabled}
                className={_classnames}
                onClick={this.handleClick}>{this.renderChildren()}</button>
         );
    }
}

export default Button;
