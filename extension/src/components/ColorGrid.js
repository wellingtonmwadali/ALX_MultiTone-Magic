import React, { useState } from 'react';
import './ColorGrid.css';

const colors = [
  'midnightblue', 'darkpink', 'red', 'black',
  'darkteal', 'darkblue', 'darkpurple', 'pink',
  'lightgreen', 'lightteal', 'lightblue', 'yellow', 'white'
];

const ColorGrid = () => {
  const [showColors, setShowColors] = useState(true);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  return (
    <div className="color-grid">
      {showColors ? (
        colors.map((color, index) => (
          <div
            key={index}
            className="color-circle"
            style={{ backgroundColor: color }}
            onClick={() => changeBackgroundColor(color)}
          >
            <span className="color-name">{color}</span>
          </div>
        ))
      ) : (
        <div className="instructions" onClick={toggleColors}>
          Select your theme
        </div>
      )}
    </div>
  );
};

export default ColorGrid;

