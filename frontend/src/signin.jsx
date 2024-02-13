// import React, { useState } from 'react'
// import './index.css'
// import { nanoid } from 'nanoid';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function Signin(props){
//     const navigate=useNavigate();
//     const [signinformData, setSignInFormData] = React.useState(
//         {
//             Email: "",
//             Password:""
//         }
//     )


//     function handleChange(event){
//         const {name, value}=event.target;
//         setSignInFormData(prevFormData =>{
//             return {
//                 ...prevFormData,
//                 [name]:value

//             }
//         })
//     }


//     const _Sign_In_User = (event) => {
//         event.preventDefault();
//         axios.post("http://localhost:5175/signin", { Email: signinformData.Email ,Password : signinformData.Password}).then(
//           (response) => {
//             // alert(response.data);
//             if(response.data=="wrong password"){
//                 alert(response.data);
//             }
//             else{
//                 alert(response.data);
//                 props.change_nav_bar_State(props.id);
//             }
//           }
//         )
//         .catch(error => {
//             console.log(error.response);
//             if (error.response && error.response.status === 401 && error.response.data === "wrong credentials") {
//                 alert('wrong credentials');
//             }
//           });

//       };

//     return(


        
//         <div className='subsignup'>
//             <h1>SIGN IN</h1>
//             <form className="signup-main" onSubmit={_Sign_In_User
//             }>
//             <div>
//             <label htmlFor="_email">EMAIL</label>
//                 <br />
//                 <input
//                 type="email"
//                 id='_email'
//                 placeholder="email@gmail.com"
//                 onChange={handleChange}
//                 name="Email"
//                 value={signinformData.Email}
//             />
//             </div>
//             <br />
//             <div>
//             <label htmlFor="_pass">PASSWORD</label>
//                 <br />
//                 <input
//                 type="password"
//                 id='_pass'
//                 placeholder="type-password"
//                 onChange={handleChange}
//                 name="Password"
//                 value={signinformData.Password}
//             />
//             </div>
//             <div>
//                 <button>Log In</button>
//             </div>
//             <div>
//                 <p>Dont have any Account? <a onClick={()=>props.toggle(props.id)} 
//                 style={{ color: "red" }}>Sign Up.</a></p>
//             </div>
//             </form>
//             </div>)
// }

// import React, { useState } from 'react';
// import './login.css';
// const Login = () => {
//   const [isLogin, setLogin] = useState(true);
//   const [formData, setFormData] = useState({ username: '', password: '' });

//   const handleToggle = () => {
//     setLogin(!isLogin);
//     setFormData({ username: '', password: '' }); // Reset form data on toggle
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your authentication logic here
//     console.log(`Submitted ${isLogin ? 'Login' : 'Signup'} form with data:`, formData);
//   };

//   return (
//     <div className="container">
//       <div className="tabs">
//         <button className={`tab-btn ${isLogin ? 'active' : ''}`} onClick={handleToggle}>
//           Login
//         </button>
//         <button className={`tab-btn ${!isLogin ? 'active' : ''}`} onClick={handleToggle}>
//           Signup
//         </button>
//       </div>
//       <form className="form" onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
//       </form>
//     </div>
//   );
// };

import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [isLogin, setLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '', email: '' });

  const handleToggle = () => {
    setLogin(!isLogin);
    setFormData({ username: '', password: '', email: '' }); // Reset form data on toggle
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let apiUrl = isLogin ? 'http://localhost:3131/login' : 'http://localhost:3131/signUp';
      const response = await axios.post(apiUrl, formData);
      if(response.status===409){
        alert("same Email entered");
      }
      if (response.status === 200) {
        localStorage.setItem('email',formData.email);
        // Successful response from the backend
        (isLogin? (window.alert("Successfully Login"),HandleClick()):(window.alert("Successfully signed up"),setLogin(true)))
        // console.log(`Successfully submitted ${isLogin ? 'Login' : 'Signup'} form`);
      } else {
        // Handle error response from the backend
        console.error('Error submitting form data');
      }
    } catch (error) {
        if (error.response && error.response.status === 400) {window.alert("Enter new Email")}
      console.error('Error occurred while submitting form data', error);
    }
    // console.log(`Submitted ${isLogin ? 'Login' : 'Signup'} form with data:`, formData);
    setFormData({username:"",email:"",password:" "})
  };
//   const handleSubmitLog = async (e) =>{
//     e.preventDefault()
//     const response = await axios.post('http://localhost:3131/signUp',formData);
//     if(response.status===111){
//         alert ("same Email entered")
//     }
//     if(response.status===200){
//         alert("Successfully Signed Up")
//     }
//     else{
//         alert("error occured ",response)
//     }

//   }
const navigate = useNavigate();
const Navigation = () =>{
    navigate('/start1')
}
function HandleClick(){
    Navigation();
}

  return (
    <div className="container">
      <div className="tabs">
        <button className={`tab-btn ${!isLogin ? 'active' : ''}`} onClick={handleToggle}>
          Signup
        </button>
        <button className={`tab-btn ${isLogin ? 'active' : ''}`} onClick={handleToggle}>
          Login
        </button>
      </div>
      <form className="form" onSubmit={handleSubmit}>
          {!isLogin && (
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
            )}
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
    </div>
  );
};

export default Login;

// export default Login;
