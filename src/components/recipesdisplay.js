import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
const url = "http://localhost:3001/api/v1/"
// const RecipeData = {}

class MyRecipes extends React.Component {
  constructor(props){
    super(props)
    // console.log('this is my props',props)

    this.state = {
      // users: [],
      // user: {},
    }
  }

componentDidMount(){
  // this.fetchAllUserData()
}


//
// fetchAllUserData(){
//   return fetch(`${url}users/1`)
//   .then(res => res.json())
//   .then(res =>
//     this.setState({
//     user: res
//   }))
// }

  render(){
    // console.log('user in my render',this.props.current_user)
    // {this.state.user.current_user.recipes.map(recipe => {
    //   recipe
    // })}
  return(
    <div>


    Hey guys recipe time

    </div>
  )
}
}

const mapStateToProps = state => {
  // console.log('state.user in map state',state)
  return {
    current_user: state.users.current_user
  }
}


export default withRouter(connect(mapStateToProps, actions)(MyRecipes))
