import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = { message: 'no message yet' }

  async getMessage () {
    const res = await fetch('/api/modulea')

    try {
      const data = await res.json()

      this.setState({ message: data.message })
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount () {
    this.getMessage()
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Het bericht is: <code>{this.state.message}</code>.
          </p>
        </header>
      </div>
    )
  }
}

export default App
