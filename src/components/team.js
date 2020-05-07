import React from "react";
import { Card, CardDeck } from 'react-bootstrap';

import Arturo from '../imgs/team/1.jpg';

export default () => {

    return(
        <div className="cards">
<CardDeck>
    <div className="card-individual">
        <Card>
            <Card.Img src={Arturo} className="card-image" />



        </Card>
    </div>


    <div className="card-individual">
  <Card>
    <Card.Img src={Arturo} className="card-image" />



  </Card>
  </div>


  <div className="card-individual">
  <Card>
    <Card.Img src={Arturo} className="card-image" />



  </Card>
  </div>


</CardDeck>
</div>
    );
};