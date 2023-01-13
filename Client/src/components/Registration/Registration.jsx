import React from 'react'
import useQuery from '../../hooks/useQuery.js';
import './Registration.css'
import axios from 'axios';
import { useState } from 'react';
const Registration = () => {
  const query=useQuery();
  const [nameRegister,setnameRegister]=useState();
  const [userNameRegister,setuserNameRegister]=useState();
  const [phoneNumberRegister,setphoneNumberRegister]=useState();
  const [BranchRegister,setBranchRegister]=useState();
  const [CollegeRegister,setCollegeRegister]=useState();

  // console.log(query.get("userEmail"));
 
  const postData=async(event)=>{
    
    event.preventDefault();
    const formData=new FormData();
    formData.append('Name',nameRegister);
    formData.append('userName',userNameRegister);
    formData.append('email',query.get("userEmail"));
    formData.append('phoneNumber',phoneNumberRegister);
    formData.append('password',query.get("password"));
    formData.append('Branch',BranchRegister);
    formData.append('College',CollegeRegister);
    await axios.post('http://localhost:5000/api/v1/almatters/addNewUser',formData).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log("error");
    })
  }
  return (
    <div id='registration-container'>
        {/* <div class="title">Registration</div> */}
    <div class="content">
      <form action="/feed" onSubmit={postData}>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required onChange={(e)=>{setnameRegister(e.target.value)}}></input>
          </div>
          <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" required  onChange={(e)=>{setuserNameRegister(e.target.value)}}></input>
            <span id="userNameMsg"></span>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email" value={query.get("userEmail")} ></input>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required onChange={(e)=>{setphoneNumberRegister(e.target.value)}}></input>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" placeholder="Enter your password" value={query.get("password")}></input>
          </div>
          <div class="input-box">
            <span class="details">Branch</span>
            <input type="text" placeholder="Branch you are study" required onChange={(e)=>{setBranchRegister(e.target.value)}}></input >
          </div>
          <div class="input-box">
            <span class="details">College</span>
            <select onChange={(e)=>{setCollegeRegister(e.target.value)}}>
                <option value="IIITS">Indian Institute of Information Technology Sri City</option>
                <option value="IIITA">Indian Institute of Information Technology Allahabad</option>
                <option value="IIITG">Indian Institute of Information Technology Guwahati</option>
                <option value="IIITV">Indian Institute of Information Technology Vadoddra</option>
                <option value="IIITK">Indian Institute of Information Technology Kota</option>
                <option value="IIITU">Indian Institute of Information Technology Una</option>
                <option value="IIITL">Indian Institute of Information Technology Lucknow</option>
                <option value="IIITD">Indian Institute of Information Technology Dharwad</option>
                
            </select>
            {/* <input type="text" placeholder="College you are study in" required></input> */}
          </div>
        </div>
        
        <div class="button">
          <input type="submit" value="Register"></input>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Registration
