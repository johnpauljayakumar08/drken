import React from "react";
import testimonialimg from '../Asset/testimonial.png'
export function Testimonial(){
    return(
        <>
        
            <h1 className="text-center p-5">Testimonials</h1>
                <div  className="container-fluid">
                    <div className="row">

                        <div className="col-lg-6">
                            <img src={testimonialimg} className="col-lg-6"/>
                        </div>
                        <div className="col-lg-6 ">
                            <p className="custom-about-para">"Enrolling with <b><span style={{color:"#DC3545" }}>My Spine Coach</span></b> has been a game-changer for my spine health. The coaches are not just experts; they're compassionate guides who genuinely care about your well-being. The personalized program they designed for me has made a significant difference in my posture and overall comfort. I'm grateful for the positive impact they've had on my life."</p>
                        </div>
                    </div>
                </div>
    </>
    );
}