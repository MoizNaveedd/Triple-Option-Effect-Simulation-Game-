import React from 'react';
import { useState } from 'react';
import './styling.css'; // Make sure to update the path to your stylesheet
import imgg from './IMAGES/screen1-2.png';
import vid from './VIDEOS/screen1-2.mp4';
import VideoPlayer from './VideoPlayer';
import ReactPlayer from 'react-player';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



const Start1 = () => {
    const navigate = useNavigate();
const Navigation = () =>{
    navigate('/Screen-3')
}
    //   const [showMCQ, setShowMCQ] = useState(false);
    //   const [videoState,setVideoState]=useState(true);
    //     const play = () => {
    //         const videoContainer = document.getElementById("s1-video");
    //         videoContainer.innerHTML = `<iframe width="100%" height="430" src=${vid} frameborder="0" allowfullscreen onEnded=${handleVideoEnd}></iframe>`;
    //       };
    //       const handleVideoEnd = () => {
    //         setShowMCQ(true);
    //         setVideoState(false);
    //       };
    const [showVideo, setShowVideo] = useState(true);
    const [ showImage,setShowImage] =useState(true);

    const handleVideoEnd = () => {
        console.log("the function ius called")
        setShowVideo(false);
    };
    const handlePlayClick = () =>{
        setShowImage(false);
    }

    const [formData, setFormData] = useState({
        choice: '', // Initialize with an empty string or default value
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        console.log("its is running")
        e.preventDefault();
        localStorage.setItem('firstSelection',formData.choice)
        Navigation();
    

      };
    

    return (
        <div className="main" style={{ flexDirection: "column" }}>
            <div className="video" id="s1-video">
                {showVideo ? 
                    showImage ? <img src={imgg} alt="image to show" />:
                    <ReactPlayer url={vid} style={{minWidth:"100%",minHeight:"100%"}} controls={true} playing={!showImage} onPlay={handlePlayClick} onEnded={handleVideoEnd}/>: 
                    <form id="laptopForm" className="styled-form" onSubmit={handleSubmit}>
                    <h3 className="form-title">Select a Laptop</h3>
                
                    <div className="form-option">
                      <input type="radio" name="choice" value="bell" id="op1" onChange={handleChange} style={{width:"2vw"}}/>
                      <div className="input-label">
                        <label htmlFor="op1">BELL LAPTOP</label>
                        <ul>
                          <li>Price: $400</li>
                          <li>Capacity: 200GB</li>
                        </ul>
                      </div>
                    </div>
                
                    <div className="form-option">
                      <input type="radio" name="choice" value="inox" id="op2" onChange={handleChange}  style={{width:"2vw"}}/>
                      <div className="input-label">
                        <label htmlFor="op2">INOX LAPTOP</label>
                        <ul>
                          <li>Price: $685</li>
                          <li>Capacity: 400GB</li>
                        </ul>
                      </div>
                    </div>
                
                    <button type="submit" className="submit-button" style={{marginBottom:"1vh"}}>
                      Submit
                    </button>
                  </form>
                }</div>
                {showVideo &&
                <button onClick={handlePlayClick} style={buttonStyle}>Start</button>
        //          <div className="" >
        //   <button className="pl-2 pr-2" onClick={handlePlayClick} style={{padding:"",marginTop:"1vh" ,fontSize:"23px"}}> <p >START</p> </button>
        //   {/* <a href="/screen3.html"><button className="s1-btn2" style={{padding:"1px"}}>NEXT</button></a> */}
        //   {/* <button className="" onClick={play} style={{padding:"1px"}}>PLAY</button> */}

        // </div>  
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
  // margin: '0 10px',
  marginTop:'10px'
};
export default Start1;