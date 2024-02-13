import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const RadioButtonForm = () => {
    const navigate = useNavigate();
    const navigateToFirstScreen = ()=>{
        navigate('Start1')
    }
    const submissionOfOption = () =>{
        if(selectedOption === "I. Because value assignment in our minds is not absolute, but relative. (This is the correct answer)"){
            navigate('/Screen-7')
        }
        else{
            navigate('/screen-7a')
        }
    }
  const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionBottom,setSOB]=useState(false);
  const handleChange = (event) => {
      setSelectedOption(event.target.value);
      setSOB(true)
  };

  const styles = {
    container: {
      maxWidth: '100%',
      padding: '20px',
      border: '1px solid #ccc',

    },
    label: {
      display: 'block',
      marginBottom: '10px',
    },
    input: {
      marginRight: '5px',
    },
    selectedOptionText: {
      marginTop: '10px',
      fontWeight: 'bold',
    },
    h3:{
        
    }
  };
 

  return (
    <div className='main'>
        <div className="video">
    <div style={styles.container}>
<h3 style={{display:"flex",justifyContent:"center",fontSize:"24px"}}>Select an Option</h3>
      <form>
        <label style={styles.label}>
          <input
            type="radio"
            style={{width:"20px"}}
            value="I. Because value assignment in our minds is not absolute, but relative. (This is the correct answer)"
            checked={selectedOption === "I. Because value assignment in our minds is not absolute, but relative. (This is the correct answer)"}
            onChange={handleChange}
            />
          I. Because value assignment in our minds is not absolute, but relative. (This is the correct answer)
        </label>
        <br />

        <label style={styles.label}>
          <input
            style={{width:"20px"}}
            type="radio"
            value="II. Because a bad option (C) will keep the value equation between (A) and (B) the same"
            checked={selectedOption === "II. Because a bad option (C) will keep the value equation between (A) and (B) the same"}
            onChange={handleChange}
          />
          II. Because a bad option (C) will keep the value equation between (A) and (B) the same
        </label>
        <br />

        <label style={styles.label}>
          <input
            type="radio"
            value="III. Because this third option is asymmetrically dominated by the cheaper option."
            style={{width:"20px"}}
            checked={selectedOption === "III. Because this third option is asymmetrically dominated by the cheaper option."}
            onChange={handleChange}
          />
          III. Because this third option is asymmetrically dominated by the cheaper option.
        </label>
        <br />

        <label style={styles.label}>
          <input
            style={{width:"20px"}}
            type="radio"
            value="IV. Because people are always sure what they want."
            checked={selectedOption === "IV. Because people are always sure what they want."}
            onChange={handleChange}
          />
          IV. Because people are always sure what they want.
        </label>
      </form>
{selectedOptionBottom &&
      <p style={styles.selectedOptionText}>Selected option: {selectedOption}</p>
}
            </div>
        </div>
            {true &&
                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <button  style={buttonStyle} onCLick={navigateToFirstScreen}>Prev</button>
                <button  style={buttonStyle} onClick={submissionOfOption}>Next</button>
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

export default RadioButtonForm;
