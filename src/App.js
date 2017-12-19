import React from 'react';
import './App.css';
import Signup from './components/signup'
import Login from './components/login'
import LoginBar from './components/loginNavbar'
import Recipe from './components/recipe'
import MyRecipes from './components/recipesdisplay'
import Party from './components/party'
import MyParties from './components/partiesdisplay'
import Profile from './components/profile'
import { connect } from 'react-redux'
import * as actions from "./actions/index"
import { withRouter, Route} from "react-router-dom";



class App extends React.Component {
  constructor(props){
    super(props)


    this.state = {
      // users: [],
      // user: {},
    }
  }

  componentDidMount(){
    this.authCheck()
  }

  authCheck = () => {
    if (localStorage.token){
      // console.log("pathname", this.props.location.pathname)
      this.props.fetchingUser()
    } else {
      // console.log("not logged in")
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
    // console.log("APP PROPS", this.props)
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
        <Route exact path="/login" render={() => <Login />}/>

        <Route exact path="/profile" render={() => <Profile  />}/>

        <Route exact path="/myrecipes" render={() => <MyRecipes />}/>
        <Route exact path="/newrecipe" render={() => <Recipe />}/>


        <Route exact path="/myparties" render={() => <MyParties />}/>
        <Route exact path="/newparty" render={() => <Party />}/>



      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    current_user: state.users.current_user
  }
}



export default withRouter(connect(mapStateToProps, actions)(App));
