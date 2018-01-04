import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import MapContainer from './map'

const BakerSearch = (props) => {

// let userVariable = props.users[0] ? (
//       <div>
//       <h1>Available Bakers</h1>
//         {props.users.map((user, index) =>{
//           if (user.id !== props.current_user.id)
//           return <div className="user-links" key={user.id}>
//             <NavLink to={`/baker/${user.id}`}>{user.firstname} </NavLink>
//           </div>
//         })}
//       </div>
//   ) : null

return(

    <div>
        <div className="baker-search-text">
          <h2>Select a baker near you to find some delicious treats.</h2>
        </div>
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
