import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './assets/stylesheet.css'
import UserContainer from './components/UserContainer';

class App extends Component {

  state = {
    users : [],
    isLoading: true
  };

  getUsers = () => {
    this.setState({isLoading: true});
    axios.get(`https://randomuser.me/api/?results=12&nat=US`)
      // set states upon successful response
      .then( response => {
        this.setState({
          users: response.data.results,
          isLoading: false
        });
      })
      // throw error if unsuccessful
      .catch( error => {
        console.log('Error fetching data: ', error);
      })
  }

  render() {
    return (
      <Fragment>
        <header>
          <div className="header-inner-container">
            <div className="header-text-container">
              <h1>AWESOME STARTUP EMPLOYEE DIRECTORY</h1>
            </div>
          </div>
        </header>
        <UserContainer getUsers={this.getUsers} results={this.state.users} />
      </Fragment>
    )
  }
}
export default App;
