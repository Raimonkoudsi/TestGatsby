import React, {Component} from "react";
import {Navbar, Nav} from 'react-bootstrap';

import Icono from "../imgs/header/wallbang-logo.png";

//import { NavHashLink as NavLink } from 'react-router-hash-link';

import { Link } from '@reach/router';

//import Scrollchor from 'react-scrollchor';


class Menu extends React.Component {
    constructor(props) {
        super(props);

    }
        render(){

        return(
        <Navbar className="fixed-top sticky-top navbar-dark headerWallbang" expand="lg">
        <Navbar.Brand href="#home"><img src={Icono} alt="wallbang" title="Wallbang Studios" className="navbar-brand"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav.Link href="#about" className={this.props.variable ? "headerActive" : "headerLinks"}>About</Nav.Link>
            <Nav.Link href="#team" className={this.props.variableTeam ? "headerActive" : "headerLinks"}>Team</Nav.Link>
            <Nav.Link href="#contact" className={this.props.variableContact ? "headerActive" : "headerLinks"}>Contact</Nav.Link>
        </Navbar.Collapse>
        </Navbar>
        )

    }
}

export default Menu;