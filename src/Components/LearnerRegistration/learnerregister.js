import React, { useEffect, useState } from "react";
import './learnerregister.css'
import loginpageimg from '../Asset/login.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUmbrella, faXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import google from '../Asset/google.png'
import facebook from '../Asset/facebook.png'
import axios from 'axios'
export function Learnerregister(){
    const[comapny,setCompany]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/getcompnamy")
        .then(res=>res.json())
        .then(data=>setCompany(data))
    })

    var handlelearnerregistration=(event)=>{
        event.preventDefault()
        var fullnamepatten= /^[a-zA-Z ]{2,30}$/;
        var phonenumberpatten=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var passwordpatten=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/
        var emailpatten=/^[a-z0-9]+@[a-z]+\.[a-z]$/
        var fullname=document.getElementById("fullname").value
        var phonenumber=document.getElementById("phonenumber").value
        var companyname=document.getElementById("companyname").value
        var password=document.getElementById("password").value
        var email=document.getElementById("email").value
        var qualification=document.getElementById("qualification").value
        var newcompanyname=document.getElementById("newcompanyname").value
        var roll=document.getElementById("roll").value
        var data={
            fullname:fullname,
            phonenumber:phonenumber,
            companyname:companyname,
            password:password,
            email:email,
            qualification:qualification,
            newcompanyname:newcompanyname,
            roll:roll
        }
        if(!fullnamepatten.test(fullname) || fullname===''){
            alert("Check the fullname")
        }
        else if(!phonenumberpatten.test(phonenumber) || phonenumber===''){
            alert("check the phone number")
        }
        else if(!passwordpatten.test(password) || password===''){
            alert("check the password")
        }
        else if(!emailpatten.test(email) || email===''){
            alert("chech the email")
        }
        else if(companyname===''){
            alert("select the company")
        }
        else if(companyname==="other" && newcompanyname===''){
            alert("check the company name")
        }
        else if(qualification===''){
            alert("Check the Qualification")
        }
        else if(roll===''){
            alert("Select the Roll")
        }
        else{
            axios.post("http://localhost:5000/signupindiviual",data)
            .then((res)=>{
                if(res.data.status==="inserted"){
                    alert("data are Registed successfully")
                    window.location.href='/login'
                }
                else{
                    alert("data are not Registed")
                }
            })
        }
    }
    return(
        <>
            <div className="container-fluid paddingleft">
                <div className="row">

                    <div className="col-lg-4 paddingleft">
                        <img src={loginpageimg} className="container-fluid hegi"/>
                    </div>
                    <div className="col-lg-7 p-5">
                        <div class="col-lg-12 login-title">
                            <h3>Sign Up</h3>
                            <h5 style={{color:"#802626" }}>How can we help you feel better today?</h5>
                        </div>

                        <div class="col-lg-12 login-form">
                            <div class="col-lg-12 login-form">
                                <form onSubmit={handlelearnerregistration}>
                                    <div className="container-fluid row">

                                    <div className="col-lg-6">

                                        <div class="form-group">
                                            <label class="form-control-label">Enter the Name</label>
                                            <input type="text" class="form-control" name="fullname" id="fullname"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Phone Number</label>
                                            <input type="text" class="form-control" name="phonenumber" id="phonenumber" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Company Name</label>
                                            <select class="list-dt d-block col-lg-12 col-12" name="companyname" id="companyname">
                                                <option>select the Company</option>
                                                {
                                                    comapny.map((value,index)=>(
                                                        <>
                                                            <option value={value.company_name}>{value.company_name}</option>
                                                        </>
                                                    ))
                                                }
                                                <option value='other'>Other...</option>
                                                
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Password</label>
                                            <input type="password" class="form-control" name="password" id="password" />
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-6">

                                        <div class="form-group">
                                            <label class="form-control-label">Email Id</label>
                                            <input type="text" class="form-control" name="email" id="email"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Qualification</label>
                                            <input type="text" class="form-control" name="qualification" id="qualification" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">if other Enter the Company Name</label>
                                            <input type="text" class="form-control" name="newcompanyname" id="newcompanyname"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Roll</label>
                                            <select class="list-dt d-block col-lg-12 col-12" id="roll" name="roll" value='L'>
                                                <option>select the Roll</option>
                                                <option value='C'>Client</option>
                                                <option value='L'>Learner</option>
                                            </select>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-lg-12">
                                            <button type="submit" class="btn btnbgcolor col-lg-12 col-12">Sign Up</button>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-2"></div>
                            <div className="container-fluid  p-3 row">
                                <p className="text-center">- OR -</p>
                            </div>
                            <div className="container-fluid fullbroder text-center pt-3 rounded ">
                                <img src={google} className="mb-3" />
                                <p className="d-inline ms-3">Continue with google</p>
                            </div>
                            <div className="container-fluid fullbroder text-center pt-3 mt-4 rounded">
                                <img src={facebook} className="mb-3"/>
                                <p className="d-inline ms-3">Continue with facebook</p>
                            </div>
                            <p className="pt-4 text-center">Didn't have a My Spine Coach?<Link to='/login' style={{color:"#DC3545",textDecoration:"none" }}><span style={{color:"#DC3545",textDecoration:"none" }} >Sign In</span></Link></p>
                        </div> 
                        <div className="col-lg-1 p-5 d-none d-lg-block" >

                            <Link to='/'><FontAwesomeIcon icon={faXmark} className="iconsize"  /></Link>
                        </div>
                </div>
            </div>
        </>
    );
}