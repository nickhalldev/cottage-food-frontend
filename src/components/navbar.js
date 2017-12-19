import React from 'react';
import { connect } from 'react-redux'
import LogoutButton from './logout'
import * as actions from "../actions/index"
import { withRouter, Route, NavLink } from "react-router-dom";

const logout = () => {
   localStorage.removeItem("token");
   // dispatch clear user data
   // this.props.history.push("/login");
   console.log('I hope im undefined',localStorage.token)
 };

const Navbar = () => {

    return(
      <div>
        <LogoutButton logout={logout}/>
      </div>

  )

}

export default Navbar
