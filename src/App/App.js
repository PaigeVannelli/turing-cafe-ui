import React, { Component } from 'react';
import './App.css';
import ResyContainer from '../Components/ResyContainer/ResyContainer.js'
import ReservationForm from '../Components/ReservationForm/ReservationForm.js'
import Menu from '../Components/Menu/Menu'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      drinks: [],
      foods: []
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

  deleteReservation = async (id) => {
    const deleteResponse = await fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
    if (deleteResponse.ok) {
      fetch('http://localhost:3001/api/v1/reservations')
      .then(data => data.json())
      .then(reservations => {
        console.log(reservations)
        this.setState({reservations: reservations})
      })
    } else {
      console.log('Reservation could not be delete. Please try again later')
    }
  }

  getMenuItems = () => {
    fetch('http://localhost:3001/api/v1/menu')
    .then(data => data.json())
    .then(menuItems => {
      this.setState({drinks: menuItems.drinks, foods: menuItems.food})
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm addReservation={this.addReservation}/>
          <button className='view-menu-button' onClick={() => this.getMenuItems()}>View Menu</button>
        </div>
        <div className='resy-container'>
          <ResyContainer reservations={this.state.reservations} deleteReservation={this.deleteReservation}/>
          {
            this.state.drinks.length > 0 && 
            <Menu drinks={this.state.drinks} foods={this.state.foods} />
          }
        </div>
      </div>
    )
  }
}

export default App;
