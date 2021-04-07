import React from 'react'

const Reservation = ({name, date, time, number}) => {

    return (
        <article>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of guests: {number}</p>
        </article>
    )
}

export default Reservation