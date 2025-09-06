import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import users from "../data/user.json";

function About(){
    const params= useParams();
    const [user,setUser]= useState();

    useEffect(() => {
        const utenteTrovato = users?.find((item) => item.id === Number(params.id));
        setUser(utenteTrovato);
    },[params]);

return (
    <div>
        <h1>welcome to the About page:ID --{params.id} <br/>
            NOME: {user?.name}
            <br/>
            EMAIL: {user?.email}
            <br/>
            ETA: {user?.age}
             <br/>
            CITTÀ: {user?.city}
        </h1>
    </div>
)
}

export default About;