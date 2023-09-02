import React from 'react';
import ReactDOM from 'react-dom';
import ColorGrid from './Components/ColorGrid';

document.addEventListener('DOMContentLoaded', () => {
  const colorGridElement = document.getElementById('color-grid');

  colorGridElement.addEventListener('click', (event) => {
    const color = event.target.style.backgroundColor;
    if (color) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: changeBackgroundColor,
          args: [color],
        });
      });
    }
  });

  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  // Initialize the color grid React component
  const colorGridContainer = document.createElement('div');
  colorGridContainer.setAttribute('id', 'color-grid-container');
  document.getElementById('app').appendChild(colorGridContainer);

  // Render the ColorGrid component into the container
  ReactDOM.render(<ColorGrid />, colorGridContainer);
});

