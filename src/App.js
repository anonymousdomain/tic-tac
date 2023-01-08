import React, { useState } from "react";
import Square from "./components/Square";

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));

 const handleClick = (i) => {
    const nextSquares = square.slice();
    nextSquares[i] = "X";
    setSquare(nextSquares);
  };
  return (
    <div>
      <div className="board-row">
        <Square value={square[0]} onSquareClicked={()=>handleClick(0)} />
        <Square value={square[1]} onSquareClicked={()=>handleClick(1)}/>
        <Square value={square[2]} onSquareClicked={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={square[3]} onSquareClicked={()=>handleClick(3)}/>
        <Square value={square[4]} onSquareClicked={()=>handleClick(4)}/>
        <Square value={square[5]} onSquareClicked={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={square[6]} onSquareClicked={()=>handleClick(6)}/>
        <Square value={square[7]} onSquareClicked={()=>handleClick(7)}/>
        <Square value={square[8]} onSquareClicked={()=>handleClick(8)}/>
      </div>
    </div>
  );
}
