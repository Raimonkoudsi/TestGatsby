import React from "react";

const Repo = (props) => {


    return (
        <div className="individual-repositories">
        <h1>HOLA</h1>
            <div className="box-repositories">
                <div className="content-repositories">
                    <h4 className={'truncate font-bold '} title={props.repo.name}>{props.repo.name}</h4>
                    <p style={{height: "1.5em", top: "8px"}}>
                        Hola
                    </p>
                </div>
            </div>
            </div>
    );

};

export default Repo;
