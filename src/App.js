import React, { useState } from "react";
import Square from "./components/Square";
import calculateWinner from "./helper/calculate_winner";

function Board({ xIsNext, onPlay, square }) {
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const handleClick = (i) => {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquares = square.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
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

export default function Game() {

const [history, setHistory] = useState([Array(9).fill(null)]);
const [currentMove, setCurrentMove] = useState(0);
const currentSquare = history[currentMove];
const xIsNext=currentMove%2===0;

  const handlePlay = (nextSquares) => {
    const nextHistory=[...history.slice(0,currentMove+1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1)
  };
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  
  }
  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = `Go to move # ${move}`;
    } else {
      description = "Go to Game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
