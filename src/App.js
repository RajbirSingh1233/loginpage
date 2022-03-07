import React , {useState} from 'react';
import './App.css';
import validator from 'validator'

const App = () =>{

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  return(
    <>
      <div className="main_div">
      <div className="center_div">
        <h1>Login</h1>
        <br />

        <p>See your growth and get consulting support!</p>

        <br /><br />
        <a href="https://accounts.google.com/" target="_blank"><button id="signin_google"> 
                <i class="fab fa-google"></i>
                <span id="google_text">&nbsp;&nbsp; Sign in with Google</span>
        </button></a>
        <br /><br />

        <fieldset>
          <legend>&nbsp;&nbsp;or Sign in with Email&nbsp;&nbsp;</legend>
        </fieldset>

        <br />
        <div>
          <form action="submit">

          <label>Email*</label>
          <br />
          <input type="email" id="form" placeholder="mail@website.com" onChange={(e) => validateEmail(e)} required/>
          <br />
          <span className="validemail"> {emailError} </span>
          <br />
          <label>Password*</label>
          <br />
          <input type="password" id="form" minlength="8" placeholder="Min.8 character" required/>
          
          <br /><br />

          <input type="checkbox" id="checked"/> 
          <label>&nbsp;&nbsp;Remeber me</label>
          <a href="#"><span id="forgot">Forget password?</span></a>
          <button id="login_button" type="submit" value="Submit" >Login</button>

          </form>

          <p id="register">Not registered yet? <a href="#"><span>Create an Account</span></a></p>

        </div>
        </div>
      </div>
    </>
  );
};

export default App;