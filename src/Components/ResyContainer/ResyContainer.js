import React from 'react'
import Reservation from '../Reservation/Reservation.js'

const ResyContainer = ({reservations}) => {

    const allReservations = reservations.map(reservation => {
        return (
            <Reservation 
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
            />
        )
    })

    return (
        <section>
            {allReservations}
        </section>
    )
}

export default ResyContainer