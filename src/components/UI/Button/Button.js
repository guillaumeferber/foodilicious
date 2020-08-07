import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_Button.scss';

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
        className: "Button",
        label: "",
        size: "medium",
        variant: "primary",
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
        if (children) {
            return (
                <div className="Button__body">
                    {children}
                </div>
            )
         }

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
            size,
            variant,
            {
              [disabledClassName]: disabled
            }
        );

        return (
            <button type="button"
                disabled={this.props.disabled}
                className={_classnames}
                onClick={this.handleClick}>{this.renderChildren()}</button>
         );
    }
}

export default Button;
