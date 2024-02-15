import React from "react";
import { Bussinessmenu } from "../menu/menu";
import { MessagePage } from "../main/messagepage";
import { Bussinessdashboardmain } from "../main/main";
import { Notenrolledfile } from "../main/notenrolled";
import { Messagehistorypage } from "../main/messagehistorypage";

export function Overall(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-2">
                        <Bussinessmenu/>
                    </div>
                    <div className="col-lg-10">
                        <Bussinessdashboardmain/>
                    </div>
                </div>

            </div>
        </>
    );
}
export function Message(){
    return(
        <>
           <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-2">
                        <Bussinessmenu/>
                    </div>
                    <div className="col-lg-10">
                        <MessagePage/>
                    </div>
                </div>

            </div> 
        </>
    );
}
export function MessageHistory(){
    return(
        <>
           <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-2">
                        <Bussinessmenu/>
                    </div>
                    <div className="col-lg-10">
                        <Messagehistorypage/>
                    </div>
                </div>

            </div> 
        </>
    );
}
export function NotEnrolled(){
    return(
        <>
           <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-2">
                        <Bussinessmenu/>
                    </div>
                    <div className="col-lg-10">
                        <Notenrolledfile/>
                    </div>
                </div>

            </div> 
        </>
    );
}