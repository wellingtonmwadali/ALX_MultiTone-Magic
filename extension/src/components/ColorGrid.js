import React from 'react';
import './ColorGrid.css';

const colors = [
  'midnightblue', 'darkpink', 'red', 'black',
  'darkteal', 'darkblue', 'darkpurple', 'pink',
  'lightgreen', 'lightteal', 'lightblue', 'yellow', 'white'
];

const ColorGrid = () => {
  return (
    <div className="color-grid">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-circle"
          style={{ backgroundColor: color }}
        >
          <span className="color-name">{color}</span>
        </div>
      ))}
    </div>
  );
};

export default ColorGrid;
