import React from 'react';
import { connect } from 'react-redux'
import LogoutButton from './logout'
import NewRecipeButton from './addrecipe'
import UserRecipesButton from './userrecipes'
import UserPartiesButton from './userparties'
import PartyButton from './addparty'
import * as actions from "../actions/index"
import { withRouter, Route, NavLink } from "react-router-dom";


const Navbar = () => {

    return(
      <div>
      <div className="btn-group btn-group-justified">
        <UserRecipesButton />
        <NewRecipeButton />


        </div>

        <br />
        <br />
      <div className="btn-group btn-group-justified">
       <UserPartiesButton />
        <PartyButton />


        <br />
        <br />


        <LogoutButton />

      </div>

      </div>

  )

}

export default Navbar
