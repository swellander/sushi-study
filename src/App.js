import React, { Component } from 'react';
import './App.css';
import sc from './studyCoin';
import web3 from './web3';

class App extends Component {
  state = {
    account: '',
    balance: ''
  }
  componentDidMount() {
    web3.eth.getAccounts()
      .then(([account]) => this.setState({ account }))
      .then(() => sc.methods.balanceOf(this.state.account).call())
      .then(balance => this.setState({ balance }))
      .catch(err => alert(err))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Study Coin!
          {this.state.balance && (
            <div>
              <h3>
                {`Account address: ${this.state.account}`}
              </h3>
              <p>{`Balance: ${this.state.balance}`}</p>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
