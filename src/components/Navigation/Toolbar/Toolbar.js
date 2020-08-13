import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => (
    <header className="Toolbar">
        <nav className="DesktopOnly">
            <NavigationItems active={props.selected} type="filters" clicked={(e) => props.clicked(e, 'ingredient')}/>
        </nav>
    </header>
);

export default toolbar;
