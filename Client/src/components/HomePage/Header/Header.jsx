import React from 'react'
// import { useState } from 'react'
import './Header.css'
const Header = () => {
  
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
        <div id='header-flex'>
          <div id="headinginSubHeading">
            <div data-aos="fade-left">Nobody is bothered about an institution</div>
            <div data-aos="fade-right"> more than its</div>
            <div data-aos="fade-up">Alumni</div>
          </div>
          <div id='loginForm-Div'>
                <form action="" id="loginForm" onSubmit={()=>{return handleSignUpSubmission()}}>
                    <div>
                      <input type="text" placeholder="Email or Phone" id="username" name='userEmail' required>
                      </input>
                    </div>
                    <div>
                      <input type="password" placeholder="Password" id="password" name='password' required>
                      </input>
                    </div>
                    <span id='alertMsg'></span>
                    <div><input type="submit" value="Log In"></input></div>
                    <div class="social">
                      <div class="go">Google</div>
                      <div class="fb">Facebook</div>
                    </div>
                 </form>
          </div>
        </div>
      </div>
  )
}

export default Header
