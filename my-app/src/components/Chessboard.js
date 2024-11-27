import React from "react";
import "./../styles/chessboard.css";

const ChessBoard = () => {
  const board = [
    ["&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822;", "&#9820;"],
    ["&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;"],
    Array(8).fill("&nbsp;"),
    Array(8).fill("&nbsp;"),
    Array(8).fill("&nbsp;"),
    Array(8).fill("&nbsp;"),
    ["&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;"],
    ["&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;"],
  ];

  return (
    <table>
      {board.map((row, rowIndex) => (
        <tr key={rowIndex}>
          <th>{8 - rowIndex}</th>
          {row.map((cell, colIndex) => (
            <td
              key={`${rowIndex}${colIndex}`}
              id={`${String.fromCharCode(97 + colIndex)}${8 - rowIndex}`}
              dangerouslySetInnerHTML={{ __html: cell }}
            />
          ))}
        </tr>
      ))}
      <tr>
        <th></th>
        {Array.from({ length: 8 }, (_, index) => (
          <th key={index}>{String.fromCharCode(97 + index)}</th>
        ))}
      </tr>
    </table>
  );
};

export default ChessBoard;
