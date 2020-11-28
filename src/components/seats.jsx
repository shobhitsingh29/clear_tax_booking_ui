import React, {useState, useRef, useEffect} from "react";
import {SeatButton} from "../styles";

export default function Seats({indexedSeat, rowNo, handleSeatSelection, SelectedArr}) {

    useEffect(() => {

        console.log('&&&&', SelectedArr[indexedSeat]);

    }, [SelectedArr]);
    return (
        <SeatButton isSelected={SelectedArr[indexedSeat]} onClick={handleSeatSelection.bind(null, rowNo, indexedSeat)}>
            {indexedSeat}
        </SeatButton>
    );
}
