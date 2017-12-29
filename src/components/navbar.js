import React from 'react';
import LogoutButton from './logout'
import NewRecipeButton from './addrecipe'
import UserRecipesButton from './userrecipes'
import UserPartiesButton from './userparties'
import SearchButton from './addsearch'
import CottageFoodLawsButton from './addcottagemap'
import ProfileButton from "./changeprofile"



const Navbar = () => {

    return(
      <div className="navbar">
        <div className="ui inverted segment ui buttons">
          <ProfileButton />
          <UserRecipesButton />
          <NewRecipeButton />
          <UserPartiesButton />
          <SearchButton />
          <CottageFoodLawsButton />
          <LogoutButton />
        </div>
      </div>
  )

}

export default Navbar
