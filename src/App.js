import React, { useState } from "react";
import Square from "./components/Square";
import calculateWinner from "./helper/calculate_winner";

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  // const [status,setStatus]=useState('')

  const winner=calculateWinner(square)
  let status
if(winner){
   status="Winner: "+winner
}else{
   status="Next player: "+(xIsNext?"X":"O")

}
 

  const handleClick = (i) => {
    if (square[i]||calculateWinner(square)) {
      return;
    }
    const nextSquares = square.slice(); 
    if (xIsNext) {
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    setSquare(nextSquares);
    setXisNext(!xIsNext)
  };
  return (
    <div>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square value={square[0]} onSquareClicked={() => handleClick(0)} />
        <Square value={square[1]} onSquareClicked={() => handleClick(1)} />
        <Square value={square[2]} onSquareClicked={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={square[3]} onSquareClicked={() => handleClick(3)} />
        <Square value={square[4]} onSquareClicked={() => handleClick(4)} />
        <Square value={square[5]} onSquareClicked={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={square[6]} onSquareClicked={() => handleClick(6)} />
        <Square value={square[7]} onSquareClicked={() => handleClick(7)} />
        <Square value={square[8]} onSquareClicked={() => handleClick(8)} />
      </div>
    </div>
  );
}

