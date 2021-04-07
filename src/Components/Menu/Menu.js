import React, {Component} from 'react'
import MenuItem from '../MenuItem/MenuItem'
import './Menu.css'

const Menu = ({drinks, foods}) => {

    const allDrinks = drinks.map(drink => {
        return (
            <MenuItem 
            name={drink.name}
            price={drink.price}
            />
        )
    })

    const allFood = foods.map(food => {
        return (
            <MenuItem 
            name={food.name}
            price={food.price}
            />
        )
    })

    return (
        <section className='menu-section'>
            {allDrinks}
            {allFood}
        </section>
    )
}

export default Menu

