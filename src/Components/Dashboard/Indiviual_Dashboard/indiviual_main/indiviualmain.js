import React, { useEffect, useState } from "react";
import './indiviualmain.css'
import { Link } from "react-router-dom";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line} from "react-chartjs-2";
import pattern from 'patternomaly';
import source from '../../../data/data.json'
import event from '../../../data/event.json'
import ProgressBar from "@ramonak/react-progress-bar";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
export function Indiviualdashboardmain(){
  const[coursecompletion,setCoursecompletion]=useState(65)
    return(
        <>
           <div class="h-screen flex-grow-1 overflow-y-lg-auto">
        {/* <!-- Header --> */}
        <header class="bg-surface-primary border-bottom pt-6">
            <div class="container-fluid">
                <div class="mb-npx">
                    <div class="row align-items-center">
                        <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                            {/* <!-- Title --> */}
                            <h1 class="h2 mb-0 ls-tight">Hi, <span style={{color:"#DC3545" }} >Learner</span></h1>
                        </div>
                        {/* <!-- Actions --> */}
                       
                    </div>
                    {/* <!-- Nav --> */}
                    {/* <ul class="nav nav-tabs mt-4 overflow-x border-0">
                        <li class="nav-item ">
                            <a href="#" class="nav-link active">All files</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link font-regular">Shared</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link font-regular">File requests</a>
                        </li>
                    </ul> */}
                </div>
            </div>
        </header>
        {/* <!-- Main --> */}
        {/* <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
                <!-- Card stats -->
                <div class="row g-6 mb-6">
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card shadow border-0 ">
                            <div className="overline"></div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2 ">Total Course</span>
                                        <span class="h3 font-bold mb-0"></span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                            <i class="bi bi-book-fill"></i>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>13%
                                    </span>
                                    <Link><span class="textend"><i class="bi bi-add me-1"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card shadow border-0">
                        <div className="overline"></div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">On-Going Course</span>
                                        <span class="h3 font-bold mb-0"></span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                            <i class="bi bi-book-half"></i>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>%
                                    </span>
                                    <Link><span class="textend"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12">
                        <div class="card shadow border-0">
                        <div className="overline"></div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Completed Course</span>
                                        <span class="h3 font-bold mb-0"></span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                            <i class="bi bi-book-fill"></i>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-down me-1"></i>%
                                    </span>
                                    <Link><span class="textend"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </main>  */}
            <div className="g-4 row setrow m-3">
                    <div className="col-lg-7 bg-white shadow card1 m-5">

                        <Bar className="col-lg-12 p-1"
                        data= {{
                                labels: source.map((data)=>data.day),
                                datasets: [{
                                label: 'working hours',
                                data: source.map((data)=>data.hours),             
                                borderRadius:20,
                                // backgroundColor:"#8f231b",
                                backgroundColor: pattern.draw('diagonal-right-left',"#8f231b"),
                                borderWidth:10
                            },],
                            
                        }}
                        options= {{
                            animation:{
                                duration:2000,
                                delay:30
                            },
                            scales: {
                            y: {
                                grid: {
                                display:false,
                                color: 'red',
                                
                                }
                            },
                            x: {
                                grid: {
                                display:false,
                                color: 'red',
                                
                                }
                            }
                            }
                        }}  
                        />
                    </div>
                    <div className="p-3 col-lg-4">

                        <div class="card col-lg-12 card1 text-center " >
                        <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="card-img-top imgsiz p-5 mx-auto rounded-circle"/>
                            <div class="card-body">
                                <h5 class="card-title">Syam singa roy</h5>
                                <p class="card-text">Developer</p>
                                <div class="row mt-3">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2 ">Course Completed</span>
                                     
                                        <ProgressBar completed={coursecompletion} bgColor="#8f231b" animateOnRender="true" transitionDuration="5s"/>
                                    </div>
                                   
                                </div>
                                <a href="#" class="btn  btnbgcolor mt-4 ">Edit..</a>
                            </div>
                        </div>
                        
                    </div>
            </div>
            <div className="conttainer p-5">

                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth" className="col-lg-6"
                    events={event.map((data)=>data)}
                      eventColor= '#8f231b'
                      
                />
            </div>
        </div>
        </>
    );
}