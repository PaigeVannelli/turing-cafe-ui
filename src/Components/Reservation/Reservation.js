import React from 'react'
import './Reservation.css'

const Reservation = ({id, name, date, time, number, deleteReservation}) => {

    return (
        <article className='reservation-card'>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of guests: {number}</p>
            <button className='cancel-button' onClick={() => deleteReservation(id)}>Cancel</button>
        </article>
    )
}

export default Reservation