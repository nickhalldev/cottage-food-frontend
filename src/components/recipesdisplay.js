import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter, NavLink } from "react-router-dom"
import { Card } from 'semantic-ui-react'

const MyRecipes = (props) => {

const items = []

let itemsVariable = props.recipes ? (
        props.recipes.map((recipe, index) =>{
          items.push({
            header: `${recipe.name}`,
            description: `${recipe.description}`,
            meta: `Price - $${recipe.price} `,
            href: `myrecipes/${recipe.id}`
          })
          })
  ) : null

return(
  <div>
  <Card.Group items={items} />
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
