import React, { useEffect } from "react";
import './businessregister.css'
import loginpageimg from '../Asset/login.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import google from '../Asset/google.png'
import facebook from '../Asset/facebook.png'
import axios from "axios";
export function Businessregister(){
    function handlesignup(event){
        event.preventDefault();
        var fullnamepatten= /^[a-zA-Z ]{2,30}$/;
        var phonenumberpatten=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var passwordpatten=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/
        var emailpatten=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
        var companyname=document.getElementById("companyname").value
        var country=document.getElementById("country").value
        var companyphonenumber=document.getElementById("companyphonenumber").value
        var spocemailid=document.getElementById("spocemailid").value
        // alert(spocemailid)
        var compnaysize=document.getElementById("compnaysize").value
        var password=document.getElementById("password").value
        var companyemailid=document.getElementById("companyemailid").value
        var zipcode=document.getElementById("zipcode").value
        var spocname=document.getElementById("spocname").value
        var spocphonenumber=document.getElementById("spocphonenumber").value
        var companytype=document.getElementById("companytype").value
        var roll=document.getElementById("roll").value
        var key={
            companyname:companyname,
            country:country,
            companyphonenumber:companyphonenumber,
            spocemailid:spocemailid,
            compnaysize:compnaysize,
            password:password,
            companyemailid:companyemailid,
            zipcode:zipcode,
            spocname:spocname,
            spocphonenumber:spocphonenumber,
            companytype:companytype,
            roll:roll
        }
        var domaincomemail= companyemailid.split('@')
        alert(domaincomemail[1])
        var domainspocemail=spocemailid.split('@')
        alert (domainspocemail[1])
        if(!fullnamepatten.test(companyname) || companyname===''){
            alert("Check the Company name")
        }
        else if(!(domaincomemail[1] == domainspocemail[1])){
            alert("Plz use Company Email ID for SPOC Email id")
        }
        else if(country===''){
            alert("Check the country")
        }
        else if(!phonenumberpatten.test(companyphonenumber) || companyphonenumber===''){
            alert("check the company phone number ")
        }
        else if(companyemailid===''){
            alert("check the comapny Email Id")
        }
        else if(compnaysize===''){
            alert("check the Company size")
        }
        else if(!passwordpatten.test(password) || password===''){
            alert("check the password")
        }
        else if(zipcode===''){
            alert("check the Zipcode")
        }
        else if(!fullnamepatten.test(spocname) || spocname===''){
            alert("Check the Spoc name")
        }
        else if(!phonenumberpatten.test(companyphonenumber) || companyphonenumber===''){
            alert("check the company phone number ")
        }
        else if(companytype===''){
            alert("check the companytype")
        }
        else if(roll===''){
            alert("check the roll")
        }
        else{
            axios.post("http://localhost:5000/signupbussiness",key)
            .then((res)=>{
                if(res.data.status==="inserted"){
                    alert("data are Registed successfully")
                    window.location.href='/login'
                }
                else if(res.data.status==="error"){
                    alert("Already register...")
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
                                <form onSubmit={handlesignup}>
                                    <div className="container-fluid row">

                                    <div className="col-lg-6">

                                        <div class="form-group">
                                            <label class="form-control-label">Company Name</label>
                                            <input type="text" class="form-control" name="companyname" id="companyname"/>
                                        </div>
                                        {/* <div class="form-group">
                                            <label class="form-control-label">Company Door No</label>
                                            <input type="text" class="form-control" />
                                        </div> */}
                                        {/* <div class="form-group">
                                            <label class="form-control-label">City</label>
                                            <input type="text" class="form-control"/>
                                        </div> */}
                                        <div class="form-group">
                                            <label class="form-control-label">Country</label>
                                            <input type="text" class="form-control" name="country" id="country" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Company Phone Number</label>
                                            <input type="text" class="form-control" name="companyphonenumber" id="companyphonenumber"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">SPOC Email Id</label>
                                            <input type="text" class="form-control" name="spocemaiid" id="spocemailid" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Company size</label>
                                            <input type="text" class="form-control" name="companysize" id="compnaysize"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Password</label>
                                            <input type="password" class="form-control" name="password" id="password" />
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-6">

                                        <div class="form-group">
                                            <label class="form-control-label">Company Email Id</label>
                                            <input type="text" class="form-control" name="companyemailid" id="companyemailid"/>
                                        </div>
                                        {/* <div class="form-group">
                                            <label class="form-control-label">Company Street Name</label>
                                            <input type="text" class="form-control" />
                                        </div> */}
                                        {/* <div class="form-group">
                                            <label class="form-control-label">State</label>
                                            <input type="text" class="form-control"/>
                                        </div> */}
                                        <div class="form-group">
                                            <label class="form-control-label">Zipcode</label>
                                            <input type="text" class="form-control" name="zipcode" id="zipcode" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">SPOC Name</label>
                                            <input type="text" class="form-control" name="spocname" id="spocname"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">SPOC Phone Number</label>
                                            <input type="text" class="form-control" name="spocphonenumber" id="spocphonenumber" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Company Type</label>
                                            <input type="text" class="form-control" name="companytype" id="companytype"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Roll</label>
                                            <select class="list-dt d-block col-lg-12 col-12" name="roll" id="roll" value='C'>
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