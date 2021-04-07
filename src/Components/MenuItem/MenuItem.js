import React, {Component} from 'react'
import '../Reservation/Reservation.css'
import './MenuItem.css'

const MenuItem = ({name, price}) => {
    return (
        <article className='menu-card'>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>
    )
}

export default MenuItem