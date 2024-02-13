import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Screen10mcq = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const styles = {
    container: {
        maxWidth: '100%',
        padding: '20px',
        border: '1px solid #ccc',
    },  
    heading: {
      fontSize: '1.2em',
      marginBottom: '15px',
    },
    optionContainer: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
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
  const navigate= useNavigate();
  const handleSubmit=()=>{
    if(selectedOption==='d'){
    navigate('/Screen-9a')}
    else{
        navigate('/Screen-10b')
    }
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
            a. You want to make sure there are enough snacks to last the movie.
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
            b. Your mind calculated the point at which you can get most quantity at least price.
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
            c. You do not believe sugar and soda is bad for health.
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
            d. The value of an additional quarter is less than the value of additional $1.75.
          </label>
        </div>

        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>

      <p style={styles.selectedOptionText}>Selected option: {selectedOption}</p>
              </div>
          </div>
    </div>
  );
};

export default Screen10mcq;
