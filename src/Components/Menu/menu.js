import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom';
export function Menu(){
    return(
        <>
            <nav class="navbar navbar-expand-lg menu-custom-bgcolor">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">Navbar</a>
                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item ">
                        <a class="nav-link text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="#">Contact</a>
                        </li>
                        <li class="nav-item btn btn-success bgwhite">
                        <Link class="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}