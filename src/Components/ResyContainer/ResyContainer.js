import React from 'react'
import Reservation from '../Reservation/Reservation.js'
import './ResyContainer.css'

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
        <section className='reservations-section'>
            {allReservations}
        </section>
    )
}

export default ResyContainer