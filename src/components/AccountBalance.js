// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div>
          Total Balance: ${this.props.accountBalance.toFixed(2)}
        </div>
    );
  }
}

export default AccountBalance;