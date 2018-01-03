import React from 'react';
import { NavLink } from "react-router-dom";

const CottageFoodLawsButton = (props) => {


    return(
      <div>
      <NavLink to='/cottagelaws'>
        <button className='ui inverted green button'>
          U.S. Cottage Laws
        </button>
      </NavLink>
      </div>

  )

}

export default CottageFoodLawsButton
