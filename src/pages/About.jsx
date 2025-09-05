import React from "react";
import { useParams } from "react-router-dom";



function About(){
    const params= useParams();
return (
    <div>
        <h1>welcome to the About page:ID --{params.id} NOME:{params.nome}!!</h1>
    </div>
)
}

export default About;