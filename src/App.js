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
      console.log("credits api");
      console.log(response.data);  
      
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
      //console.log(response.data);  
      this.setState({debits: response.data});  
    } 
    catch (error) {  
      if (error.response) {
        console.log(error.response.data);  
        console.log(error.response.status);  
      }    
    }

    this.calculateCredits();
  
  }  

  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  addDebit = (description,amount,date) => {
    // const newBalance = this.state.accountBalance + amount;
    // this.setState({accountBalance: newBalance});
    let id = description;
    let entry = {id,amount,description,date}
    console.log(entry);
    this.state.debits.push(entry);
    
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
    //console.log(sum);
    this.state.credits.forEach((entry) => {
      //console.log(`${sum}+${entry.amount}`);
      sum+= Number(entry.amount);
      //console.log(sum);
    })
    //console.log(`result---- ${sum}`);
    this.setState({totalCredit: sum});
    const newBalance = sum - Number(this.state.totalDebit);
    console.log(newBalance);
    this.setState({accountBalance: newBalance});
    
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} credits={this.state.totalCredit}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);  // Pass props to "LogIn" component
    const DebitsComponent = () => (<Debits debits={this.state.debits} addDebit={this.addDebit} accountBalance={this.state.accountBalance}/>);  //pass debits array
    const CreditsComponent = () => (<Credits credits={this.state.credits} addCredit={this.addCredit} totalCredit={this.state.totalCredit} accountBalance={this.state.accountBalance}/>);
    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
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