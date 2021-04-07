import React from 'react'

const Reservation = () => {
    
    return (
        <article>
            <h1>{reservation.name}</h1>
            <p>{reservation.date}</p>
            <p>{reservation.time} pm</p>
            <p>Number of guests: {reservation.number}</p>
        </article>
    )
}