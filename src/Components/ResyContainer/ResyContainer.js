import React from 'react'

const ResyContainer = ({reservations}) => {

    const allReservations = reservations.map(reservation => {
        return (
            <article>
                <h1>{reservation.name}</h1>
                <p>{reservation.date}</p>
                <p>{reservation.time} pm</p>
                <p>Number of guests: {reservation.number}</p>
            </article>
        )
    })

    return (
        <h1>test</h1>
    )
}

export default ResyContainer