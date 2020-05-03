import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

import Icono from "../imgs/header/wallbang-logo.png";

//changes


export default () => (
        <Navbar className="fixed-top navbar-dark headerWallbang" expand="lg">
        <Navbar.Brand href="#home" className="imgHeader"><img src={Icono} alt="wallbang" title="Wallbang Studios" className="navbar-brand"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
                <a href="#about" className="headerLinks">About</a>
                <a href="#team" className="headerLinks">Team</a>
                <a href="#team" className="headerLinks">Presskit</a>
                <a href="#team" className="headerLinks">Blog</a>
                <a href="#team" className="headerLinks">Contact</a>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
)