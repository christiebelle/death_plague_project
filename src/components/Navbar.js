import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => (
 <ul>
   <li>
     <Link to="/home">Home</Link>
   </li>
   <li>
     <Link to="/ask">Ask the Plague Doctor</Link>
   </li>
 </ul>
)




export default Navbar;
