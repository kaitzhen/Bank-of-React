// src/components/Credits.js
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Credits extends Component {

creditsView = () => {
    const { credits } = this.props;
    return credits.map((credit) => {
      let date = credit.date.slice(0,10);
      return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
    }) 
  }
  render() {
    return (
        <div>
          <h1>Credits</h1>
          {this.creditsView()}
          <form onSubmit={this.props.addCredit}>
            <input type="text" name="description" />
            <input type="number" name="amount" />
            <button type="submit">Add Credit</button>
          </form>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <Link to="/">Return to Home</Link>
        </div>
      )
  }
  
}

export default Credits;