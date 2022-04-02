// src/components/Credits.js
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';


const styles = {
  table: {
    backgroundColor:"#faf4ed",
    border: "1px solid black",
    borderCollapse: "collapse",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px"
  },
  data: {
    backgroundColor:"#faf4ed",
    border: "1px solid black",
    borderCollapse: "collapse",
    padding: "4px"
  }
}

class Credits extends Component {

creditsView = () => {
    const { credits } = this.props;
    return credits.map((credit) => {
      let date = credit.date.slice(0,10);
      return  <tr key={credit.id}>
                <td style={styles.data}>{credit.amount}</td>
                <td style={styles.data}>{credit.description}</td>
                <td style={styles.data}>{date}</td>
              </tr>
          //<li key={credit.id}>{credit.amount} {credit.description} {date}</li>
    }) 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    this.props.addCredit(e.target.description.value,e.target.amount.value,date);
    
  }

  render() {
    return (
        <div>
          <h1>Credits</h1>
          <table className="center" style={styles.table}>
          <tr>
            <th style={styles.data}>Amount</th>
            <th style={styles.data}>Description</th>
            <th style={styles.data}>Date</th>
          </tr>
          {this.creditsView()}
        </table>
          
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="description" />
            <input type="number" name="amount" />
            <button type="submit">Add Credit</button>
          </form>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <p>Total Credit: {this.props.totalCredit}</p>
          <p>Total Debit: {this.props.totalDebit}</p>
          <Link to="/Bank-of-React">Return to Home</Link>
        </div>
      )
  }
  
}

export default Credits;