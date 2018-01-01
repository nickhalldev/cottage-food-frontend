import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import BakerRecipe from './bakerRecipe'


const url = "http://localhost:3001/api/v1/"

class RecipeShow extends React.Component {
  constructor(props){
    super()

    this.state = {
      name: '',
      course_type: '',
      price: 0,
      description: '',
    }
  }

componentDidMount(){
  let recipe_id = this.props.match.params.id
  console.log(this.props.match.params.id)
  if(recipe_id){
  this.fetchRecipe(recipe_id)
  }
}

fetchRecipe = (recipe_id) => {
  console.log(recipe_id)
  fetch(`${url}recipes/${recipe_id}`)
  .then(res => res.json())
  .then(res =>
    console.log(res)
    // this.setState({
    // name: res.name,
    // course_type: res.course_type,
    // price: res.price,
    // description: res.description,
  // })
  )
}

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // };

  // const recipeShowVariable = (this.state.price > 0) ? (
  //   <div>
  //     Its recipe time!
  //   </div>
  // ) : null

// handleSubmit = () => {
//   const headers = {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   };
//
//   fetch(`${url}transacts`, {
//     method: "POST",
//     headers,
//     body: JSON.stringify({
//       purchaser_id: this.props.current_user.id,
//       baker_id: this.props.match.params.id,
//       delivery_distance:1, //need to run my distance calculator with this or delete
//       purchaser_longitude: this.props.current_user.longitude,
//       purchaser_latitude: this.props.current_user.latitude,
//       total_cost: this.state.totalCost,
//       delivery_date_time: this.state.eventDateTime
//     })
//   }).then(res => res.json())
// }

render(){

return(
  <div>

  </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    current_user: state.users.current_user.current_user
  }
}

export default withRouter(connect(mapStateToProps, null)(RecipeShow))
