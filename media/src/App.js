import React from 'react';
import './reset.css';
import './App.css';
import hamburger from './Pic/hamburger.png'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonPressed: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ buttonPressed: !this.state.buttonPressed });
  }
  render(){
    return (
      <div>
        <nav>
          <ul>
            <div className="Boot"><li>Start Bootstrap</li></div>
            <li className="menu">SERVICES</li>
            <li className="menu">PORTFOLIO</li>
            <li className="menu">ABOUT</li>
            <li className="menu">TEAM</li>
            <li className="menu">CONTACT</li>
            <li className="menuBox">
              <button onClick={this.onClick}>
              <h1>MENU</h1>
              <img src={hamburger} alt="hamburger" />
              </button>
            </li>
          </ul>
        </nav>
        <header>
          <div id="title">Welcome To Our Studio!</div>
          <div id="greeting">IT'S NICE TO MEET YOU!</div>
          <button id="btn2">TELL ME MORE</button>
        </header>
      </div>
    )
  }
}
export default App;
