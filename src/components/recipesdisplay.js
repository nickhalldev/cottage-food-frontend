import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

const MyRecipes = (props) => {

let recipeVariable = props.recipes ? (
      <div>
      <h1>My Saved Recipes</h1>
        {props.recipes.map((recipe, index) =>{
          return <div key={index}> {recipe.name} </div>
        })}
      </div>
  ) : null

return(
  <div>
  {recipeVariable}

  </div>
)

}


const mapStateToProps = state => {
  // console.log('state.user in map state',state)
  return {
    recipes: state.users.current_user.recipes
  }
}
  //

export default withRouter(connect(mapStateToProps, actions)(MyRecipes))
