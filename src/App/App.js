import React, { Component } from 'react';
import './App.css';
import ResyContainer from '../Components/ResyContainer/ResyContainer.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(data => data.json())
    .then(reservations => {
      this.setState({reservations: reservations})
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ResyContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
