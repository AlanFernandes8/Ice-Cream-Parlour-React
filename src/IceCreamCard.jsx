import React from 'react';
import './IceCreamCard.css';

const IceCreamCard = ({ flavor, price, image, available, onSelect, quantity }) => {
    return (
        <div className="ice-cream-card">
            <img src={image} alt={flavor} />
            <h3>{flavor}</h3>
            <p>Price: Rs. {price}</p>
            {available ? (
                <div>
                    <input
                        type="number"
                        min="0"
                        value={quantity}
                        onChange={(e) => onSelect(flavor, e.target.value)}
                    />
                </div>
            ) : (
                <p className="out-of-stock">Out of Stock</p>
            )}
        </div>
    );
};

export default IceCreamCard;