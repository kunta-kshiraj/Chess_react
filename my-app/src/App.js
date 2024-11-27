import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Controls from "./components/Control";
import ChessBoard from "./components/Chessboard";


function App() {
  const [history, setHistory] = useState([]); // State to store move history

  const handleMove = (move) => {
    setHistory((prevHistory) => [...prevHistory, move]); // Add move to history
  };

  return (
    <div className="App">
      <h1>Chess Game</h1>
      <div className="main-container" style={{ display: "flex", gap: "20px" }}>
        <div className="chessboard-container">
          <ChessBoard />
          <Controls onMove={handleMove} />
        </div>
        <div className="history-container">
          <h2>Game History</h2>
          <ul>
            {history.map((move, index) => (
              <li key={index}>{move}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
