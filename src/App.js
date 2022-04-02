// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
import axios from 'axios';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '07/23/96',
      },
      credits: [],
      debits:[],
      totalCredit:0,
      totalDebit:0
    }
  }

  async componentDidMount() {
    let CreditAPILink = 'https://moj-api.herokuapp.com/credits';  

    try {  
      let response = await axios.get(CreditAPILink); 
      this.setState({credits: response.data});  
    } 
    catch (error) {  
      if (error.response) {
        
        console.log(error.response.data); 
        console.log(error.response.status);  
      }    
    }

    let DebitAPILink = 'https://moj-api.herokuapp.com/debits';  

    try {  
      let response = await axios.get(DebitAPILink); 
      this.setState({debits: response.data});  
    } 
    catch (error) {  
      if (error.response) {
        console.log(error.response.data);  
        console.log(error.response.status);  
      }    
    }

    this.calculateCredits();
    this.calculateDebits();
  
  }  

  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  addDebit = (description,amount,date) => {
    let id = description;
    let entry = {id,amount,description,date}
    console.log(entry);
    this.state.debits.push(entry);
    this.calculateDebits();
    
  }

  calculateDebits = () => {
    let sum = Number('0');
    this.state.debits.forEach((entry) => {
      sum+= Number(entry.amount);
      
    })
    this.setState({totalDebit: sum});
    const newBalance = Number(this.state.totalCredit) - sum;
    console.log(newBalance);
    this.setState({accountBalance: newBalance});
    
  }

  addCredit = (description,amount,date) => {
    let id = description;
    let entry = {id,amount,description,date}
    console.log(entry);
    this.state.credits.push(entry);
    this.calculateCredits();
    
  }

  calculateCredits = () => {
    let sum = Number('0');
    this.state.credits.forEach((entry) => {
      sum+= Number(entry.amount);
    
    })
    this.setState({totalCredit: sum});
    const newBalance = sum - Number(this.state.totalDebit);
    console.log(newBalance);
    this.setState({accountBalance: newBalance});
    
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} totalCredit={this.state.totalCredit} totalDebit={this.state.totalDebit}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);  // Pass props to "LogIn" component
    const DebitsComponent = () => (<Debits debits={this.state.debits} addDebit={this.addDebit} totalDebit={this.state.totalDebit} totalCredit={this.state.totalCredit} accountBalance={this.state.accountBalance}/>);  
    const CreditsComponent = () => (<Credits credits={this.state.credits} addCredit={this.addCredit} totalCredit={this.state.totalCredit} totalDebit={this.state.totalDebit} accountBalance={this.state.accountBalance}/>);
    return (
        <Router>
          <div>
            <Route exact path="/Bank-of-React" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debits" render={DebitsComponent}/>
            <Route exact path="/credits" render={CreditsComponent}/>
          </div>
        </Router>
    );
  }
}

export default App;