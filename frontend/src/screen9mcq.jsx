import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Screen9mcq = () => {
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
const navigate = useNavigate();
    const handleSubmit =()=>{
        if(selectedOption==='III'){
            navigate('/Screen-9a')
        }
        else{
            navigate('/Screen-9b')
        }
        // selection send to backend from here code missing
    }

    return (
        <div className="main">

            <div className="video">

                <div style={styles.container}>
                    <form onSubmit={handleSubmit}>
                        <h3 style={{ display: "flex", justifyContent: "center", fontSize: "24px" }}>Select an Option</h3>
                        <div style={styles.optionContainer}>
                            <label style={styles.label}>
                                <input
                                    type="radio"
                                    name="choice" style={{ width: "20px" }}

                                    value="I"
                                    onChange={handleChange}
                                    checked={selectedOption === 'I'}
                                />
                                <b>I. </b> it undermines the direct competitors' price.
                            </label>
                        </div>

                        <div style={styles.optionContainer}>
                            <label style={styles.label}>
                                <input
                                    type="radio"
                                    style={{ width: "20px" }}
                                    name="choice"
                                    value="II"
                                    onChange={handleChange}
                                    checked={selectedOption === 'II'}
                                />                 <b>II. </b>

                                it leads to a comparatively high perception of quality.
                            </label>
                        </div>

                        <div style={styles.optionContainer}>
                            <label style={styles.label}>
                                <input
                                    type="radio" style={{ width: "20px" }}

                                    name="choice"
                                    value="III"
                                    onChange={handleChange}
                                    checked={selectedOption === 'III'}
                                />
                                <b>III. </b>
                                of the way our mind solves the value equation.
                            </label>
                        </div>

                        <div style={styles.optionContainer}>
                            <label style={styles.label}>
                                <input
                                    type="radio"
                                    name="choice"
                                    value="IV" style={{ width: "20px" }}

                                    onChange={handleChange}
                                    checked={selectedOption === 'IV'}
                                />
                                <b>IV. </b> it increases the incentive for making a purchase.
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

export default Screen9mcq;
