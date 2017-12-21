import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter, NavLink } from "react-router-dom"
import Datetime from 'react-datetime';
import MapContainer from './map'
import BakerRecipe from './bakerRecipe'

const url = "http://localhost:3001/api/v1/"

let dropdown = [1,2,3,4,5,10]


class BakerShow extends React.Component {
  constructor(){
    super()

    this.state = {
      recipes: [],
      eventDateTime: {},
      totalCost: 0,
      recipeTransactions: {},
      addresses: [{lat: 40.748541,lng: -73.985763}],
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
  }))
}

handleDateChange = (event) => {
  console.log(event._d)
  // console.log(event._d.to_datetime)
  this.setState({
    eventDateTime: event._d
  })
  // console.log(this.state.eventDateTime)
}

handleTotalCostChange(change){
  console.log('this is my change',change)
  this.setState({
    totalCost: (this.state.totalCost + change)
  })
}


  handleChange = e => {
    // console.log('handle changes target name',e.target.name)
    // console.log('handle changes target value',e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleDropdownChange = (e) => {
    // console.log('heres my prev state',prevState)
    this.setState({
      recipeTransactions: {
        recipe_id: [e.target.name],
        recipe_cost: 0,
        recipe_quantity: e.target.value,
      }
    }, console.log(this.state));
  };

handleSubmit = () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  const body = this.state;
  fetch(`${url}users`, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  })

}

countDropdown = (recipeID) => {
  return (
    <select id='' name={`${recipeID}`} onChange={this.handleDropdownChange}>
    <option name="0" value="0">0</option>
    <option name="1" value="1">1</option>
    <option name="2" value="2">2</option>
    <option name="3" value="3">3</option>
    <option name="4" value="4">4</option>
    <option name="5" value="5">5</option>
    <option name="10" value="10">10</option>
    <option name="15" value="15">15</option>
    <option name="20" value="20">20</option>
    <option name="25" value="25">25</option>
    </select>
  )
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
  />

  <br /><br />
  </div>

  <div>
  Qty
{this.recipesVariable()}

  </div>
<br /><br />
Current Cost ${this.state.totalCost}
<br /><br />

<button onSubmit={this.handleSubmit}>Submit </button>

{(this.state.longitude && this.state.latitude) ?
<MapContainer lng={this.state.longitude} lat={this.state.latitude} addresses={this.state.addresses}/>
: <p>loading map.....</p>
}
  </div>
  )

  }

}



const mapStateToProps = state => {
console.log('looking to see what users looks like',state.users.users)
  return {
    users: state.users.users,

  }
}


export default withRouter(connect(mapStateToProps, actions)(BakerShow))
