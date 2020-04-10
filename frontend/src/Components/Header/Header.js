import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
const Header = () => (
    <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
              <li>
               <Link to="/contacts">Contacts</Link>
               </li> 
               <li>
               <Link to="/new-contact">Nouveau contact</Link>
               </li>  
          </ul>
    </nav>
)


export default Header