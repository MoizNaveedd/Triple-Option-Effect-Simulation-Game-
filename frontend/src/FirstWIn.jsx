// import React from 'react';
// import {useState,useEffect} from 'react';
// import './styling.css'
// import imgg from './IMAGES/screen1-2.png';
// const Start = ()=> {
    
//     function play() {
//         var videoContainer = document.getElementById("s1-video").innerHTML = '<iframe  width="700" height="430" src="VIDEO/screen1-2.mp4"frameborder="0" allowfullscreen></iframe>';
//     }
//     return(
//         <>
//         <div className="main">
//         <div className="video" id="s1-video">
//             <img src={imgg} alt=""/>
//         </div>
//         <div className="formbtn">

//             <div className="form s1-form">

//                 <form id="myForm1">
//                     <h3 className="s1-h3">Select an option</h3>

//                     <div className="s1-in input" >

//                         <input type="radio" name="choice" value="bell" id="op1"/>
                        
//                         <div className="input-label label-s1">
//                             <label for="op1">BELL LAPTOP</label>
//                             <ul>
//                                 <li> Price: $400</li>
//                                 <li> Capacity: 200GB</li>
//                             </ul>
//                         </div>
//                     </div>


//                     <div className="s1-in input">

//                         <input type="radio" name="choice" value="inox" id="op2"/>

//                         <div className="input-label label-s1">

//                             <label for="op1">INOX LAPTOP</label>

//                             <ul>
//                                 <li> Price: $685</li>
//                                 <li> Capacity: 400GB</li>
//                             </ul>
//                         </div>
//                     </div>

//                     <button type="submit">Submit</button>

//                 </form>
//             </div>

//             <div className="btns">
//                 <button className="s1-btn1" onClick={Play}>PLAY</button>
//                 <a href="/screen3.html"><button className="s1-btn2">NEXT</button></a>
//             </div>
//         </div>
//     </div> </>)
// };
// export default Start;
import React from 'react';
import {useState} from 'react';
import './styling.css'; // Make sure to update the path to your stylesheet
import imgg from './IMAGES/screen1-2.png';

import vid from './VIDEOS/screen1-2.mp4';

const Start = () => {
  const [showMCQ, setShowMCQ] = useState(false);
  const [videoState,setVideoState]=useState(true);
    const play = () => {
        const videoContainer = document.getElementById("s1-video");
        videoContainer.innerHTML = `<iframe width="100%" height="430" src=${vid} frameborder="0" allowfullscreen onEnded=${handleVideoEnd}></iframe>`;
      };
      const handleVideoEnd = () => {
        setShowMCQ(true);
        setVideoState(false);
      };

  return (
    <div className="main" style={{flexDirection:"column"}}>
      {videoState && 
      <div className="video" id="s1-video">
        <img src={imgg} alt="no image to display" />
      </div>
      }
      <div className="formbtn">
        <div>
      {/* 
          <form id="myForm1">
            <h3 className="s1-h3">Select an option</h3>
            <div className="s1-in input">
              <input type="radio" name="choice" value="bell" id="op1" />
              <div className="input-label label-s1">
                <label htmlFor="op1">BELL LAPTOP</label>
                <ul>
                  <li> Price: $400</li>
                  <li> Capacity: 200GB</li>
                </ul>
              </div>
            </div>
            <div className="s1-in input">
              <input type="radio" name="choice" value="inox" id="op2" />
              <div className="input-label label-s1">
                <label htmlFor="op1">INOX LAPTOP</label>
                <ul>
                  <li> Price: $685</li>
                  <li> Capacity: 400GB</li>
                </ul>
              </div>
            </div>
            <button type="submit" style={{padding:"1px"}}>Submit</button>
  </form>*/}
          <div>
          {showMCQ ? (
            <form id="myForm1">
              <h3 className="s1-h3">Select an option</h3>
              <div className="s1-in input">
                <input type="radio" name="choice" value="bell" id="op1" />
                <div className="input-label label-s1">
                  <label htmlFor="op1">BELL LAPTOP</label>
                  <ul>
                    <li> Price: $400</li>
                    <li> Capacity: 200GB</li>
                  </ul>
                </div>
              </div>
              <div className="s1-in input">
                <input type="radio" name="choice" value="inox" id="op2" />
                <div className="input-label label-s1">
                  <label htmlFor="op1">INOX LAPTOP</label>
                  <ul>
                    <li> Price: $685</li>
                    <li> Capacity: 400GB</li>
                  </ul>
                </div>
              </div>
              <button type="submit" style={{ padding: "1px" }}>
                Submit
              </button>
            </form>
          ) : null}
        </div>

        </div>
        <div className="btns">
          <button className="s1-btn1" onClick={play} style={{padding:"1px"}}>PLAY</button>
          <a href="/screen3.html"><button className="s1-btn2" style={{padding:"1px"}}>NEXT</button></a>
          {/* <button className="" onClick={play} style={{padding:"1px"}}>PLAY</button> */}

        </div>
      </div> 
    </div>
  );
};

export default Start;
