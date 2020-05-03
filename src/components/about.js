import React, {useEffect, useState} from "react";
import repos from '../components/About';
import Repo from './AboutRepos';

export default () => {

    return(
    <div className="max-w-4xl mx-auto mt-12 text-center">
            <header className="text-center">
                <h2 className="text-3xl mb-5 font-bold text-white header-repositories">Mis Proyectos en </h2>
            </header>
            <ul className="container-repositories">
                {
                    repos.map((repo)=>{
                    return <Repo repo= {repo} key={repo.id} />
                    })
                }
            </ul>
            <div align="center">
                <a class="button_b" href="https://github.com/raimonkoudsi" target="_blank" rel="nofollow noopener">
                    Ver más en Github
                </a>
            </div>
    </div>
    );
};
