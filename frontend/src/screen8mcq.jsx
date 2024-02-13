import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Screen8mcq = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const styles = {
    container: {
      maxWidth: '100%',
    //   margin: '20px auto',
      paddingLeft: '20px',
      paddingRight: '10px',
    //   border: '1px solid #ccc',
      borderRadius: '8px',
    //   backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
    },
  
    optionContainer: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '15px',
      fontSize: '1em',
    },
    input: {
      marginRight: '5px',
    },
    selectedOptionText: {
      marginTop: '10px',
      fontWeight: 'bold',
    },
    submitButton: {
        marginTop: '15px',
        padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  const handleSubmit=()=>{
      if(selectedOption==='a'){
          navigate('/Screen-8a')
      }
    if(selectedOption==='b'){
        navigate('/Screen-8b')
    }
    if(selectedOption==='c'){
        navigate('/Screen-8c')
    }
    if(selectedOption==='d'){
        navigate('/Screen-8d')
    }

  }

  const navigate = useNavigate();
  const NavigateToFirstScreen = () =>{
      navigate('/screen-8')
  }
  return (
    <div className="main">
        <div className="video">
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
      <h3 style={{display:"flex",justifyContent:"center",fontSize:"24px"}}>Select an Option</h3>

        <div style={styles.optionContainer}>
          <label style={styles.label}>
            <input
              type="radio"
              style={{width:"20px"}}

              name="choice"
              value="a"
              onChange={handleChange}
              checked={selectedOption === 'a'}
              />
            a. When an ugly Bobby option is added to a choice group between Bobby and Jim, Bobby is selected as the most attractive.
          </label>
        </div>

        <div style={styles.optionContainer}>
          <label style={styles.label}>
            <input
              type="radio"
              style={{width:"20px"}}
              name="choice"
              value="b"
              onChange={handleChange}
              checked={selectedOption === 'b'}
              />
            b. You will see something fake and it will arise your curiosity. You will go to explore and most likely fall into the trap.
          </label>
        </div>

        <div style={styles.optionContainer}>
          <label style={styles.label}>
            <input
              type="radio"
              name="choice"
              style={{width:"20px"}}
              value="c"
              onChange={handleChange}
              checked={selectedOption === 'c'}
            />
            c. When presented with 3 options, you will pick the cheapest one of 2 close options.
          </label>
        </div>

        <div style={styles.optionContainer}>
          <label style={styles.label}>
            <input
              type="radio"
              name="choice"
              value="d"
              style={{width:"20px"}}
              onChange={handleChange}
              checked={selectedOption === 'd'}
            />
            d. When ugly Archie is added to the choice group between Jughead and Archie, Jughead is found to be most attractive.
          </label>
        </div>

        <button type="submit" style={styles.submitButton}>Submit</button>
      <p style={styles.selectedOptionText}>Selected option: {selectedOption}</p>
      </form>

    </div>
              </div>
              {true &&
                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <button  style={buttonStyle} onClick={NavigateToFirstScreen}>Prev</button>
                <button  style={buttonStyle}>Next</button>
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
export default Screen8mcq;
