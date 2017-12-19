import React from 'react';
import './App.css';
import Signup from './components/signup'
import Login from './components/login'
import LoginBar from './components/loginNavbar'
import Recipe from './components/recipe'
import Profile from './components/profile'
import { connect } from 'react-redux'
import * as actions from "./actions/index"

// import Container from './components/container'
import { withRouter, Route, NavLink } from "react-router-dom";

const url =  "http://localhost:3001/api/v1/";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      // users: [],
      // user: {},
    }
  }

  componentDidMount(){
    this.authCheck()
  }

  // handleLogin = (userData) => {
  //   localStorage.setItem('token', userData.jwt)
  //   this.setState({user: {username: userData.username, id: userData.id}})
  // }

  authCheck = () => {
    if (localStorage.token){
      console.log("pathname", this.props.location.pathname)
      this.props.fetchingUser()
    } else {
      console.log("not logged in")
      this.backToLogin()
    }
  }

  signup = () => {
     this.props.history.push("/signup");
   };

   backToLogin = () => {
     this.props.history.push("/login");
   };


  render() {
    return (
      <div>
      {this.props.location.pathname !== "/login" &&
        this.props.location.pathname !== "/signup" ? (
          <LoginBar
            handleLogin = {this.handleLogin}
            location={this.props.location.pathname}
            signup={this.signup}
            backToLogin={this.backToLogin}
          />
        ) : (
          <div>
          <LoginBar
            handleLogin = {this.handleLogin}
            location={this.props.location.pathname}
            signup={this.signup}
            backToLogin={this.backToLogin}
          />
          </div>
        )}

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" render={() => <Login handleLogin = {this.handleLogin} profile={this.profile} />}/>
        <Route exact path="/profile" render={() => <Profile user={this.currentUser} />}/>
        <Route exact path="/recipe" render={() => <Recipe user={this.currentUser} />}/>


      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.user
  }
}



export default withRouter(connect(mapStateToProps, actions)(App));
