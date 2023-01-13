import React from 'react'
import { useState } from 'react'
import './Header.css'
import NavBar from './Nav/NavBar'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
const Header = () => {
  const [activeDiv,SetactiveDiv]=useState(true)
  const loginFormHandler=()=>{
    SetactiveDiv(true)
  }
  const signFormHandler=()=>{
    SetactiveDiv(false)
  }
  const handleSignUpSubmission=(event)=>{
    let registrationFormEle=document.getElementById("signUpForm");
    console.log(registrationFormEle.password.value);
    if(registrationFormEle.password.value!==registrationFormEle.confirmPassword.value){
      alert("**confirm Password is not matched with the password");
      // document.getElementById("alertMsg").innerText="**confirm Password is not matched with the password"
      event.preventDefault()
    }
    else{
      return true
    }
  }
  return (
    <div id="header-main-container">
      <div id='header-sub-container'>
        <NavBar/>
        <div id='loginForm-Div'>

          <div id="loginFormHeading">
            <button id="loginBtnForForm" className='active' onClick={loginFormHandler}>Login</button>
            <button id="signUpBtnForForm" onClick={signFormHandler}>Sign Up</button>
          </div>
          <div id="mainFormPart">
            <input type="radio" className="radioBtn" name="radio-btn" id="radio1" checked={activeDiv} ></input>
            <input type="radio" className="radioBtn" name="radio-btn" id="radio2" checked={!activeDiv}></input>
            <div className="divInMainForm first-divMainForm">
                <form action="" id="loginForm" onSubmit={()=>{return handleSignUpSubmission()}}>
                  <div>
                    <label for="username">Username:</label>
                    <input type="text" placeholder="Email or Phone" id="username" name='userEmail' required>
                    </input>
                  </div>
                  <div>
                    <label for="password">Password:</label>
                    <input type="password" placeholder="Password" id="password" name='password' required>
                    </input>
                  </div>
                  <span id='alertMsg'></span>
                  <div><input type="submit" value="Log In"></input></div>
                  <div class="social">
                    <div class="go"><GoogleIcon/><span>Google</span></div>
                    <div class="fb"><FacebookIcon/><span>Facebook</span></div>
                  </div>
                </form>
            </div>
            <div className="divInMainForm">
                <form action="/personalInformation" id="signUpForm" onSubmit={handleSignUpSubmission}> 
                      <div>
                        <label for="email">Email:</label>
                        <input type="text" placeholder="Email" id="email" name='userEmail' required>
                        </input>
                      </div>
                      <div>
                        <label for="password">Password:</label>
                        <input type="password" placeholder="password" id="password" name='password' required>
                        </input>
                      </div>
                      <div>
                        <label for="Conpassword">Confirm Password:</label>
                        <input type="password" placeholder="Confirm password" id="Conpassword" name='confirmPassword' required>
                        </input>
                      </div>
                        <span id='alertMsg'></span>
                      <div><input type="submit" value="Registration"></input></div>
                      <div class="social">
                        <div class="go"><GoogleIcon/><span>Google</span></div>
                        <div class="fb"><FacebookIcon/><span>Facebook</span></div>
                      </div>
                </form>
            </div>
          </div>
      </div>
        
      </div>
        <div id="headinginSubHeading">
          <div data-aos="fade-left">Nobody is bothered about an institution</div>
          <div data-aos="fade-right"> more than its</div>
          <div data-aos="fade-up">Alumni</div>
        </div>
      
    </div>
  )
}

export default Header
