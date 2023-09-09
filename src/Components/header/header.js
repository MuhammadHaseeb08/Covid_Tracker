import React from 'react'
import {Link} from 'react-router-dom'

export default function 
() {
  return (
    <div>
         <nav>
    <div class="nav-wrapper" style={{backgroundColor:"Grey"}}>
      <Link  to="/mainPanal" class="brand-logo"> <i>COVID-19 update</i> </Link> 
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/Counytryname"><i>Select Country</i></Link></li>
 
      </ul>
    </div>
  </nav>
        
    </div>
  )
}
