// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import axios from 'axios';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 1500.24,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '07/23/96',
      },
      credits: [],
      debits:[],
      totalCredit:1000,
      totelDebit:10
    }
  }

  async componentDidMount() {
    // let CreditAPILink = 'https://moj-api.herokuapp.com/credits';  

    // try {  
    //   let response = await axios.get(CreditAPILink);
    //   console.log(response.data);  
    //   // To get data object in the response, need to use "response.data"
    //   this.setState({credits: response.data});  // Store received data in state's "users" object
    // } 
    // catch (error) {  // Print out errors at console when there is an error response
    //   if (error.response) {
    //     // The request was made, and the server responded with error message and status code.
    //     console.log(error.response.data);  // Print out error message (e.g., Not Found)
    //     console.log(error.response.status);  // Print out error status code (e.g., 404)
    //   }    
    // }

    let DebitAPILink = 'https://moj-api.herokuapp.com/debits';  

    try {  
      let response = await axios.get(DebitAPILink);
      console.log(response.data);  
      // To get data object in the response, need to use "response.data"
      this.setState({debits: response.data});  // Store received data in state's "users" object
    } 
    catch (error) {  // Print out errors at console when there is an error response
      if (error.response) {
        // The request was made, and the server responded with error message and status code.
        console.log(error.response.data);  // Print out error message (e.g., Not Found)
        console.log(error.response.status);  // Print out error status code (e.g., 404)
      }    
    }
  }  

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  addDebit = (description,amount,date) => {
    // console.log("add descriptionription");
    // console.log(description);
    // console.log("add debit:");
    // console.log(amount);
    const newBalance = this.state.accountBalance + amount;
    this.setState({accountBalance: newBalance});
    // console.log(newBalance);
    // console.log({amount,description,date});
    let id = description;
    let entry = {id,amount,description,date}
    console.log(entry);
    this.state.debits.push(entry);
    
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);  // Pass props to "LogIn" component
    const DebitsComponent = () => (<Debits debits={this.state.debits} addDebit={this.addDebit} accountBalance={this.state.accountBalance}/>);  //pass debits array
    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debits" render={DebitsComponent}/>
          </div>
        </Router>
    );
  }
}

export default App;