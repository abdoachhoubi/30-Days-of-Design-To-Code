import React from 'react';
import { Cover, Details } from "./containers";
import "./style.css";

const App = () => {
    return (
        <header>
            <Details />
            <Cover />
        </header>
    )
}

export default App;