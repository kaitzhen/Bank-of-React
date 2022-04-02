// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <p>
          Total Balance: ${this.props.accountBalance.toFixed(2)}
        </p>
    );
  }
}

export default AccountBalance;