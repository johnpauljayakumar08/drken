import React from "react";
import aboutimg from '../Asset/aboutus.png'
import './about.css'
export function About_us(){
    return(
        <>
            <div  className="container-fluid">
                <div className="row">

                    <div className="col-lg-6 p--lg-5">
                        <img src={aboutimg} className="container-fluid mt-5"/>
                    </div>
                    <div className="col-lg-6 pt-lg-5">
                         <h4 className="pt-5 bgcolor">ABOUT US</h4>
                        <p className="custom-about-para ">Welcome to <b><span style={{color:"#DC3545" }}>My Spine Coach</span></b>, your dedicated partner in achieving a healthier, pain-free spine. As leaders in spinal wellness, our team of expert coaches is committed to guiding you on a personalized journey to optimal spine health. With a blend of cutting-edge techniques and compassionate care, we tailor our approach to your unique needs. At My Spine Coach, we prioritize education, empowering you with the knowledge to make informed decisions about your spine's well-being. From innovative exercises to lifestyle adjustments, our comprehensive programs are designed to strengthen and support your spine. Choose My Spine Coach, for a transformative experience, where your spine's vitality is our primary focus. Trust us to be your spine coach, guiding you towards a life of comfort, flexibility, and lasting wellness.</p>
                    </div>
                </div>
            </div>
        </>
    );
}