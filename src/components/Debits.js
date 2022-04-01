// src/components/Debits.js
import React, { Component } from 'react'
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Debits extends Component {
  constructor () {  // Create and initialize state
    super()
    

    
  }

  debitsView = () => {
    const { debits } = this.props;
    return debits.map((debit) => {
        let date = debit.date.slice(0,10);
        return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    }) 
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.description.value);
    console.log(e.target.amount.value);
    const current = new Date();
    //console.log(current.getDate());
    //console.log(current.getMonth());
    //console.log(current.getFullYear());
    //const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    //console.log(date);
    this.props.addDebit(e.target.description.value,e.target.amount.value,date);
    
    
    
  }
  render() {
    return (
      <div>
        <h1>Debits</h1>
        {this.debitsView()}
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="description" placeholder='description' />
            <input type="number" name="amount" placeholder='amount' />
            <button type="submit">Add Debit</button>
          </form>

          <AccountBalance accountBalance={this.props.accountBalance}/>
          <Link to="/">Return to Home</Link>

          
        
      </div>

    )    
        
  }
}

export default Debits;