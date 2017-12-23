import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter, NavLink } from "react-router-dom"
import MapContainer from './map'

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
  {(props.users[0] && props.current_user) ?
  <MapContainer current_user={props.current_user} latitude={props.current_user.latitude} longitude={props.current_user.longitude} addresses={props.users}/>
  : null }
  </div>)
}

const mapStateToProps = state => {
  // console.log("Map State TP in bakersearch", state)
  return {
    users: state.users.users,
    current_user: state.users.current_user.current_user
  }
}


export default withRouter(connect(mapStateToProps, null)(BakerSearch))
//
