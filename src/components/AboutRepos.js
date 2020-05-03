import React from "react";

const Repo = (props) => {


    return (
        <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer" className="link-repositories">
            <div className="box-repositories">
                <div className="content-repositories">
                    <h4 className={'truncate font-bold '} title={props.repo.name}>{props.repo.name}</h4>
                    <p style={{height: "1.5em", top: "8px"}}>

                        Hola
                    </p>
                    <img src={} alt="visitar" className="arrow"></img>
                </div>
            </div>
        </a>
    );

};

export default Repo;