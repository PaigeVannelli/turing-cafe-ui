import React, {Component} from 'react'
import './ReservationForm.css'

class ReservationForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            time: '',
            number: '',
        }
    }

    render() {
        return (
            <form>
                <input
                className='form-input'
                type='text'
                placeholder='Name'
                name='name'
                value={this.state.name}
                // onChange={event => this.handleChange(event)}
                />
                <input
                className='form-input'
                type='text'
                placeholder='Date (mm/dd)'
                name='date'
                value={this.state.date}
                // onChange={event => this.handleChange(event)}
                />
                <input
                className='form-input'
                type='text'
                placeholder='Time'
                name='time'
                value={this.state.time}
                // onChange={event => this.handleChange(event)}
                />
                <input
                className='form-input'
                type='text'
                placeholder='Number of guests'
                name='number'
                value={this.state.number}
                // onChange={event => this.handleChange(event)}
                />
                <button className='make-reservation-button'>Make Reservation</button>
            </form>
        )
    }
}

export default ReservationForm