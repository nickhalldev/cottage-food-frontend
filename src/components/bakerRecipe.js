import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

class BakerRecipe extends React.Component {
  constructor(){
    super()

    this.state = {
      quantity: 0,
      recipeCost: 0,
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleDropdownChange = (e) => {
    let previousTotal = this.state.recipeCost
    this.setState({
        recipeCost: (e.target.value * this.props.price),
        quantity: e.target.value,
    }, () => this.props.handleTotalCostChange(this.state.recipeCost - previousTotal))
  };

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

render(){

return(
  <div>
  {this.countDropdown()}
  {this.props.name} @ ${this.props.price} per serving for a cost of ${this.state.recipeCost}
  </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
  }
}



export default withRouter(connect(mapStateToProps, actions)(BakerRecipe))
