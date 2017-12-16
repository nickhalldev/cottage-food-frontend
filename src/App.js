import React from 'react';
import './App.css';
import Signup from './components/signup'
import Login from './components/login'
import LoginBar from './components/loginNavbar'
// import Navbar from './routes/routes'
import Profile from './components/profile'
import { withRouter, Route, NavLink } from "react-router-dom";

const url =  "http://localhost:3001/api/v1/";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      users: [],
      currentUser: {},
      user: {},
      login: false
    }
  }

  handleLogin = (userData) => {
    localStorage.setItem('token', userData.jwt)
    debugger
    this.setState({user: {username: userData.username, id: userData.id}})
  }

      logout = () => {
         localStorage.removeItem("token");
         this.setState({ currentUser: {} });
         this.props.history.push("/login");
       };

       signup = () => {
         this.props.history.push("/signup");
       };

       backToLogin = () => {
         this.props.history.push("/login");
       };

       profile = () => {
         this.props.history.push("/profile")
       }

       componentDidMount = () => {
         const token = localStorage.getItem("token");

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

       componentDidMount = ( )=> {
         fetch(`${url}users`)
           .then(res => res.json())
           .then(json =>
             this.setState({
               users: json
             })
           )
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

      </div>
    );
  }
}

export default withRouter(App);
