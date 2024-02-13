import React from 'react';
import { useState } from 'react';
import './styling.css'; // Make sure to update the path to your stylesheet
import vid from './VIDEOS/screen10.mp4';
import ReactPlayer from 'react-player';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



const Screen10 = () => {
    const navigate = useNavigate();
    const NavigateToFirstScreen =() =>{
        navigate('/Screen-9')
    }
    const NavigateToNextScreen = ()=>{
        navigate('/Screen-10mcq')
    }
const handleVideoENd = ()=>{
    navigate('/Screen-10mcq')
}

    return (
        <div className="main" style={{ flexDirection: "column" }}>
            <div className="video" id="s1-video">
                    <ReactPlayer url={vid} style={{minWidth:"100%",minHeight:"100%"}} controls={true} playing={true} onEnded={handleVideoENd}/>
                </div>
                {true &&
                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <button  style={buttonStyle} onClick={NavigateToFirstScreen}>Prev</button>
                <button  style={buttonStyle} onClick={NavigateToNextScreen}>Next</button>
              </div> 
                }
        </div>
    );
};

const buttonStyle = {
    padding: '10px',
    color: '#00000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize:'20px',
    margin: '0 10px',
  };
export default Screen10;