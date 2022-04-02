// src/components/Debits.js
import React, { Component } from 'react'
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Debits extends Component {

  debitsView = () => {
    const { debits } = this.props;
    return debits.map((debit) => {
        let date = debit.date.slice(0,10);
        return <tr key={debit.id}>
                  <td>{debit.amount}</td>
                  <td>{debit.description}</td>
                  <td>{date}</td>
               </tr>
        //<li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    }) 
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    this.props.addDebit(e.target.description.value,e.target.amount.value,date);
    
  }


  render() {
    return (
      <div>
        <h1>Debits</h1>
        <table>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
          {this.debitsView()}
        </table>
        
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="description" placeholder='description' />
            <input type="number" name="amount" placeholder='amount' />
            <button type="submit">Add Debit</button>
          </form>

          <AccountBalance accountBalance={this.props.accountBalance}/>
          <p>Total Credit: {this.props.totalCredit}</p>
          <p>Total Debit: {this.props.totalDebit}</p>
          <Link to="/">Return to Home</Link>

          
        
      </div>

    )    
        
  }
}

export default Debits;