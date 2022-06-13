import React, { useState } from 'react';
import { Cover, Details } from "./containers";
import "./style.css";
import projects from "./assets/projects.json";

const App = () => {
    const [ item, setItem ] = useState( 0 );
    const nextItem = () => {
        item === 3 ? setItem( 0 ) : setItem( prev => prev + 1 );
    }

    const prevItem = () => {
        item === 0 ? setItem( 3 ) : setItem( prev => prev - 1 );
    }

    const data = projects[ item ];
    console.log( data );
    return (
        <header>
            <Details data={ data } nextItem={ nextItem } prevItem={ prevItem } item={ item } />
            <Cover data={ data } nextItem={ nextItem } prevItem={ prevItem } />
        </header>
    )
}

export default App;