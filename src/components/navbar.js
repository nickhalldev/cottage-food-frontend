import React from 'react';
import LogoutButton from './logout'
import NewRecipeButton from './addrecipe'
import UserRecipesButton from './userrecipes'
import UserPartiesButton from './userparties'
import SearchButton from './addsearch'
import CottageFoodLawsButton from './addcottagemap'


const Navbar = () => {

    return(
      <div align="center">
        <div align="center" className="ui inverted segment ui buttons ">
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
