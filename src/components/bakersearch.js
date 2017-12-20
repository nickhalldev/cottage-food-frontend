import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter, NavLink } from "react-router-dom"

const BakerSearch = (props) => {

let userVariable = props.users[0] ? (
      <div>
      <h1>Available bakers</h1>
        {props.users.map((user, index) =>{
          return <div key={user.id}>
            <NavLink to={`/baker/${user.id}`}>{user.username} </NavLink>
          </div>
        })}
      </div>
  ) : null

return(
  <div>
  {userVariable}

  </div>
)

}


const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}
  //

export default withRouter(connect(mapStateToProps, actions)(BakerSearch))
