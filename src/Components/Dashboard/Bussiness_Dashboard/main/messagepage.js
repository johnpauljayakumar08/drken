import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios'
export function MessagePage(){
    var {id}=useParams()
    const[userdetails,setUserdetails]=useState()
    const [selectedValues, setSelectedValues] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/geteuser/"+id)
        .then(res=>res.json())
        .then(data=>setUserdetails(data))
    })
    var emailarray = selectedValues.map(function (obj) {
        return obj.email;
    });
    var email = emailarray.toString();
    function handlemessage(event){
        event.preventDefault()
        var content=document.getElementById("iBody").value 
        var key={
            content:content,
            email:email
        }
        if(content===""){
            alert("please fill the content")
        }
        else{
            axios.post("http://localhost:5000/message/"+id,key)
            .then((res)=>{
                if(res.data.status==="message_send"){
                    alert("Mail sended Successfully")
                    window.location.reload()
                }
                else{
                    alert("mail is not sendted")
                }
            })
        }
      
    
    
    }
    const onSelect = (selectedList, selectedItem) => {
      // Update state with the selected values
      setSelectedValues(selectedList);
  console.log(selectedValues)
      // Log selected values to the console
     
    };
    return(
        <>
           <div class="card-header d-flex justify-content-around">
           <Link to={`/message/${id}`}><h5 class="mb-0"><b>Compose Message</b></h5></Link>
                <Link to={`/messagehistory/${id}`}><h5 class="mb-0">Message History</h5></Link>
            </div>
            <form className="container borderwork p-5" onSubmit={handlemessage} >
                <div className="form__row body__row">
                <textarea name='body' id="iBody" placeholder='Message' type="text"  className="borderwork" required></textarea>
                </div>
                <div className="p-5">
                <Multiselect id="select"
                
                
                    displayValue="email"
                    onSelect={onSelect}
                    // onKeyPressFn={function noRefCheck(){}}
                    onRemove={function noRefCheck(){}}
                    // // onSearch={function noRefCheck(){}}
                    options={userdetails}
                    // getSeletedItems={}
                    // className="container-fluid"
                    />
                    {/* <select className="col-lg-12 col-12 mt-5 p-5 rounded borderwork">
                        <option>Select the User</option>
                        {
                            userdetails.map((value,index)=>(

                                <option value={value.email} className="p-5">{value.email}</option>
                            ))
                        }
                    </select> */}
                {/* <input name='author' id="iAuthor" placeholder='Author' type="text" maxLength="20" required></input> */}
                {/* <input name='title' id="iTitle" placeholder='Title' type="text" maxLength="30" required></input> */}
                </div>


                <button type="submit">Submit</button>
            </form>
        </>
    );
}