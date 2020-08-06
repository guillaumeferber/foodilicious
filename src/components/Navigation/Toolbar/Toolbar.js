import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => (
    <header className="Toolbar">
        <nav className="DesktopOnly">
            <NavigationItems type="filters"/>
        </nav>
    </header>
);

export default toolbar;
