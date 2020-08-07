import React, { Component } from 'react';
import styles from './_Tile.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Tile extends Component {
    static propTypes = {
        children: PropTypes.node,
        variant: PropTypes.string,
        className: PropTypes.string,
        label: PropTypes.string,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        className: "",
        label: "",
        variant: "",
        disabled: false,
        disabledClassName: ""
    };
    renderChildren = () => {
        const { label, children } = this.props;

        if (label) { return label; }
        if (children) { return children; }

        return "Tile";
    }
    render() {
        const {
            className,
            variant,
            disabled,
            disabledClassName
          } = this.props;
        const _classnames = cx(
            className,
            styles[variant],
            styles.tile,
            {
                [disabledClassName]: disabled
            }
        )
        return (
            <div className={_classnames}>{this.renderChildren()}</div>
         );
    }
}

export default Tile;
