import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
    return ( 
        <>
        <div className='navbar'>
        <li>
        <Link to={"/"}>View Page</Link>
        </li>
        <li>
        <Link to={"/add_product"}>Add Page</Link>
        </li>
        <h2>₪ SAN</h2>
        </div>
        </>
  );
}

export default NavBar;