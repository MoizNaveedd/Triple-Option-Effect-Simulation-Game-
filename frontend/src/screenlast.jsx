import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {

  const styles = {
    container: {
    //   maxWidth: '400px',
    //   margin: '20px auto',
      marginTop: '130px',
      border: '1px solid #ccc',
      borderRadius: '8px',
    //   backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    thankYouText: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    attributionText: {
      fontSize: '1em',
      fontStyle: 'italic',
    },
  };
  const navigate = useNavigate();
  const NavigateToFirstScreen =() =>{
      navigate('/Start1')
  }
//   const NavigateToNextScreen = ()=>{
//       navigate('/Screen-10mcq')
//   }

  return (<>
  <div className="main">
    <div className="video">

    <div style={styles.container}>
      <div style={styles.thankYouText}>
        Thank you for visiting our website!
      </div>
      <div style={styles.attributionText}>
        Website developed by NEDScholars
      </div>
    </div>
    </div>
       {true &&
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
        <button  style={buttonStyle} onClick={NavigateToFirstScreen}>Previous </button>
        {/* <button  style={buttonStyle} onClick={NavigateToNextScreen}>Next</button> */}
      </div> 
        }
      </div>
        </>
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
export default ThankYouPage;
