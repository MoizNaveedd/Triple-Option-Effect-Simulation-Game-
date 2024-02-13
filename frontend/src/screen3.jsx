import React from 'react';
import { useState } from 'react';
import './styling.css'; // Make sure to update the path to your stylesheet
import imgg from './IMAGES/screen3.png';
import vid from './VIDEOS/screen3.mp4';
import vid2 from './VIDEOS/screen4.mp4';
import ReactPlayer from 'react-player';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Screen3 = () =>{
    const [showVideo, setShowVideo] = useState(true);
    const [ showImage,setShowImage] =useState(false);

    const handleVideoEnd = () => {
        console.log("the function ius called")
        setShowVideo(false);
    };
   
    const handlePlayClick = () =>{
        setShowImage(false);
    }

    const [formData, setFormData] = useState({
        choice: '', // Initialize with an empty string or default value
        text:''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const [showVideo2,setVideo2] = useState(false);
const [formState,setformState]=useState(true);
    const handleSubmit = (e) =>{
        e.preventDefault();
        setformState(false);
        setVideo2(true);
    }
    const [showVid2,setShowVid2]=useState(true)
    const handleVideoEnd2 = () =>{
        setShowVid2(!showVid2)
    }
    const handleMainSubmit =async (e) => {
        e.preventDefault();
        // backend call will send from here
        try {
            const mail= localStorage.getItem('email');
            const firstChoice = localStorage.getItem('firstSelection')
          // Make an HTTP request to the backend with the selected choice
          const response = await axios.post('http://localhost:3131/saveLaptopChoice', {formData,mail,firstChoice});
          if (response.status === 200) {
            if(formData.choice.toUpperCase()==='BELL'){
                handle5aNavigation();
            }
            else{
                handleNavigation();
            }
            // Handle successful response from the backend if needed
            console.log('Successfully submitted laptop choice');
          } else {
            // Handle error response from the backend
            console.error('Error submitting laptop choice');
          }
        } catch (error) {
          console.error('Error occurred while submitting laptop choice', error);
        }
    }
    const navigate = useNavigate();
    const handleNavigation =()=>{
        navigate('/Screen-5')
    }
    const handle5aNavigation =()=>{
        navigate('/Screen-5a')
    }

    return(
        <div className="main" style={{ flexDirection: "column" }}>
            <div className="video" id="s1-video">
                {showVideo ? 
                    showImage ? <img src={imgg} alt="image to show" />:
                    <ReactPlayer url={vid} style={{minWidth:"100%",minHeight:"100%"}} controls={true} playing={!showImage}  onEnded={handleVideoEnd}/>: 
               formState &&
                <form id="myForm2" className="styled-form" onSubmit={(e)=>handleSubmit(e)}>
                <h3 className="form-title" style={{marginTop:'12px',marginBottom:"10px"}}>Select an option</h3>
                <div className="form-option s2-in">
                  <input type="radio" name="choice" value="bell" id="op1"  onChange={handleChange} style={{width:"30px"}}/>
                  <div className="input-label">
                    <label htmlFor="op1">BELL LAPTOP</label>
                    <ul>
                      <li>Price: $400</li>
                      <li>Capacity: 200GB</li>
                    </ul>
                  </div>
                </div>
                <div className="form-option s2-in">
                  <input type="radio" name="choice" value="inox" id="op2" style={{width:"30px"}}  onChange={handleChange}/>
                  <div className="input-label label-s1">
                    <label htmlFor="op2">INOX LAPTOP</label>
                    <ul>
                      <li>Price: $685</li>
                      <li>Capacity: 400GB</li>
                    </ul>
                  </div>
                </div>
              
                <div className="form-option s2-in">
                  <input type="radio" name="choice" value="rasus" id="op3" style={{width:"30px"}}  onChange={handleChange}/>
                  <div className="input-label label-s1">
                    <label htmlFor="op3">RASUS LAPTOP</label>
                    <ul>
                      <li>Price: $620</li>
                      <li>Capacity: 300GB</li>
                    </ul>
                  </div>
                </div>
              
                <button type="submit" className="submit-button" style={{ marginBottom: "1vh" }}>
                  Submit
                </button>
              </form>
                }

                {
                    showVideo2 && 
                    <>{
                        showVid2 ?
                    <ReactPlayer url={vid2} style={{minWidth:"100%",minHeight:"100%"}} 
                    controls={true} playing={true}  onEnded={handleVideoEnd2}/>
                    :
                    // other logic here
                    <div >
                    <h3 className='form-title'>Why did you choose {formData.choice.toUpperCase()} Laptop ? </h3>
                    <form className='form-title' onSubmit={(e)=>handleMainSubmit(e)} >
                        <textarea name="text" id="" cols="100" rows="15" style={{margin:"15px",borderRadius:"10px",borderTopLeftRadius:"1px",width:"90%"}} onChange={handleChange} required/>
                        <button type="submit" className="submit-button" style={{marginBottom:"1vh",width:"90%"}}>
                      Submit
                    </button>
                        {/* <div class="btns s4-btn">
                            <a href="./screen5.html"><button type="submit">Submit</button></a>
                        </div> */}
                    </form>
                    </div>}</>
                }
            
                </div>
                 {/* <div className="btns">
          <button className="s1-btn1" onClick={handlePlayClick} style={{padding:"1px"}}>PLAY</button>
          <a href="/screen3.html"><button className="s1-btn2" style={{padding:"1px"}}>NEXT</button></a>

        </div> */}
          {/* <button className="" onClick={play} style={{padding:"1px"}}>PLAY</button> */}
        </div>
    );
    
}
export default Screen3;