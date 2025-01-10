import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams()
    return(
        <>
            <div className="bg-black text-orange-600 text-xl">User: {userid} </div>
        </>
    )
}

export default User