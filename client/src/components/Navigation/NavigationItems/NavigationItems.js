import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={"NavigationItems"}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/auctions">Auksjoner</NavigationItem> 
        <NavigationItem link="/">Om oss</NavigationItem>
        <NavigationItem link="/">Kontakt</NavigationItem>
        <NavigationItem link="/login">Logg inn</NavigationItem>
    </ul>
);

export default navigationItems;