import React from 'react';
import LogoutButton from './logout'
import NewRecipeButton from './addrecipe'
import UserRecipesButton from './userrecipes'
import UserPartiesButton from './userparties'
import PartyButton from './addparty'
import SearchButton from './addsearch'
import CottageFoodLawsButton from './addcottagemap'


const Navbar = () => {

    return(
      <div>
      <div className="btn-group btn-group-justified">
        <UserRecipesButton />
        <NewRecipeButton />


        </div>

        <br />
        <br />
      <div className="btn-group btn-group-justified">
       <UserPartiesButton />
        <PartyButton />
        <SearchButton />
        <CottageFoodLawsButton />


        <br />
        <br />


        <LogoutButton />

      </div>

      </div>

  )

}

export default Navbar
