import React from "react";

import Arturo from '../imgs/team/1.jpg';


export default () => {

    return(
        <div className="page-contact">
            <h2 className="header-contact">CONTACT</h2>
            <p className="text-contact">For Interviews, Inquires or Information contact us on <a href="mailto:wallbangstudios4.9@gmail.com">wallbangstudios4.9@gmail.com</a></p>
            <p className="text-contact">Regarding Catarsis, you can visit our PressKit or get in touch in the Social Media.</p>

            <div className="align-footer">
            <div className="footer">
                <p className="footer-copy">Copyright © Your Website 2018</p>
                    <span className="rounded-social-buttons">
                        <a className="circle-button" href="https://twitter.com/CatarsisTheGame"  target="_blank" rel="nofollow noopener" title="Twitter"><div className="img-social twitter" /></a>
                        <a className="circle-button" href="https://catarsisthegame.tumblr.com"  target="_blank" rel="nofollow noopener" title="Tumblr"><div className="img-social tumblr" /></a>
                        <a className="circle-button" href="https://www.facebook.com/jocrod11"  target="_blank" rel="nofollow noopener" title="Facebook"><div className="img-social facebook" /></a>
                    </span>
                    <div className="footer-legacy">
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Use</a>
                    </div>
            </div>
            </div>
        </div>

    );
};