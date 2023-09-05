import React, { useState } from 'react';
import './Color.css';

const colors = [
  'midnightblue', 'grey','black',
  'teal', 'darkblue', 'purple', 'pink',
  'lightgreen','lightblue', 'yellow', 'white', 'beige'
];

const ColorGrid = () => {
  const [showColors, setShowColors] = useState(true);

  const toggleColors = () => {
    setShowColors(!showColors);
  };
  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
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

