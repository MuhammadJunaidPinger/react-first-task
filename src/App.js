import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    // user: "kashif",
    textValue: '',
    someThing: 23,
    bulb: true,
    switch: false
  }

  changeSomething = () => {
    this.setState({
      someThing: 50
    })
  }

  logout = () => {
    this.setState({
      user: ''
    })
  }

  login = () => {
    this.setState({
      user: 'kashif'
    })
  }

  updateText = (e) => {
    this.setState({
      textValue: e.target.value
    })
  }
  bulb_on = () => {
    this.setState({
      bulb: true,
      switch: false
    })
  }
  bulb_off = () => {
    this.setState({
      bulb: false,
      switch: true
    })
  }

  render() {
    const text = "Expertizo"
    const posts = [
      { title: "Mobile for sale", price: 10000 },
      { title: "Charger", price: 500 },
      { title: "Laptop for sale", price: 20000 },
    ]
    const cars = [
      { name: "Civic", img: "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2020/Civic-Sedan/VLP/Hero/MY20-Civic-Exterior-C-768-2x.jpg%202x" },
      { name: "Saloon", img: "https://cache2.pakwheels.com/system/car_generation_pictures/2866/original/Toyota_Corolla_9th.jpg?1444079005" },
      { name: "Cultus", img: "https://excellent.pk/wp-content/uploads/2016/05/suzuki-cultus-large2.png" }
    ]
    console.log("render something--> ", this.state.someThing)
    return (
      <div className="App">
        <header className="App-header">
          <p>User information: {JSON.stringify(this.state.user)}</p>
          {this.state.user ? <button onClick={this.logout}>Logout</button>
            : <button onClick={this.login}>Login</button>}

          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
        </p> */}

          <input onChange={this.updateText} value={this.state.textValue} />
          <p>{this.state.textValue}</p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React from {text}
          </a>
          <ul>
            {posts.map(function (item) {
              return <li>
                {item.title}<br />
                {"price => " + item.price}
              </li>
            })}
          </ul>
          <ul>
            {cars.map(function (item) {
              return <li>
                {item.name}
                <img src={item.img} width='200px' height='100px'></img>
              </li>
            })}
          </ul>
          <div>
            <p>Something value: {this.state.someThing}</p>
            <button onClick={this.changeSomething}>Change SomeThing</button>
          </div>
          <br /><br />
          <div>
            {this.state.bulb ? <img src="https://cdn4.vectorstock.com/i/1000x1000/26/28/light-bulb-on-white-background-vector-3872628.jpg"
              width="100" /> :
              <img src="https://ak4.picdn.net/shutterstock/videos/1009297604/thumb/1.jpg"
                width="100" height='100' />}
            {this.state.switch ? <button onClick={this.bulb_on}>Switch On</button>
              : <button onClick={this.bulb_off}>Switch Off</button>}
          </div>
        </header>
      </div>
    );
  }
}

export default App;