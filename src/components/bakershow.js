import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter, NavLink } from "react-router-dom"
const url = "http://localhost:3001/api/v1/"
let baker_id = window.location.href.split('/')[4]
let dropdown = [1,2,3,4,5,10]

class BakerShow extends React.Component {
  constructor(){
    super()

    this.state = {
      recipes: []

    }
  }



componentDidMount(){
  if(baker_id){
  this.fetchBaker()
}
}

fetchBaker = () => {
  fetch(`${url}users/${baker_id}`)
  .then(res => res.json())
  .then(res =>
    this.setState({
    recipes: res.recipes,
    firstname: res.current_user.firstname,
    lastname: res.current_user.lastname,

  }))
}


render(){

const countDropdown =
    <select>
      <option value="1">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="25">25</option>
    </select>



const recipesVariable = this.state.recipes ? (
      <div>
      <h1>Buy the following recipes from {this.state.firstname} {this.state.lastname}</h1>
        {this.state.recipes.map((recipe, index) =>{
          return <div key={recipe.id}>
            {countDropdown}
            {recipe.name}

          </div>
        })}
      </div>
  ) : null


return(
  <div>
{recipesVariable}
<button>Submit </button>
  </div>
  )

  }

}


const mapStateToProps = state => {
  console.log('state.user in map state',state.users.users)
  return {
    users: state.users.users
  }
}


export default withRouter(connect(mapStateToProps, actions)(BakerShow))
