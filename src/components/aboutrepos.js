import React from "react";
import FirstImage from "../imgs/about/view1.png";
import SecondImage from "../imgs/about/view2.png";
import ThirdImage from "../imgs/about/view3.png";

const Repo = (props) => {

    let image1, image2, image3;

    if(props.repo.image1===true)
    {
        image1 = <img src={FirstImage} alt="" className="img-language"></img>;
    }
    if(props.repo.image2===true)
    {
        image2 = <img src={SecondImage} alt="" className="img-language"></img>;
    }
    if(props.repo.image3===true)
    {
        image3 = <img src={ThirdImage} alt="" className="img-language"></img>;
    }

    return (
        <div className="individual-repositories">

            <p className="image-about">
                {image1}
                {image2}
                {image3}
            </p>

            <div className="box-repositories">
                <div className="content-repositories">
                <h4 className="title-repositories" title={props.repo.title}>{props.repo.title}</h4>
                    <p className="description-about">
                        {props.repo.description}
                    </p>
                </div>
            </div>
            </div>
    );

};

export default Repo;
