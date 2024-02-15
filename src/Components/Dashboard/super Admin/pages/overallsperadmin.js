import React from "react";
import { Superadminmenu } from "../menu/menu";
import { Superadmindashboard } from "./superadmin";

export function Dashboardpage(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-2">
                        <Superadminmenu/>
                    </div>
                    <div className="col-lg-10">
                        <Superadmindashboard/>
                    </div>
                </div>

            </div>
        </>
    );
}