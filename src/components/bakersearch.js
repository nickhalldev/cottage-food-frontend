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
  {(props.current_user.latitude && props.users[0]) ?
  <MapContainer latitude={props.current_user.latitude} longitude={props.current_user.longitude} addresses={props.users}/>
  : null }
  </div>
)

}


const mapStateToProps = state => {
  console.log('this is current_users',state.users.current_user.latitude)

  return {
    users: state.users.users,
    current_user: state.users
  }
  console.log('this is users after ',this.props.users)
}
  //

export default withRouter(connect(mapStateToProps, actions)(BakerSearch))
