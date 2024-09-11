import React, { useState } from 'react';
import IceCreamCard from './IceCreamCard';
import vanilla from './assets/vanilla.jpg';
import choco from './assets/choco.jpg';
import mint from './assets/mint.jpg';
import strawberry from './assets/strawberry.jpg';
import './App.css';

const iceCreamFlavors = [
    { flavor: 'Vanilla', price: 500, image: vanilla, available: true },
    { flavor: 'Chocolate', price: 250, image: choco, available: true },
    { flavor: 'Strawberry', price: 300, image: strawberry, available: false },
    { flavor: 'Mint', price: 400, image: mint, available: true },
];

const App = () => {
    const [selectedFlavors, setSelectedFlavors] = useState({});

    const handleSelect = (flavor, quantity) => {
        setSelectedFlavors((prev) => ({
            ...prev,
            [flavor]: Number(quantity),
        }));
    };

    return (
        <div className="app">
            <h1>Ice Cream Parlour</h1>
            <div className="ice-cream-list">
                {iceCreamFlavors.map((iceCream) => (
                    <IceCreamCard
                        key={iceCream.flavor}
                        flavor={iceCream.flavor}
                        price={iceCream.price}
                        image={iceCream.image}
                        available={iceCream.available}
                        onSelect={handleSelect}
                        quantity={selectedFlavors[iceCream.flavor] || 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;