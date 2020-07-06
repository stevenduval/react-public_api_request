import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './assets/stylesheet.css'
import { UserContainer } from './components/UserContainer';

class App extends Component {
  // set states to store users and set loading value
  state = {
    users : [],
    isLoading: true
  };
  // get users from randomuser api
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
    // destructured props
    const { getUsers } = this;
    const { users, isLoading } = this.state;
    return (
      <Fragment>
        <header>
          <div className="header-inner-container">
            <div className="header-text-container">
              <h1>AWESOME STARTUP EMPLOYEE DIRECTORY</h1>
            </div>
          </div>
        </header>
        <UserContainer getUsers={getUsers} results={users} isLoading={isLoading} />
      </Fragment>
    )
  }
}

export default App;
