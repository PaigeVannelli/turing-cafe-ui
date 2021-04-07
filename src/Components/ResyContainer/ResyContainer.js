import React from 'react'
import Reservation from '../Reservation/Reservation.js'
import './ResyContainer.css'

const ResyContainer = ({reservations, deleteReservation}) => {

    const allReservations = reservations.map(reservation => {
        return (
            <Reservation 
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
            id={reservation.id}
            deleteReservation={deleteReservation}
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