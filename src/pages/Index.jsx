import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Index(){
return (
    <div>
        <h1>welcome to the index page!!</h1>
        <Link to="/about/123/ciao">pagina ciao</Link> |
        <Link to="/about/345/Giorgia">pagina Giorgia</Link> |
        <Link to="/about/678/Sara"> pagina Sara</Link>|
        <Link to="/about/91011/Medhi">pagina Medhi</Link>
    <Card id='123' name='ciao'
    />
    <Card id='456' name='Girgia'
    />
    <Card id='789' name='Sara'
    />
    </div>
)
}

export default Index;