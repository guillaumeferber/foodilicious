import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux/Aux';

const sideToolbar = ( props ) => {

    return (
        <Aux>
            <div className="SideToolbar">
                <nav>
                    <NavigationItems active={props.selected} type="main" clicked={(e) => props.clicked(e, 'type')}/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideToolbar;
