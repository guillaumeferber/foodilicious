import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './_RecipeImage.scss';

class RecipeImage extends Component {

    static propTypes = {
        children: PropTypes.node,
        variant: PropTypes.string,
        className: PropTypes.string,
    };

    static defaultProps = {
        className: "RecipeImage",
        variant: "",
    };

    renderChildren = () => {

        const { label, image, className } = this.props;
        const _classnames = cx(
            className,
            'loaded'
        );

        if (label) { return label; }
        if (image) {
            return (
                <div className="RecipeImage-wrap">
                    <div className={_classnames} ref={this.image}  style={{backgroundImage: `url(${image})`}}></div>
                </div>
            )
        }

        return (
            <div className={className}>
                RecipeImage
            </div>
        );
    }
    render() {

        return (
            this.renderChildren()
     );
    }
}

export default RecipeImage;
