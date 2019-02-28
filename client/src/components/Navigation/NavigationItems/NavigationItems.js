import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={"NavigationItems"}>
        <NavigationItem link="/"><span style={{marginRight: '30px', marginLeft: '30px', fontSize: '16px'}}>Home</span></NavigationItem>
        <NavigationItem link="/auctions"><span style={{marginRight: '30px', marginLeft: '30px', fontSize: '16px'}}>Auksjoner </span></NavigationItem>
        <NavigationItem link="/"><span style={{marginRight: '30px', marginLeft: '30px', fontSize: '16px'}}>Om oss</span></NavigationItem>
        <NavigationItem link="/contact"><span style={{marginRight: '30px', marginLeft: '30px', fontSize: '16px'}}>Kontakt</span></NavigationItem>
        <NavigationItem link="/login"><span style={{marginRight: '30px', marginLeft: '30px', fontSize: '16px'}}>Logg inn</span></NavigationItem>
    </ul>
);

export default navigationItems;