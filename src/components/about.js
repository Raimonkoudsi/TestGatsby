import React from "react";
import repos from '../data/repos';
import Repo from './aboutrepos';


export default () => {

    return(


    <div className="page-about">
            <header className="text-center">
                <h2 className="header-repositories">ABOUT THE GAME</h2>
                <h3 className="text-repositories">Catarsis is a Post-Apocaliptic Shoot n' fight where you live the broken politics and fight against the humans who transforms in their worst fears, as you try to recover any sign of identity within yourself.</h3>

            </header>

            <ul className="container-repositories" >
                {
                    repos.map((repo)=>{
                    return <Repo repo= {repo} key={repo.id} />
                    })
                }
            </ul>

    </div>

    );
};
