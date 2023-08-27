import React, { useState} from 'react'
import './Grid.css'
const Grid = () => {

    const [grid, setGrid] = useState(Array(8).fill(Array(8).fill(false)));

  const toggleCell = (clickedRow, clickedColumn) => {
    const newGrid = grid.map((rowArray, rowIndex) =>
   
      rowArray.map((cell, colIndex) =>
        rowIndex === clickedRow && colIndex === clickedColumn ? !cell : cell
      )
    );
  
    console.log("happy", newGrid)
    setGrid(newGrid);
  };

  

  console.log("this is my grid", grid)

  return (
    <div className="Grid">
        <p> <strong>Idea Usher Frontend Task</strong></p>
      <div className="grid-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell ? 'red' : (colIndex + rowIndex) % 2 === 0 ? 'black' : 'white'}`}
                onClick={() => toggleCell(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid
