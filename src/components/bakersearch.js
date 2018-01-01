import React from 'react';
import { connect } from 'react-redux'
import { withRouter, NavLink } from "react-router-dom"
import MapContainer from './map'

const BakerSearch = (props) => {
var titleize = require('titleize')

let userVariable = props.users[0] ? (
      <div>
      <h1>Available Bakers</h1>
        {props.users.map((user, index) =>{
          return <div className="user-links" key={user.id}>
            <NavLink to={`/baker/${user.id}`}>{titleize(user.username)} </NavLink>
          </div>
        })}
      </div>
  ) : null

return(

    <div>
        {userVariable}
        <div className="baker-map-container">
        {(props.users[0] && props.current_user) ?
          <MapContainer current_user={props.current_user} latitude={props.current_user.latitude} longitude={props.current_user.longitude} addresses={props.users}/>
          : null }
        </div>
  </div>
  )
}



const mapStateToProps = state => {
  return {
    users: state.users.users,
    current_user: state.users.current_user.current_user
  }
}


export default withRouter(connect(mapStateToProps, null)(BakerSearch))

// <div className="column map-baker-search">
// </div>
// <div className="column user-baker-search">
// </div>
