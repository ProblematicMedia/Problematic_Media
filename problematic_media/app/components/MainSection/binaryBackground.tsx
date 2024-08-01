// DynamicBackground.js
import React, { useState, useEffect } from 'react';
import './BinaryBackground.css';

const generateMatrix = (rows, cols) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(Math.random() > 0.5 ? '1' : '0');
    }
    matrix.push(row);
  }
  return matrix;
};

const DynamicBackground = () => {
  const [matrix, setMatrix] = useState([]);
  const [cols, setCols] = useState(10);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    const updateMatrix = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      console.log(width);
      console.log(height);

      const newCols = Math.floor(width / 20);
      const newRows = Math.floor(height / 20);

      console.log(newCols)
      console.log(newRows)

      setCols(newCols);
      setRows(newRows);
      setMatrix(generateMatrix(newRows, newCols));
    };

    updateMatrix(); // Initial update
    window.addEventListener('resize', updateMatrix); // Update on resize

    return () => window.removeEventListener('resize', updateMatrix); // Cleanup
  }, []);

  return (
    <div className="background">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className={`cell ${cell}`}>{cell}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DynamicBackground;
