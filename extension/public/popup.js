import React from 'react';
import ReactDOM from 'react-dom';
import ColorGrid from './components/ColorGrid';

document.addEventListener('DOMContentLoaded', () => {
  const colorGridElement = document.getElementById('root');

  colorGridElement.addEventListener('click', (event) => {
    const color = event.target.style.backgroundColor;
    const chrome = window.chrome;
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
  // Append the color grid div to the 'root' div
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.appendChild(colorGridContainer);
    }
  // Render the ColorGrid component into the container
  ReactDOM.render(<ColorGrid />, colorGridContainer);
});

