import React, {useState, useRef} from "react";
import Seats from "./seats";

export default function SeatList({ns, isSelectedArr, rowNo,maxSelection,userSelection}) {
    const [SelectedArr, changeSelectedArr] = useState(isSelectedArr[rowNo] || []);


    let userSelectionState=userSelection;

    const noOfSeats = Array.from(Array(ns).keys());


    const handleSeatSelection = (RrowNo, RindexedSeat, e) => {
        const newSelectedArr = [...SelectedArr];
      //  newSelectedArr[RindexedSeat++] = newSelectedArr[RindexedSeat] ? false : true;
        while(userSelectionState--){


            newSelectedArr[RindexedSeat++] =  true;

        }
        changeSelectedArr(newSelectedArr);

    };

    return (
        <div>
            rowNo:{rowNo}
            {noOfSeats?.map((val, index) => {
                return <Seats
                    key={index}
                    rowNo={rowNo} SelectedArr={SelectedArr} indexedSeat={index}
                    handleSeatSelection={handleSeatSelection}/>
            })}
        </div>
    );
}
