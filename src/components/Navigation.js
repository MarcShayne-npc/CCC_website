import React from 'react';
import { Nav,Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../Images/Logo.jpg'
import {Link} from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'
const Navigation = () => {
    return (
            <Navbar sticky="top" variant="dark" expand="xl"> 
                <Navbar.Brand onClick={() => scroll.scrollToTop()}>
                    <img src={logo}/>
                </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                    <ul class="navbar-nav navbar-center">
                        <li class="nav-item"><Link to="sloganSection" smooth="true" duration={1000}>Home</Link></li>
                        <li class="nav-item"><Link to="actSection" smooth="true" duration={1000}>ACTS</Link></li>
                        <li class="nav-item"><Link to="descSection" smooth="true" duration={1000}>DESCRIPTION</Link></li>
                        <li class="nav-item"><Link to="7rSection" smooth="true" duration={1000}>7 R'S</Link></li>
                        <li class="nav-item"><Link to="posterSection" smooth="true" duration={1000}>POSTERS</Link></li>
                        <li class="nav-item"><Link to="singleuseSection" smooth="true" duration={1000}>SINGLE-USE</Link></li>
                        <li class="nav-item"><Link to="eventSection" smooth="true" duration={1000}>EVENTS</Link></li>
                        <li class="nav-item"><Link to="partnerSection" smooth="true" duration={1000}>PARTNERS</Link></li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Navigation
