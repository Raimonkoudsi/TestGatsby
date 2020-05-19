import React, {Component} from "react";
import {Navbar, Nav} from 'react-bootstrap';

import Icono from "../imgs/header/wallbang-logo.png";

import { NavHashLink as NavLink } from 'react-router-hash-link';


class Menu extends React.Component {
    constructor(props) {
        super(props);

    }
        render(){

        return(
        <Navbar className="fixed-top sticky-top navbar-dark headerWallbang" expand="lg">
        <Navbar.Brand><NavLink to="#home" exact smooth activeClassName="selected"><img src={Icono} alt="wallbang" title="Wallbang Studios" className="navbar-brand"></img></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav.Link><NavLink to="#about" exact smooth className={this.props.variable ? "headerActive" : "headerLinks"}>About</NavLink></Nav.Link>
            <Nav.Link><NavLink to="#team" exact smooth className={this.props.variableTeam ? "headerActive" : "headerLinks"}>Team</NavLink></Nav.Link>
            <Nav.Link><NavLink to="#contact" exact smooth className={this.props.variableContact ? "headerActive" : "headerLinks"}>Contact</NavLink></Nav.Link>
        </Navbar.Collapse>
        </Navbar>
        )

    }
}

export default Menu;