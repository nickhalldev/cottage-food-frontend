import React from 'react';
import './App.css';
import Signup from './components/signup'
import Login from './components/login'
import LoginBar from './components/loginNavbar'
import Recipe from './components/recipe'
// import Navbar from './routes/routes'
import Profile from './components/profile'
import { withRouter, Route, NavLink } from "react-router-dom";

const url =  "http://localhost:3001/api/v1/";

class Container extends React.Component {
  constructor(){
    super()
    this.state = {
      users: [],
      currentUser: {},
      user: {},
      login: false
    }
  }

  //don't want signup or login. just want to get user data from set_user
//put null and actions when I connect to store in my export
       componentDidMount = () => {
         if (token) {
           fetch(`${url}current_user`, {
             headers: {
               "content-type": "application/json",
               accept: "application/json",
               Authorization: `Token ${localStorage.getItem('jwt')}`
             }
           })
           .then(res => res.json())
           .then(json => this.setState({ currentUser: json }), () => this.props.history.push("/profile"));

         } else {
           if (!window.location.href.includes("signup")) {
             this.props.history.push("/login");
           }
         }
       }





  render() {
    return (
      <div>
      {this.props.location.pathname !== "/login" &&
        this.props.location.pathname !== "/signup" ? (
          // <Navbar
          //   logout={this.logout}
          // />
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


export default withRouter(Container);
