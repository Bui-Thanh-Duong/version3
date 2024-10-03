import React, { useState } from 'react';

function Car() {
    const [car, setCar] = useState({
        name: 'Toyota',
        color: 'Red',
        year: 2020
    });

    const [newYear, setNewYear] = useState('');

    const updateYear = () => {
        setCar({ ...car, year: parseInt(newYear) });
        setNewYear('');
    };

    return (
        <>
            <h2>Show information of Car:</h2>
            <p>Name: {car.name}</p>
            <p>Color: {car.color}</p>
            <p>Year: {car.year}</p>
            <div>
                <label>Update Year of Car: </label>
                <input
                    type="number"
                    value={newYear}
                    onChange={(e) => setNewYear(e.target.value)}
                />
                <input
                    type="button"
                    value="Update Year"
                    onClick={updateYear}
                />
            </div>
        </>
    );
}

export default Car;
