import React, { Component } from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../hoc/Aux/Aux';

class NavigationItems extends Component {
    filters = () => (
        <Aux>
            <NavigationItem active={this.props.active} filter="all" clicked={(e) => this.props.clicked(e)}>All</NavigationItem>
            <NavigationItem active={this.props.active} filter="chicken" clicked={(e) => this.props.clicked(e)}>Chicken</NavigationItem>
            <NavigationItem active={this.props.active} filter="fish" clicked={(e) => this.props.clicked(e)}>Fish</NavigationItem>
            <NavigationItem active={this.props.active} filter="fruits" clicked={(e) => this.props.clicked(e)}>Fruits</NavigationItem>
            <NavigationItem active={this.props.active} filter="pasta" clicked={(e) => this.props.clicked(e)}>Pasta</NavigationItem>
            <NavigationItem active={this.props.active} filter="thai" clicked={(e) => this.props.clicked(e)}>Thai</NavigationItem>
            <NavigationItem active={this.props.active} filter="chinese" clicked={(e) => this.props.clicked(e)}>Chinese</NavigationItem>
            <NavigationItem active={this.props.active} filter="indian" clicked={(e) => this.props.clicked(e)}>Indian</NavigationItem>
        </Aux>
    );

    mainNavigation = () => (
        <Aux>
            <NavigationItem active={this.props.active} filter="dinner" clicked={(e) => this.props.clicked(e)}>Dinner</NavigationItem>
            <NavigationItem active={this.props.active} filter="lunch" clicked={(e) => this.props.clicked(e)}>Lunch</NavigationItem>
            <NavigationItem active={this.props.active} filter="breakfast" clicked={(e) => this.props.clicked(e)}>Breakfast</NavigationItem>
        </Aux>
    );
    render() {
        return (
            <ul className="NavigationItems">
                {this.props.type === 'filters' ? this.filters() : this.mainNavigation()}
            </ul>
        );
    }
}

export default NavigationItems;
