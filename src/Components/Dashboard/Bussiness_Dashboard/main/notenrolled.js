import React, { useEffect, useState } from "react";
import './main.css'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export function Notenrolledfile(){
   
    var {id}=useParams();
    const[notenrolleduser,setNotenrolleduser]=useState([])
    const[spocname,setSpocname]=useState('')
    useEffect(()=>{
        
        fetch("http://localhost:5000/getenrolleduser/"+id)
        .then(res=>res.json())
        .then(data=>setNotenrolleduser(data))
        fetch("http://localhost:5000/bussuserdetails/"+id)
        .then(res=>res.json())
        .then((respon)=>{
            setSpocname(respon[0].spoc_name)
        })
    })
    function handleremaider(email){
        axios.post("http://localhost:5000/remaindermail/"+id,{email:email})
        .then((res)=>{
            if(res.data.status==="remaidersent"){
                alert("Remainder Sended")
                window.location.reload()
            }
            else{
                alert("Remainder not Sented")
            }
        })
    }
    function handleinactive(email){
        axios.post("http://localhost:5000/inactive/"+id,{email:email})
        .then((res)=>{
            if(res.data.status==="changed"){
                // alert("Remainder Sended")
                window.location.reload()
            }
            else{
                alert("Remainder not Sented")
            }
        })
    }
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
                            <h1 class="h2 mb-0 ls-tight">Hi, <span style={{color:"#DC3545",textTransform:"capitalize" }} >{spocname}</span></h1>
                        </div>
                        {/* <!-- Actions --> */}
                       
                    </div>
                    
                </div>
            </div>
        </header>
        {/* <!-- Main --> */}
        <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
              
                <div class="card shadow border-0 mb-7">
                    <div class="card-header">
                        <h5 class="mb-0">UnEnrolled User</h5>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover table-nowrap">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Remainder Send</th>
                                    <th scope="col">Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {notenrolleduser.map((value,index)=>( 
                                    <>

                                        <tr>
                                            <td>
                                                {value.id}
                                            </td>
                                            <td>
                                                <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
                                                <a class="text-heading font-semibold" href="#">
                                                    {value.email}
                                                </a>
                                            </td>
                                            <td>{value.remainder}</td>
                                            <td >
                                                {value.remainder <5 ?(

                                                <button type="button" onClick={()=>{handleremaider(value.email)}} class="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                    <i class="bi bi-envelope"></i>
                                                </button>
                                                ):(

                                                    <button type="button" onClick={()=>{handleinactive(value.email)}}class="btn btn-sm btn-square btn-neutral text-danger-hover ms-5">
                                                        <i class="bi bi-trash "></i>
                                                    </button>
                                                )}

                                               
                                            </td>

                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </main>
    </div>
        </>
    );
}