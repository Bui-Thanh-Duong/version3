// App.js
import React from 'react';
import Header from './Header';
import { Hello, HelloPerson } from './Hello';

function App() {
    return (
        <div className="App">
            <Header />
            <Hello />
            <HelloPerson name="Bùi Thành Dương" />
        </div>
    );
}

export default App;
