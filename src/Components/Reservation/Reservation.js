import React from 'react'
import './Reservation.css'

const Reservation = ({name, date, time, number}) => {

    return (
        <article className='reservation-card'>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of guests: {number}</p>
        </article>
    )
}

export default Reservation