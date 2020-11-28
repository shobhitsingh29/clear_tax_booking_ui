import React, {useState, useRef} from "react";
import Clubs from "./components/Clubs";
import {Container} from "./styles";

export default function App() {

    const seating = [{
        type: 'Club',
        totalSeats: 20,
        seatInARow: 10,
        maxSelection: 10,
        userSelection: 2,
    },
        {
            type: 'Executive',
            totalSeats: 30,
            seatInARow: 10,
            maxSelection: 10,
            userSelection: 2
        }];

    return (
        <Container>
            {seating?.map(({type, totalSeats, seatInARow, maxSelection, userSelection}) => {

                return (<React.Fragment>
                    <Clubs
                        key={type}
                        label={type}
                        seatInARow={seatInARow}
                        maxSelection={maxSelection}
                        userSelection={userSelection}
                        totalSeats={totalSeats}
                        >
                    </Clubs>
                    <hr    key={type}/>
                </React.Fragment>)

            })}
        </Container>
    );
}
