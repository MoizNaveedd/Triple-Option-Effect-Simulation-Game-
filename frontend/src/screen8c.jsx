import React from 'react';
import { useState } from 'react';
import './styling.css'; // Make sure to update the path to your stylesheet
import vid from './VIDEOS/screen8c.mp4';
import ReactPlayer from 'react-player';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



const Screen8c = () => {
    const navigate = useNavigate();
    const NavigateToFirstScreen =() =>{
        navigate('/Screen-8')
    }
    const NavigateToNextScreen = ()=>{
        setTimeout(()=>{
            navigate('/Screen-9')
        },2000)
    }

    return (
        <div className="main" style={{ flexDirection: "column" }}>
            <div className="video" id="s1-video">
                    <ReactPlayer url={vid} style={{minWidth:"100%",minHeight:"100%"}} controls={true} playing={true} />
        
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
export default Screen8c;