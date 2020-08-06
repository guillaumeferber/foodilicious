import React, { Component } from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../hoc/Aux/Aux';

class NavigationItems extends Component {
    filters = () => (
        <Aux>
            <NavigationItem link="#all" exact>All</NavigationItem>
            <NavigationItem link="#chicken" exact>Chicken</NavigationItem>
            <NavigationItem link="#fish" exact>Fish</NavigationItem>
            <NavigationItem link="#fruits" exact>Fruits</NavigationItem>
            <NavigationItem link="#pasta" exact>Pasta</NavigationItem>
            <NavigationItem link="#thai" exact>Thai</NavigationItem>
            <NavigationItem link="#chinese" exact>Chinese</NavigationItem>
            <NavigationItem link="#indian" exact>Indian</NavigationItem>
        </Aux>
    );

    mainNavigation = () => (
        <Aux>
            <NavigationItem link="#dinner" exact>Dinner</NavigationItem>
            <NavigationItem link="#lunch" exact>Lunch</NavigationItem>
            <NavigationItem link="#breakfast" exact>Breakfast</NavigationItem>
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
