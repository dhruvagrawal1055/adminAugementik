import React from 'react'
import Typewriter from "typewriter-effect";
import CardView from '../Utils/CardView';
import { useState } from 'react';
const Home = () => {
    const [div1Visible, setDiv1Visible] = useState(true);
    const [div2Visible, setDiv2Visible] = useState(false);
    const change=() => {
        setDiv1Visible(false);
        setDiv2Visible(true);
    }
    return (
        <div>
            {div1Visible && <div>
                <Typewriter
 
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Welcome to the Admin Panel")
                            .pauseFor(10)
                            .start();
                    }}
                />
                <button id='btn' onClick={change}>Click to Continue</button>
            
            </div>
            }
            {div2Visible &&
                <CardView></CardView>
            }
            </div>
    )
};
export default Home;
