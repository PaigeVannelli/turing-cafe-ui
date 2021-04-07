import React, { Component } from 'react';
import './App.css';
import ResyContainer from '../Components/ResyContainer/ResyContainer.js'
import ReservationForm from '../Components/ReservationForm/ReservationForm.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(data => data.json())
    .then(reservations => {
      this.setState({reservations: reservations})
    })
  }

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newReservation)
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <ReservationForm addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ResyContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
