import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

const Toggle = () => {
    const [isToggled, setToggle]=useState(false);
    const fade =useSpring({opacity: isToggled ? 1:0});

    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <animated.h1 style={fade}>hello</animated.h1>
            <button onClick= {() => setToggle(!isToggled)}>toggle</button>
        </div>
    )
}

export default Toggle

/*
const App = () => {

    const fade = useSpring({
        from: {
            opacity:0.2
        },
        to: {
            opacity:1
        }
    });
    */