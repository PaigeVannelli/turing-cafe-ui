import React, {Component} from 'react'

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
                type='text'
                placeholder='name'
                name='name'
                value={this.state.name}
                // onChange={event => this.handleChange(event)}
                />
                <input
                type='text'
                placeholder='date'
                name='date'
                value={this.state.date}
                // onChange={event => this.handleChange(event)}
                />
                <input
                type='text'
                placeholder='time'
                name='time'
                value={this.state.time}
                // onChange={event => this.handleChange(event)}
                />
                <input
                type='text'
                placeholder='number'
                name='number'
                value={this.state.number}
                // onChange={event => this.handleChange(event)}
                />
                <button>Make Reservation</button>
            </form>
        )
    }
}

export default ReservationForm