import React, { useState, useRef } from "react";
import SeatList from "../seatList";

export default function Clubs(props) {
  debugger;
  const { label, totalSeats, seatInARow, maxSelection, userSelection } = props;
  const noOfRows = Math.floor(totalSeats / seatInARow);

  const totalRows = Array.from(Array(noOfRows).keys());
  const isSelectedArr = {
    [label]: [[]]
  };

  return (
    <div>
      {label}
      {totalRows?.map((value) => {
        return (
          <SeatList
            key={value}
            isSelectedArr={isSelectedArr[label]}
            userSelection={userSelection}
            maxSelection={maxSelection}
            ns={seatInARow}
            rowNo={value}
          />
        );
      })}
    </div>
  );
}
