import React from "react";
import Button from 'react-bootstrap/Button';

export default () => (
    <header className="header">
            <div className="title-header">
                <img src={require('../imgs/catarsis-logo.png')} />
                <p className= "text-title">SUPPORT US ON <span>KICKSTARTER</span></p>
                <Button variant="success" className="btn-title btn-trailer"><p>Trailer</p></Button>
                <Button variant="success" className="btn-title btn-kickstarter"><p>Kickstarter</p></Button>
            </div>

    </header>
)
