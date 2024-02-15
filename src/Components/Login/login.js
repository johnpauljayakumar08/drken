import React,{useState} from "react";
import './login.css'
import loginpageimg from '../Asset/login.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faL, faXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import google from '../Asset/google.png'
import facebook from '../Asset/facebook.png'
import {GoogleLogin} from "react-google-login";
// import Confetti from "react-confetti";
// import { ToastContainer,toast} from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
export function Login(){
    // const [loginData, setLoginData] = useState(
    //     localStorage.getItem('loginData')
    //       ? JSON.parse(localStorage.getItem('loginData'))
    //       : null
    //   );
    
    //   const handleFailure = (result) => {
    //     console.log (result);
    //   };
    
    //   const handleLogin = async (googleData) => {
    //     const res = await fetch('/api/google-login', {
    //       method: 'POST',
    //       body: JSON.stringify({
    //         token: googleData.tokenId,
    //       }),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });
    
    //     const data = await res.json();
    //     setLoginData(data);
    //     localStorage.setItem('loginData', JSON.stringify(data));
    //   };
    //   const handleLogout = () => {
    //     localStorage.removeItem('loginData');
    //     setLoginData(null);
    //   };
    const handleRoute = () => {
        window.location.href='/businessregistration';
      };
      const handleRoutelearner = () => {
        window.location.href='/learnerregistration';
      };
      const handlelogin=(event)=>{
        event.preventDefault();
        var username=document.getElementById("email").value 
        var password=document.getElementById("password").value
        var key={
            username:username,
            password:password
        }
        if(username===''){
            alert("Please Enter the Username")
        }
        else if(password==''){
            alert("Please Enter the Password")
        }
        else{
            axios.post("http://localhost:5000/login",key)
            .then((res)=>{
                
                if(res.data.status==="success"){
                    var roll=res.data.roll;
                    var id=res.data.id;
                    alert(id)
                    if(roll==='C'){
                        window.location.href=`/bussinessdashboard/${id}`
                    }
                    else if(roll==='L'){
                        window.location.href=`/indiviualdashboard/${id}`
                    }
                    else if(roll==='S'){
                        window.location.href=`/superadmin/${id}`
                    }
                }
                else if(res.data.status==="invalid_user"){
                    alert("Please check your password")
                }
                else if(res.data.status==="both_are_invalid"){
                    alert("Please check your username")
                }
                else{
                    alert("Please Contact Admin")
                }
            })
        }
      }
    return(
        <>
            <div className="container-fluid paddingleft">
                <div className="row">

                    <div className="col-lg-4 paddingleft">
                        <img src={loginpageimg} className="container-fluid"/>
                    </div>
                    <div className="col-lg-6 p-5">
                        <div class="col-lg-12 login-title">
                            <h3>Sign in</h3>
                            <h5 style={{color:"#802626" }}>How can we help you feel better today?</h5>
                        </div>

                        <div class="col-lg-12 login-form">
                            <div class="col-lg-12 login-form">
                                <form onSubmit={handlelogin}>
                                    
                                    <div class="form-group">
                                        <label class="form-control-label">Email Id</label>
                                        <input type="text" class="form-control" name="email" id="email"/>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">PASSWORD</label>
                                        <input type="password" class="form-control" name="password" id="password" />
                                    </div>
                                    <div class="login_remember_box">
                                        <label class="control control--checkbox">
                                            Between 8 and 72 characters
                                           
                                           
                                        </label>
                                        <a href="#" class="forget_password">
                                            Forgot Password
                                        </a>
                                    </div>
                                    <div class="col-lg-12">
                                            <button type="submit" class="btn btnbgcolor col-lg-12 col-12">Sign in</button>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-2"></div>
                            <div className="container-fluid  p-3 row">
                                <p className="text-center">- OR -</p>
                            </div>
                            {/* <GoogleLogin className="container-fluid fullbroder text-center pt-3 rounded"
                                clientId=""
                                buttonText="Continue with google"
                                onSuccess={googleResponse}
                                onFailure={onFailure}
                                >
                                <div className="container-fluid fullbroder text-center pt-3 rounded ">
                                <img src={google} className="mb-3" />
                                <p className="d-inline ms-3">Continue with google</p>
                            </div>
                            </GoogleLogin> */}
                            {/* <GoogleLogin className="container-fluid fullbroder text-center pt-3 rounded"
                                clientId="865844170104-hiklatl7mmi84jbrvfpcr0eqk0igr5tq.apps.googleusercontent.com"
                                buttonText="Log in with Google"
                                onSuccess={handleLogin}
                                onFailure={handleFailure}
                                cookiePolicy={'single_host_origin'}
                                ></GoogleLogin> */}
                            <div className="container-fluid fullbroder text-center pt-3 mt-4 rounded">
                                <img src={facebook} className="mb-3"/>
                                <p className="d-inline ms-3">Continue with facebook</p>
                            </div>
                            <p className="pt-4 text-center">Didn't have a My Spine Coach?<span style={{color:"#DC3545",cursor:"pointer" }}  data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</span></p>
                            {/* <div class="modal-dialog modal-dialog-centered">
                            jdslfnvlksnfvknsmfkvnslkfvnkslfv
                            </div> */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                    <div class="modal-header modleborderbottom">
                                        <h5 class="modal-title" id="exampleModalLabel">Encure</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body p-5">
                                        <p>Guiding your health journey with Experties and Compassion.</p>
                                        <div className=" d-flex justify-content-between">

                                            <button type="button" class="btn btnbgcolor" onClick={handleRoutelearner} >Individual</button>
                                            <button type="button" class="btn btnoutlinebgcolor" onClick={handleRoute}>Business</button>
                                            
                                        </div>

                                    </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-lg-2 p-5 d-none d-lg-block" >

                            <Link to='/'><FontAwesomeIcon icon={faXmark} className="iconsize"  /></Link>
                        </div>
                </div>
            </div>
        </>
    );
}