import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import Datetime from 'react-datetime';
import MapContainer from './map'
import BakerRecipe from './bakerRecipe'
import moment from "moment"
import * as actions from "../actions/index"

const url = "http://localhost:3001/api/v1/"

class BakerShow extends React.Component {
  constructor(){
    super()

    this.state = {
      recipes: [],
      eventDateTime: moment(),
      totalCost: 0,
      recipeTransactions: {},
      addresses: [],
      firstname: '',
      lastname: '',
    }
    this.handleTotalCostChange = this.handleTotalCostChange.bind(this)
  }

componentDidMount(){
  let baker_id = this.props.match.params.id

  if(baker_id){
  this.fetchBaker(baker_id)
  }
}

fetchBaker = (baker_id) => {
  fetch(`${url}users/${baker_id}`)
  .then(res => res.json())
  .then(res =>
    this.setState({
    recipes: res.recipes,
    firstname: res.current_user.firstname,
    lastname: res.current_user.lastname,
    latitude: res.current_user.latitude,
    longitude: res.current_user.longitude,
    addresses:[{id: res.current_user.id, firstname: res.current_user.firstname, username: res.current_user.username, latitude: res.current_user.latitude, longitude: res.current_user.longitude}]
    })
  )
}

handleDateChange = (event) => {
  this.setState({
    eventDateTime: event._d
  })
}

handleTotalCostChange(change){
  this.setState({
    totalCost: (this.state.totalCost + change)
  })
}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

handleSubmit = () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  fetch(`${url}transacts`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      purchaser_id: this.props.current_user.id,
      baker_id: this.props.match.params.id,
      delivery_distance:1, //need to run my distance calculator with this or delete
      purchaser_longitude: this.props.current_user.longitude,
      purchaser_latitude: this.props.current_user.latitude,
      total_cost: this.state.totalCost,
      delivery_date_time: this.state.eventDateTime
    })
  }).then(res => {
    this.props.fetchingAllUserData(this.props.user_id)
    this.props.history.push('/myparties')

  })
}

recipesVariable = () => {
  if (this.state.recipes) {
    return (  <div>
        {this.state.recipes.map((recipe, index) =>{
          return <div key={recipe.id}>
            <BakerRecipe name={recipe.name} handleTotalCostChange={this.handleTotalCostChange} price={recipe.price} changeTotalCost={this.changeTotalCost}/>
          </div>
        })}
      </div>
    )
  } else {
    return null
  }
}

render(){

return(
  <div>
    <h1>Buy the following recipes from {this.state.firstname} {this.state.lastname}</h1>
    <div >
    Please select date and time of delivery
    <Datetime
    onChange={this.handleDateChange}
    inputProps={{ placeholder: new Date() }}
    /> <br />
  </div>
  <div>
    Qty
    {this.recipesVariable()}
  </div><br />
    Current Cost ${this.state.totalCost}
    <br /><br />
    <button onClick={this.handleSubmit}>Submit </button>
    {(this.state.longitude && this.state.latitude && this.state.addresses[0]) ?
    <MapContainer longitude={this.state.longitude} latitude={this.state.latitude} addresses={this.state.addresses}/>
    : <p>loading map.....</p>
    }
  </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    current_user: state.users.current_user.current_user,
    user_id: state.users.current_user.current_user.id
  }
}

export default withRouter(connect(mapStateToProps, actions)(BakerShow))
