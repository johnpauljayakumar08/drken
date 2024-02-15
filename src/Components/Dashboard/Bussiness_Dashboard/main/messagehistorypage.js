import React, { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function Messagehistorypage(){
    const[messagecontent,setMessagecontent]=useState([])
    var {id}=useParams()
    useEffect(()=>{
        
        fetch("http://localhost:5000/getmessage/"+id)
        .then(res=>res.json())
        .then(data=>setMessagecontent(data))
       
        })
    
    return(
        <>
            <div class="card-header d-flex justify-content-around">
                <Link to={`/message/${id}`}><h5 class="mb-0">Compose Message</h5></Link>
                <Link to={`/messagehistory/${id}`}><h5 class="mb-0"><b>Message History</b></h5></Link>
            </div>
            <div class="table-responsive">
                        <table class="table table-hover table-nowrap">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">S.NO</th>
                                    <th scope="col">Sender Name</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Person</th>
                                    <th scope="col">Date</th>
                                    
                                </tr>
                            </thead>
                            {
                                messagecontent.map((value,index)=>(
                                    <>

                                    <tbody>
                                    <tr>
                                            <td>
                                                {/* <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/> */}
                                                <a class="text-heading font-semibold" href="#">
                                                    {value.id}
                                                </a>
                                            </td>
                                            <td>
                                               {value.sender_name}
                                            </td>
                                            <td>
                                                {/* <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" class="avatar avatar-xs rounded-circle me-2"/> */}
                                                <a class="text-heading font-semibold" href="#">
                                                    {value.content}
                                                </a>
                                            </td>
                                            <td>
                                               {value.person}
                                            </td>
                                            <td>
                                               {value.message_date}
                                            </td>
                                        
                                        </tr>
                                    </tbody>
                                    </>
                                ))
                            }
                        </table>
                    </div>
        </>
    );
}