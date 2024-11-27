import React, { useState } from "react";
import $ from "jquery";

const Controls = ({ onMove }) => {
  const [src, setSrc] = useState("");
  const [dst, setDst] = useState("");

  const movePiece = () => {
    const srcCell = $(`#${src}`);
    const dstCell = $(`#${dst}`);

    if (srcCell.length && dstCell.length && srcCell.html().trim() !== "") {
      const piece = srcCell.html(); // Get the piece being moved
      dstCell.html(piece); // Move the piece to the destination
      srcCell.html("&nbsp;"); // Clear the source cell

      // Notify parent (App.js) about the move
      onMove(`${piece} from ${src} to ${dst}`);
      setSrc("");
      setDst("");
    } else {
      alert("Invalid move! Make sure the source and destination are correct.");
    }
  };

  const resetBoard = () => {
    window.location.reload(); // Simple reset
  };

  return (
    <div className="text-center mt-3">
      <label htmlFor="src">Source: </label>
      <input
        type="text"
        id="src"
        value={src}
        onChange={(e) => setSrc(e.target.value)}
        placeholder="e2"
        className="form-control d-inline-block w-auto"
      />
      <label htmlFor="dst">Destination: </label>
      <input
        type="text"
        id="dst"
        value={dst}
        onChange={(e) => setDst(e.target.value)}
        placeholder="e4"
        className="form-control d-inline-block w-auto"
      />
      <button onClick={movePiece} className="btn btn-primary">Move</button>
      <button onClick={resetBoard} className="btn btn-secondary">Reset</button>
    </div>
  );
};

export default Controls;
