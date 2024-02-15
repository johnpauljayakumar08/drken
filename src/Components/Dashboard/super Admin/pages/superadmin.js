import React from 'react'
import './speradmin.css'
import { Link } from 'react-router-dom';
export function Superadmindashboard(){
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
                            <h1 class="h2 mb-0 ls-tight">Hi, <span style={{color:"#DC3545" }} >Ken</span></h1>
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
        <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
                {/* <!-- Card stats --> */}
                <div class="row g-6 mb-6">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0 ">
                            <div className="overline"></div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2 ">Organization</span>
                                        <span class="h3 font-bold mb-0">2</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                            <i class="bi bi-credit-card"></i>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>13%
                                    </span>
                                    <Link><span class="textend"><i class="bi bi-add me-1"></i>Add More License</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                        <div className="overline"></div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Subscribers</span>
                                        <span class="h3 font-bold mb-0">16</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                            <i class="bi bi-people"></i>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>%
                                    </span>
                                    <Link><span class="textend">Invite Learners..</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                        <div className="overline"></div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Revenue</span>
                                        <span class="h3 font-bold mb-0">2</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                            <i class="bi bi-people"></i>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-danger text-danger me-2">
                                        <i class="bi bi-arrow-down me-1"></i>-%
                                    </span>
                                    <Link><span class="textend">Since last month...</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                        <div className="overline"></div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Active User</span>
                                        <span class="h3 font-bold mb-0">150</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                            <i class="bi bi-people"></i>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-danger text-danger me-2">
                                        <i class="bi bi-arrow-down me-1"></i>-%
                                    </span>
                                    <Link><span class="textend">Since last month...</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
             
            </div>
        </main>
            </div> 
        </>
    );
}